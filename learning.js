'use strict';
// Pure helpers shared by the interface and regression tests.
const Learning = {
  correctIndices(question) {
    return question.correct || [0];
  },
  isCorrect(question, answer = {}) {
    const expected = this.correctIndices(question);
    const selected = question.correct ? (answer.selected || []) : (Number.isInteger(answer.choice) ? [answer.choice] : []);
    return selected.length === expected.length && new Set(selected).size === selected.length && expected.every(i => selected.includes(i));
  },
  schedule(previous, rating, now = Date.now()) {
    const streak = rating === 'known' ? Math.min(5, (previous?.streak || 0) + 1) : 0;
    const days = rating === 'known' ? [1, 3, 7, 14, 30][streak - 1] : 1;
    return { streak, due: now + days * 86400000, reviewed: now };
  },
  normalize(raw, ids) {
    if (!raw || typeof raw !== 'object' || !raw.ratings || !raw.drafts || !Array.isArray(raw.stars)) throw Error('Ogiltig framstegsfil');
    const out = { ratings: {}, drafts: {}, stars: [...new Set(raw.stars.filter(id => ids.includes(id)))], reviews: {}, session: null, history: [] };
    for (const id of ids) {
      if (['known', 'hard'].includes(raw.ratings[id])) out.ratings[id] = raw.ratings[id];
      if (typeof raw.drafts[id] === 'string') out.drafts[id] = raw.drafts[id].slice(0, 20000);
      const r = raw.reviews?.[id];
      if (r && Number.isFinite(r.due) && Number.isFinite(r.reviewed) && Number.isInteger(r.streak) && r.streak >= 0 && r.streak <= 5) out.reviews[id] = { due: r.due, reviewed: r.reviewed, streak: r.streak };
    }
    const session = s => {
      if (!s || !Array.isArray(s.ids) || !s.ids.length || s.ids.length > ids.length || new Set(s.ids).size !== s.ids.length || s.ids.some(id => !ids.includes(id)) || !Number.isInteger(s.index) || s.index < 0 || s.index >= s.ids.length) return null;
      const answers = {};
      for (const id of s.ids) {
        const a = s.answers?.[id];
        if (!a || typeof a !== 'object') {
          if (!raw.reviews && typeof raw.drafts[id] === 'string') answers[id] = { draft: raw.drafts[id].slice(0,20000) };
          continue;
        }
        answers[id] = { revealed: a.revealed === true };
        if (Number.isInteger(a.choice) && a.choice >= 0 && a.choice < 20) answers[id].choice = a.choice;
        if (Array.isArray(a.selected)) answers[id].selected = [...new Set(a.selected.filter(i => Number.isInteger(i) && i >= 0 && i < 20))];
        if (Array.isArray(a.checked)) answers[id].checked = [...new Set(a.checked.filter(i => Number.isInteger(i) && i >= 0 && i < 20))];
        if (['known','hard'].includes(a.rating)) answers[id].rating = a.rating;
        if (typeof a.draft === 'string') answers[id].draft = a.draft.slice(0,20000);
        else if (!raw.reviews && typeof raw.drafts[id] === 'string') answers[id].draft = raw.drafts[id].slice(0,20000);
      }
      return { ids: s.ids, index: s.index, mode: typeof s.mode === 'string' ? s.mode.slice(0,100) : 'Övningspass', answers, orders: {}, finished: s.finished === true, recall: s.recall === true };
    };
    out.session = session(raw.session);
    out.history = (Array.isArray(raw.history) ? raw.history : []).map(session).filter(Boolean).slice(0,10);
    return out;
  }
};
if (typeof module !== 'undefined') module.exports = Learning;

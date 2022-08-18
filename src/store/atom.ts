import { atom } from "jotai";
//initial Atom
export const cupsAtom = atom(
  Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    isFull: false,
  }))
);
export const percentAtom = atom(0);
// handleCup Atom
export const fullCupAtom = atom(
  (get) => get(cupsAtom),
  (get, set, itemId: number) => {
    set(cupsAtom, () => {
      const newCups = get(cupsAtom);
      if (!newCups[itemId - 1].isFull) {
        for (let i = 0; i < itemId; i++) {
          newCups[i].isFull = true;
        }
      } else if (newCups[itemId - 1].isFull) {
        for (let i = 7; i > itemId - 2; i--) {
          newCups[i].isFull = false;
        }
      }

      return [...newCups];
    });
    set(percentAtom, () => {
      let newPercent = get(percentAtom);
      const newCups = get(cupsAtom);
      if (!newCups[itemId - 1].isFull) {
        newPercent = itemId - 1;
      } else if (newCups[itemId - 1].isFull) {
        newPercent = itemId;
      }
      return newPercent;
    });
  }
);

export const resetAtom = atom(
  (get) => get(cupsAtom),
  (get, set) => {
    set(cupsAtom, () => {
      const newCups = get(cupsAtom);
      newCups.forEach((i) => (i.isFull = false));
      return [...newCups];
    });
    set(percentAtom, 0);
  }
);

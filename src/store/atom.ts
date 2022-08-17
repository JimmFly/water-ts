import { atom } from "jotai";

export const cupsAtom = atom(
  Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    isFull: false,
  }))
);
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
  }
);

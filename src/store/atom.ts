import { atom } from 'jotai';

export const cupAtom=atom(Array.from({ length: 8 }, (_, i) => ({
    id: `${i + 1}`,
    isFull: false,
  })))
import { atom, selector } from "recoil";

export const cartList = atom({
  key: "cartList",
  default: [],
});

export const cartCount = selector({
  key: "cartCount",
  get: ({ get }) => {
    const data = get(cartList);
    let totalQuantity = 0;
    data.map((element) => (totalQuantity += element.quantity));
    return totalQuantity;
  },
});

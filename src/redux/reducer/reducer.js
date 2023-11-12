import { danhSachGhe } from "../../data/data";

let initialState = {
  danhSachGhe: danhSachGhe,
  detail: danhSachGhe[0],
  chonGhe: [],
};

export let gheReduder = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

import { danhSachGheArr } from "../../data/data";

let initialState = {
  danhSachGheArr: danhSachGheArr,
  detail: danhSachGheArr[0],
  chonGhe: [],
};

export let gheReduder = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

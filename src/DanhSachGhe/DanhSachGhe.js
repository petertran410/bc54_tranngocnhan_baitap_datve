import React, { Component } from "react";
import background from "../img/bgmovie.jpg";
import "./DanhSachGhe.scss";
import DatVe from "../DatVe/DatVe";
import DanhSachDaDat from "../DanhSachDaDat/DanhSachDaDat";

export default class DanhSachGhe extends Component {
  render() {
    return (
      <div
        className="background_container"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="container section_process">
          <div className="section_process--datVe">
            <DatVe />
          </div>
          <div className="section_process--danhSachDat">
            <DanhSachDaDat />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./DatVe.scss";
import { BiSolidTv } from "react-icons/bi";
import { connect } from "react-redux";

class DatVe extends Component {
  render() {
    return (
      <div className="datVe">
        <header>
          <p>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</p>
          <span>
            <BiSolidTv />
          </span>
        </header>
      </div>
    );
  }
}

let mapToStateProps = (state) => {
  return {
    danhSachGhe: state.danhSachGhe,
  };
};

export default connect(mapToStateProps)(DatVe);

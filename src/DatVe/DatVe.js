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

        <div className="section-ghe">
          <div className="gheNumber">
            <table>
              <thead>
                <tr>
                  {this.props.danhSachGheArr.map((item, index) => {
                    if (item.hang === "") {
                      return (
                        <th key={index}>
                          {item.danhSachGhe.map((ghe) => {
                            return <span className="soGhe" key={ghe.soGhe}>{ghe.soGhe}</span>;
                          })}
                        </th>
                      );
                    }
                  })}
                </tr>
              </thead>
            </table>
          </div>
          <div className="ghe"></div>
          <div className="thuTuGhe"></div>
        </div>
      </div>
    );
  }
}

let mapToStateProps = (state) => {
  return {
    danhSachGheArr: state.danhSachGheArr,
  };
};

export default connect(mapToStateProps)(DatVe);

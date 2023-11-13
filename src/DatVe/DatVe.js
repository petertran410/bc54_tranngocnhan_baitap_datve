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
                            return (
                              <span className="soGhe" key={ghe.soGhe}>
                                {ghe.soGhe}
                              </span>
                            );
                          })}
                        </th>
                      );
                    }
                  })}
                </tr>
              </thead>
              <tbody className="d-flex">
                <div className="chuHangGhe">
                  {this.props.danhSachGheArr.map((item, index) => {
                    if (item.hang !== "") {
                      return (
                        <tr key={index}>
                          <td>
                            <span>{item.hang}</span>
                          </td>
                        </tr>
                      );
                    }
                  })}
                </div>
                <div className="soHangGhe">
                  {[...Array(10)].map((_, rowIndex) => (
                    <tr key={rowIndex}>
                      {this.props.danhSachGheArr.map((item, index) => {
                        if (item.hang === "") {
                          const rowSeats = item.danhSachGhe.map((ghe) => (
                            <span className="soGhe" key={ghe.soGhe}>
                              {ghe.soGhe}
                            </span>
                          ));

                          return <td key={index}>{rowSeats}</td>;
                        }

                        return null;
                      })}
                    </tr>
                  ))}
                </div>
              </tbody>
            </table>
          </div>
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

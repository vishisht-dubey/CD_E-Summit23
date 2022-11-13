import React, { Component } from "react";
import StatisticsSimpleLight from "../Sats/Sats";
import style from "./Dashboard.module.scss";
import Image from "next/image";
const Dashboard = () => {
  return (
    <section>
      <div className={style.container1}>
        <div className={`${style.row}  ${style.row1} `}>
          <div className={style.col} style={{ flexBasis: "100%" }}>
            <div className={style.imgBox}>
              <Image
                className={style.imgBox}
                src="https://images.livemint.com/img/2020/02/20/600x338/Aman_1582222373165.jpg"
                width="600"
                height="338"
                alt="amanGupta"
              />
            </div>
            <p className={style.userName}>Aman Gupta</p>
            <p className={style.post}>CEO boAT</p>
            <div className={style.stats}>
              <StatisticsSimpleLight />
            </div>
          </div>
        </div>
        <div className={`${style.row}  ${style.row2} `}>
          <div className={`${style.col}  ${style.col2} `}>
            <h1>Analytics</h1>
            <div className={style.col3}>
              <h1 style={{ color: "pink" }}>This week sale</h1>
              <h1 style={{ color: "pink" }}>6.9 k </h1>
            </div>
            <div className={style.col3}>
              <h1 style={{ color: "pink" }}>Earnings of this week</h1>
              <h1 style={{ color: "pink" }}>$212 Mn</h1>
            </div>
          </div>
          <div className={`${style.col}  ${style.col2} `}>
            <h1>Placeholder</h1>
            <div className={style.col3}>
              <h1 style={{ color: "pink" }}>Earnings of this week</h1>
              <h1 style={{ color: "pink" }}>$212 Mn</h1>
            </div>
            <div className={style.col3}>
              <h1 style={{ color: "pink" }}>This week sale</h1>
              <h1 style={{ color: "pink" }}>6.9</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;

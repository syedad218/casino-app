import { FC, useState, useEffect } from "react";
import { useAuth } from "../../AuthProvider";

const Home = () => {
  const auth = useAuth();
  const player = auth.authenticated;
  console.log("player", player);

  return (
    <div className="casino" style={{ display: "block" }}>
      <div className="ui grid centered">
        <div className="twelve wide column">
          <div className="ui list">
            {/* <!-- player item template --> */}
            <div className="player item">
              <img className="ui avatar image" src="" alt="avatar" />

              <div className="content">
                <div className="header">
                  <b className="name"></b>
                </div>
                <div className="description event"></div>
              </div>
            </div>
            {/* <!-- end player item template --> */}
          </div>
          <div className="logout ui left floated secondary button inverted">
            <i className="left chevron icon"></i>Log Out
          </div>
        </div>
        <div className="four wide column">
          <div className="search ui small icon input ">
            <input type="text" placeholder="Search Game" />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      <div className="ui grid">
        <div className="twelve wide column">
          <h3 className="ui dividing header">Games</h3>

          <div className="ui relaxed divided game items links">
            {/* <!-- game item template --> */}
            <div className="game item">
              <div className="ui small image">
                <img src="" alt="game-icon" />
              </div>
              <div className="content">
                <div className="header">
                  <b className="name"></b>
                </div>
                <div className="description"></div>
                <div className="extra">
                  <div className="play ui right floated secondary button inverted">
                    Play
                    <i className="right chevron icon"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end game item template --> */}
          </div>
        </div>
        <div className="four wide column">
          <h3 className="ui dividing header">Categories</h3>

          <div className="ui selection animated list category items">
            {/* <!-- category item template --> */}
            <div className="category item">
              <div className="content">
                <div className="header"></div>
              </div>
            </div>
            {/* <!-- end category item template --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

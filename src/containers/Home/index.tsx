import { FC, useState, useEffect } from "react";
import { useAuth } from "../../AuthProvider";
import { fetchGames } from "./actions";
import Game, { GameType } from "./Game";

const Home = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const auth = useAuth();
  const player = auth.authenticated;
  console.log("games", games);

  useEffect(() => {
    fetchGames(setGames);
  }, []);

  return (
    <div className="casino" style={{ display: "block" }}>
      <div className="ui grid centered">
        <div className="twelve wide column">
          <div className="ui list">
            {/* <!-- player item template --> */}
            <div className="player item">
              <img className="ui avatar image" src={player?.avatar} alt="avatar" />

              <div className="content">
                <div className="header">
                  <b className="name">{player?.name}</b>
                </div>
                <div className="description event">{player?.event}</div>
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
      <div className="ui two column stackable grid">
        <div className="twelve wide column">
          <h3 className="ui dividing header">Games</h3>

          <div className="ui relaxed divided game items links">
            {games?.map((game) => (
              <Game game={game} key={game?.code} />
            ))}
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
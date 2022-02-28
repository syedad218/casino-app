import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const GameScreen = () => {
  const { game } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // @ts-ignore
    if (game) window.comeon.game.launch(game);
  }, [game]);

  return (
    <div className="ingame" style={{ display: "block" }}>
      <div className="ui stackable grid centered">
        <div className="twelve wide column">
          <div className="ui secondary button inverted" onClick={() => navigate("/casino-app/")}>
            <i className="left chevron icon"></i>Back
          </div>
        </div>
        <div className="twelve wide column">
          <div id="game-launch"></div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;

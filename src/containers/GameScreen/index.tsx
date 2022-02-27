import { FC, useEffect } from "react";
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
      <div className="ui grid centered">
        <div className="three wide column">
          <div
            className="ui right floated secondary button inverted"
            onClick={() => navigate("/", { replace: true })}
          >
            <i className="left chevron icon"></i>Back
          </div>
        </div>
        <div className="ten wide column">
          <div id="game-launch"></div>
        </div>
        <div className="three wide column"></div>
      </div>
    </div>
  );
};

export default GameScreen;

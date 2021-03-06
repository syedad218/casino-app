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
    <div className="ingame">
      <div className="ui stackable grid centered">
        <div className="sixteen wide column">
          <div className="ui secondary button inverted" onClick={() => navigate("/")}>
            <i className="left chevron icon"></i>Back
          </div>
        </div>
        <div className="sixteen wide column">
          <div id="game-launch"></div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;

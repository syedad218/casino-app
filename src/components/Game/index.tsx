import { FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GameType } from "./types";

interface Props {
  game: GameType;
}

const Game: FC<Props> = ({ game }) => {
  const navigate = useNavigate();
  const playGame = () => navigate(`/games/${game?.code}`);
  return (
    <Link className="game item" key={game?.code} to={`/games/${game?.code}`}>
      <div className="ui small image">
        <img src={game?.icon} alt="game-icon" />
      </div>
      <div className="content">
        <div className="header">
          <b className="name">{game?.name}</b>
        </div>
        <div className="description">{game?.description}</div>
        <div className="extra">
          <div className="play ui right floated secondary button inverted" onClick={playGame}>
            Play
            <i className="right chevron icon"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Game;

import { FC } from "react";
import { useNavigate } from "react-router-dom";

export interface GameType {
  code: string;
  name: string;
  icon: string;
  categoryIds: number[];
  description: string;
}

interface Props {
  filteredGames: GameType[];
  loading?: boolean;
}

const Game: FC<Props> = ({ filteredGames, loading }) => {
  const navigate = useNavigate();

  if (!filteredGames || filteredGames.length === 0) {
    return (
      <div className="ui icon message">
        <div className="content">
          <p>No game found!!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ui relaxed divided game items links">
      {filteredGames?.map((game) => (
        <div className="game item" key={game?.code}>
          <div className="ui small image">
            <img src={game?.icon} alt="game-icon" />
          </div>
          <div className="content">
            <div className="header">
              <b className="name">{game?.name}</b>
            </div>
            <div className="description">{game?.description}</div>
            <div className="extra">
              <div
                className="play ui right floated secondary button inverted"
                onClick={() => navigate(`/casino-app/games/${game?.code}`)}
              >
                Play
                <i className="right chevron icon"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Game;

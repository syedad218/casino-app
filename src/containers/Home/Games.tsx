import { FC } from "react";
import GameCard from "../../components/Game";
import { GameType } from "../../components/Game/types";

interface Props {
  filteredGames: GameType[];
  loading?: boolean;
}

const Game: FC<Props> = ({ filteredGames, loading }) => {
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
        <GameCard game={game} key={game?.code} />
      ))}
    </div>
  );
};

export default Game;

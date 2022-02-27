import { FC } from "react";

export interface GameType {
  code: string;
  name: string;
  icon: string;
  categoryIds: number[];
  description: string;
}

interface Props {
  game: GameType;
}

const Game: FC<Props> = ({ game }) => {
  return (
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
          <div className="play ui right floated secondary button inverted">
            Play
            <i className="right chevron icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
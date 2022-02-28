import { FC } from "react";
import { Player } from "../../containers/App/AuthProvider";

interface Props {
  user: Player | null;
  handleLogout: () => void;
}

const Profile: FC<Props> = ({ user, handleLogout }) => {
  return (
    <div className="twelve wide column">
      <div className="ui list">
        <div className="player item">
          <img className="ui avatar image" src={user?.avatar} alt="avatar" />

          <div className="content">
            <div className="header">
              <b className="name">{user?.name}</b>
            </div>
            <div className="description event">{user?.event}</div>
          </div>
        </div>
      </div>
      <div className="logout ui secondary button inverted" onClick={handleLogout}>
        <i className="left chevron icon"></i>Log Out
      </div>
    </div>
  );
};

export default Profile;

import react from "react";
import "./Friends.css";
import PersonAddSharpIcon from "@material-ui/icons/PersonAddSharp";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import sexy from "../Friends/sexy.jpg";
import nannu from "../Friends/nannu.jpg";
import paaji from "../Friends/paaji.jpg";
const Friends = (props) => {
  return (
    <div className="friend-container">
      <div className="headline">
        <h3>Friend Activity</h3>
        <PersonAddSharpIcon className="add"></PersonAddSharpIcon>
      </div>
      <div className="friends">
        <div className="f1">
          <img src={paaji}></img>
          <div className="fr-info">
            <div className="Name">Mohitpal</div>
            <div className="song">Toxic.AP Dhillon</div>
            <div className="albummm">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <div>This is AP Dhillon</div>
            </div>
          </div>
        </div>
        <div className="f1">
          <img src={nannu}></img>
          <div className="fr-info">
            <div className="Name">Vinayak</div>
            <div className="song">Peaches.Justin B</div>
            <div className="albummm">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <div>Booty Call</div>
            </div>
          </div>
        </div>
        <div className="f1">
          <img src={sexy}></img>
          <div className="fr-info">
            <div className="Name">Sexy Saini</div>
            <div className="song">Kar Har Maidan Fateh.Sanju</div>
            <div className="albummm">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <div>Motivation 101</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;

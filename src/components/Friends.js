import react from "react";
import "./Friends.css";
import PersonAddSharpIcon from "@material-ui/icons/PersonAddSharp";

const Friends = (props) => {
  return (
    <div className="friend-container">
      <div className="headline">
        <h3>Friend Activity</h3>
        <PersonAddSharpIcon className="add"></PersonAddSharpIcon>
      </div>
    </div>
  );
};

export default Friends;

import react from "react";
import "./Albums.css";
import NavigateNextSharpIcon from "@material-ui/icons/NavigateNextSharp";
import NavigateBeforeSharpIcon from "@material-ui/icons/NavigateBeforeSharp";
import img from "../Images/Mad_Martin.png";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import bol from "../Images/bol.jpg";
import ap from "../Images/ap.jpg";
import hh from "../Images/hh.jpg";
import indie from "../Images/indie.jpg";
import PlayCircleFilledSharpIcon from "@material-ui/icons/PlayCircleFilledSharp";
import potter from "../Images/potter.jpeg";
import tx from "../Images/tx.jpg";
import dc from "../Images/dc.jpg";
import tiss from "../Images/tiss.jpg";
import best from "../albums/best.jpg";
import id from "../albums/id.jpg";
import pop from "../albums/pop.jpg";
import top from "../albums/top.jpg";

const Albums = (props) => {
  return (
    <div className="album-container">
      <div className="navbar">
        <div className="navigation">
          <NavigateBeforeSharpIcon className="before" />
          <NavigateNextSharpIcon className="next" />
        </div>
        <div className="account-info">
          <img src={img}></img>
          <div className="info">Aditya Singh</div>
          <ArrowDropDownSharpIcon className="dropdown" />
        </div>
      </div>
      <h2 className="greeting">Good Evening</h2>
      <div className="playlists-container">
        <div className="r1">
          <div className="p1">
            <img src={ap}></img>
            <div className="t1">AP Dhillon</div>
            <PlayCircleFilledSharpIcon className="play"></PlayCircleFilledSharpIcon>
          </div>
          <div className="p2">
            <img src={hh}></img>
            <div className="t2">God bless my ears</div>
            <PlayCircleFilledSharpIcon className="play"></PlayCircleFilledSharpIcon>
          </div>
        </div>
        <div className="r2">
          <div className="p3">
            <img src={bol}></img>
            <div className="t3">Bollywood Classics</div>
            <PlayCircleFilledSharpIcon className="play"></PlayCircleFilledSharpIcon>
          </div>
          <div className="p4">
            <img src={indie}></img>
            <div className="t4">Indie Mix</div>
            <PlayCircleFilledSharpIcon className="play"></PlayCircleFilledSharpIcon>
          </div>
        </div>
      </div>
      <h2 className="greeting">Episodes for you</h2>
      <div className="albums-container">
        <div className="a1">
          <img src={dc}></img>
          <div className="album-title">Dan Carlin's Hardcore History</div>
          <div className="length">Jan 12 - 56 MIN</div>
        </div>
        <div className="a1">
          <img src={tiss}></img>
          <div className="album-title">The Internet Said So..</div>
          <div className="length">Feb 3 - 48 MIN</div>
        </div>
        <div className="a1">
          <img src={potter}></img>
          <div className="album-title">What The Wizard!!</div>
          <div className="length">Jan 23 - 39 MIN</div>
        </div>
        <div className="a1">
          <img src={tx}></img>
          <div className="album-title">TedX Shorts</div>
          <div className="length">Mar 12 - 46 MIN</div>
        </div>
      </div>
      <h2 className="greeting">Your top mixes</h2>
      <div className="albums-container">
        <div className="a1">
          <img src={top}></img>
          <div className="album-title">Top 50 Global</div>
          <div className="length">2 HR 36 MIN</div>
        </div>
        <div className="a1">
          <img src={pop}></img>
          <div className="album-title">Best of POP</div>
          <div className="length">2 HR 48 MIN</div>
        </div>
        <div className="a1">
          <img src={id}></img>
          <div className="album-title">This is Imagine Dragons</div>
          <div className="length">3 HR 23 MIN</div>
        </div>
        <div className="a1">
          <img src={best}></img>
          <div className="album-title">Best of Decade</div>
          <div className="length">1 HR 55 MIN</div>
        </div>
      </div>
    </div>
  );
};

export default Albums;

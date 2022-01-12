import react from "react";
import "./Links.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import SortSharpIcon from "@material-ui/icons/SortSharp";
import AddBoxSharpIcon from "@material-ui/icons/AddBoxSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";

const Links = (props) => {
  return (
    <div className="link-container">
      <MoreHorizIcon className="dot-icon"></MoreHorizIcon>
      <div className="home-container">
        <HomeSharpIcon></HomeSharpIcon>
        <div className="home-text">Home</div>
      </div>
      <div className="search-container">
        <SearchIcon></SearchIcon>
        <div className="search-text">Search</div>
      </div>
      <div className="library-container">
        <SortSharpIcon></SortSharpIcon>
        <div className="library-text">Library</div>
      </div>
      <div className="playlist-container">
        <AddBoxSharpIcon></AddBoxSharpIcon>
        <div className="playlist-text">Create Playlist</div>
      </div>
      <div className="like-container">
        <FavoriteSharpIcon className="like"></FavoriteSharpIcon>
        <div className="like-text">Liked Songs</div>
      </div>
      <hr className="line"></hr>
      <ul className="playlists-list">
        <li>Mudit+Aditya</li>
        <li>Bollywood Classics</li>
        <li>God bless my ears</li>
        <li>Indie</li>
        <li>Mix</li>
        <li>AP Dhillon Mix</li>
      </ul>
    </div>
  );
};

export default Links;

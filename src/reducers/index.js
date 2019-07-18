import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'Smells Like Teen Spirt', duration: '4:05'},
    {title: 'Even Flow',duration: '5:00'},
    {title: 'Black Hole Sun', duration: '3:45'},
    {title: 'Plush', duration: '4:23'},
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

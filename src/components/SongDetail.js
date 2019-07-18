import React from 'react';
import {connect} from 'react-redux';

//{ song } = 'the selected song from props obj' (instead od state.selectedSong)
const SongDetail = ({ song }) => {
console.log(song)
  if (!song) {
    return <div>Please Select a Song</div>
  }

  return(
    <div>{song.title}</div>
  )
};

const mapStateToProps = (state) => {
  console.log(state.selectedSong)
  return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);

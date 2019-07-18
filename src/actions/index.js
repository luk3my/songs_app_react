// Action creater - call this on event (eg. onClick)
export const selectSong = (song) => {
  //return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

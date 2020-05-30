import { D_COLOR, D_LOOP, D_ORDER, D_PRELOAD, D_AUDIO_TYPE, D_LRC_TYPE, D_DATA_TYPE, D_ERROR_TYPE, D_PLAYER_EVENT } from "./define";
import { S_AUDIO, S_VOLUME, S_OPTION } from "./struct";
import util from "./util";

class MPlayer {

  constructor(options = {}) {
    util.checkArgument(document.querySelector(options.container), D_DATA_TYPE.ELEMENT, D_ERROR_TYPE.CONTAINER_NOT_FOUND, 'constructor(options.container)');

    this.options = S_OPTION(options);
    this.lrc = {
      show: this.showLrc,
      hide: this.hideLrc,
      toggle: this.toggleLrc
    };
    this.list = {
      show: this.showList,
      hide: this.hideList,
      toggle: this.toggleList,
      add: this.addToList,
      remove: this.removeFromList,
      switch: this.switchInList,
      clear: this.clearList
    };
    this.listener = {};
    this.audio = new Audio();
    this.init();
  }

  init() {
    
  }

  play() {

  }

  pause() {

  }

  seek(time) {
    util.checkArgument(time, D_DATA_TYPE.INTEGER, D_ERROR_TYPE.INVALID_ARGUMENTS, 'seek(time)');

  }

  toggle() {

  }

  on(event, handler) {
    util.checkArgument(event, D_DATA_TYPE.STRING, D_ERROR_TYPE.INVALID_ARGUMENTS, 'on(event..)');
    util.checkArgument(handler, D_DATA_TYPE.FUNCTION, D_ERROR_TYPE.INVALID_ARGUMENTS, 'on(..handler)');

    if (Object.values(D_PLAYER_EVENT).includes(event)) {
      this.listener[event] = handler;
    } else {
      this.audio.addEventListener(event, e => {
        handler(this.audio, e);
      });
    }
  }

  setVolume(percentage, nostorage) {
    util.checkArgument(percentage, D_DATA_TYPE.NUMBER, D_ERROR_TYPE.INVALID_ARGUMENTS, 'setVolume(percentage..)');
    util.checkArgument(nostorage, D_DATA_TYPE.BOOLEAN, D_ERROR_TYPE.INVALID_ARGUMENTS, 'setVolume(..nostorage)');

  }

  setTheme(color, index) {
    util.checkArgument(color, D_DATA_TYPE.STRING, D_ERROR_TYPE.INVALID_ARGUMENTS, 'setTheme(color..)');
    util.checkArgument(index, D_DATA_TYPE.INTEGER, D_ERROR_TYPE.INVALID_ARGUMENTS, 'setTheme(..index)');

  }

  showMessage(text, time, opacity = 0.8) {
    util.checkArgument(text, D_DATA_TYPE.STRING, D_ERROR_TYPE.INVALID_ARGUMENTS, 'showMessage(text..)');
    util.checkArgument(time, D_DATA_TYPE.INTEGER, D_ERROR_TYPE.INVALID_ARGUMENTS, 'showMessage(..time..)');
    util.checkArgument(opacity, D_DATA_TYPE.NUMBER, D_ERROR_TYPE.INVALID_ARGUMENTS, 'showMessage(..opacity)');

  }

  backward() {

  }

  forward() {

  }

  destroy() {

  }

  showLrc() {
    console.log(this)
  }

  hideLrc() {
    console.log(this)
  }

  toggleLrc() {
    console.log(this)
  }

  showList() {
    console.log(this)
  }

  hideList() {
    console.log(this)
  }

  toggleList() {
    console.log(this)
  }

  addToList(audios) {
    util.checkArgumentMultiType(audios, [D_DATA_TYPE.ARRAY, D_DATA_TYPE.OBJECT], D_ERROR_TYPE.INVALID_ARGUMENTS, 'addToList(audios)');
    console.log(this)
  }

  removeFromList(index) {
    util.checkArgument(index, D_DATA_TYPE.INTEGER, D_ERROR_TYPE.INVALID_ARGUMENTS, 'removeFromList(index)');
    console.log(this)
  }

  switchInList(index) {
    util.checkArgument(index, D_DATA_TYPE.INTEGER, D_ERROR_TYPE.INVALID_ARGUMENTS, 'switchInList(index)');
    console.log(this)
  }

  clearList() {
    console.log(this)
  }
}

MPlayer.version = MPLAYER_VERSION;
Object.assign(MPlayer, {
  D_COLOR, D_LOOP, D_ORDER, D_PRELOAD, D_AUDIO_TYPE, D_LRC_TYPE, D_DATA_TYPE, D_ERROR_TYPE, D_PLAYER_EVENT
}, {
  S_AUDIO, S_VOLUME, S_OPTION
});
MPlayer.toString = function () {
  return '[MPlayer mplayer]';
};

export default MPlayer;
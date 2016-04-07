import ToggleFullscreenButton from 'classes/ToggleFullscreenButton'
import DiscardImageButton from 'classes/DiscardImageButton'

export default class Toolbar {

  constructor(){
    let buttons = Array();
    let toggleFS = new ToggleFullscreenButton("#btnFullscreen");
    buttons.push(toggleFS);
    let discardImage = new DiscardImageButton("#btnDiscardImage");
    buttons.push(discardImage);

    this.buttons = buttons;
  }

}

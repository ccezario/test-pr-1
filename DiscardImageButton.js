import SimpleActionButton from 'classes/SimpleActionButton'

export default class DiscardImageButton extends SimpleActionButton {

  constructor(selector){
    super(selector);
  }

  click(){
    console.log("Clicando em DiscardImageButton");
  }

}

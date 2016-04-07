/**
 * Created by trestini on 30/11/15.
 */
export default

class StartupPace {

  constructor(){

  }

  show(){
    // exibe o modal de passo
  }

  get totalImages(){
    return this.totalImages;
  }

  set totalImages(totalImages){
    this.totalImages = totalImages;
    this.current = 0;
    console.log(`Pace principal com base em ${this.totalImages} imagens`);
  }

  addStep(){
    console.log(`Completed ${this.current} from ${this.totalImages}`);
    this.current++;
  }

}

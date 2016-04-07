import Canvas from 'classes/Canvas'
import Thumbnailbar from 'classes/Thumbnailbar'
import Toolbar from 'classes/Toolbar'
import ContentLoader from 'classes/ContentLoader'
import StartupPace from 'classes/StartupPace'

export default class Main {

  /**
  Tudo comeca aqui!
  */
  init(...args){
    console.log("onReady ok()");

    this.setupBootstrapStuff();

    let pace = new StartupPace();

    let loader = new ContentLoader(pace);
    let arrImg = loader.getRemoteImageList();
    loader.loadAllImages(arrImg);


    //let pace = new StartupPace();
    //pace.show();
    //
    //let loader = new ContentLoader();
    //
    //
    //
    //
    //let canvas = new Canvas('#canvas');
    //let thumbs = new Thumbnailbar(canvas);
    //
    //let toolbar = new Toolbar();
  }

  /**
   * Metodo responsavel por inicializar todos os componentes do Bootstrap
   *
   * @access private
   */
  setupBootstrapStuff(){
    $('[data-toggle="tooltip"]').tooltip({
      placement : 'auto left'
    });
  }

}

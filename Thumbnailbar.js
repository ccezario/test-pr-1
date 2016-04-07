import Image from 'classes/Image'
import ThumbnailButton from 'classes/ThumbnailButton'

export default

/**
 * A classe Thumbnailbar é responsável por gerenciar o comportamento dos botoes da barra
 * de thumbnails. Ela recebe os enderecos das imagens e cria os botoes com corportamento
 * e visual prontos para uso.
 */
class ThumbnailBar {

  /**
   * @param {Canvas} canvas - O objeto Canvas que representa o painel de visualizacao
   * principal
   */
  constructor(canvas){

    /**
     * @type {Canvas}
     * @access protected
     */
    this.canvas = canvas;

    /**
     * @type {Map<Image, Image>}
     * @access protected
     */
    this.buttons = new Map();
  }

  /**
   * Este metodo é responsável por receber os caminhos das imagens, instanciar os respectivos
   * objetos image e criar os {@link ThumbnailButton} para a barra de thumbs.
   *
   * @param {Map<string, string>} imageMap - Mapa contendo o caminho remoto do thumb como
   * chave e o caminho remoto da imagem principal como valor
   */
  setup(imageMap){
    for( let [thumb, img] of imageMap.entries() ){
      let thumbImage = new Image(thumb);
      let mainImage = new Image(img);
      let selector = '.selector'; // this is wrong

      let btn = new ThumbnailButton(selector, this.canvas, mainImage, thumbImage);
      this.addButton(btn);
    }
  }

  /**
   * Adiciona um botao na barra de thumbnails. Esse metodo deve configurar, incluir e exibir
   * o botao na barra de forma síncrona.
   *
   * @param {ThumbnailButton} button - botao a ser adicionado na barra de botoes
   */
  addButton(button){
    this.buttons.set(button.selector, button);
  }

}

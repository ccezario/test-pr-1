/**
 * Created by trestini on 30/11/15.
 */
export default

/**
 * A classe ThumbnailButton estende a funcionalidade de um botao criando uma relacao
 * entre o botao e a classe {@link Canvas}.
 *
 * @abstract
 */
class ThumbnailButton extends SimpleActionButton {

  /**
   * @param {string} selector - o CSS selector do objeto na arvore DOM
   * @param {Canvas} canvas - o painel de visualizacao principal
   * @param {Image} image - o objeto {@link Image} que representa a imagem a ser exibida
   * @param {Image} thumb - o objeto {@link Image} do thumb
   */
  constructor(selector, canvas, image, thumb){
    super(selector);

    /**
     * @type {Canvas}
     * @access protected
     */
    this.canvas = canvas;

    /**
     * @type {Image}
     * @access protected
     */
    this.image = image;

    /**
     * @type {Image}
     * @access protected
     */
    this.thumb = thumb;
  }

  /**
   * Seleciona e exibe a imagem no painel de visualizacao principal
   */
  click(){
    console.log(`Click no Thumb. Exibindo ${this.image.remotePath} no painel principal`);
  }

}

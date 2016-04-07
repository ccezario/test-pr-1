export default

/**
  * Essa classe é responsável pela apresentação de conteúdo na parte principal
  * da tela de tipificação. Os métodos dessa classe serão invocados pelas
  * classes de ação, tais como {@link Thumbnailbar} ou {@link Toolbar}.
  *
  * @access public
  *
*/
class Canvas {

  /**
    * Método responsável por exibir uma {@link Image} no espaço principal de
    * exibição.
    * @param {Image} image - O objeto {@link Image} que contem a imagem a ser
    * apresentada no espaco de exibicao principal.
    * @return {void}
    * @access public
  */
  displayImage(image){
    if( image instanceof Image ){
      console.log(`Mostrando imagem ${image.remotePath}`);
    }
  }

}

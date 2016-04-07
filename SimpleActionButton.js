export default class SimpleActionButton {

  constructor(selector){
    /** @access protected */
    this.selector = selector;
    /** @access protected */
    this.$selector = $(selector);

    this.$selector.on('click', () => {
      this.click();
    });
  }

  /**
   * O metodo click() é invocado na ação de click do botao cujo selector
   * foi passado como construtor da classe. O bind entre o elemento e o
   * metodo da subclasse é feito automaticamente.
   *
   * @abstract
   * @access protected
   */
  click(){}

}

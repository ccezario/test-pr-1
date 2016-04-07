public class Test {

  private Integer internalVar;

  public void run(){
    if( this.internalVar != null ){
      internalVar++;
    } else {
      internalVar = 0;
    }
  }

  public void setInternalVar(Integer i){
    this.internalVar = i;
  }

  public Integer getInternalVar(){
    return this.internalVar;
  }

  public static void main(String[] args){
    Test t = new Test();
    t.setInternalVar(10);
    Integer my = 80 + t.getInternalVar();

    Test t2 = new Test();
    t2.run();
    my = t2.getInternalVar();
  }

}

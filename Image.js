export default class {

  constructor(remotePath){
    this.fetched = false;
    this.remotePath = remotePath;
  }

  fetch(){
    console.log( `Fetching ${this.remotePath}` );

    this.width = 101;
    this.height = 808;
    this.size = 8855;

    this.fetched = true;
  }

  get dimensions(){
    return {width: this.width, height: this.height};
  }

}

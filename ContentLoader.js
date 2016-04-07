/**
 * Created by trestini on 30/11/15.
 */

export default

/**
 *
 */
class ContentLoader {

  constructor(pace){
    this.pace = pace;
  }

  getRemoteImageList(){
    let list = [
      {
        image : 'images/image1.jpg',
        thumb: 'images/thumb1.jpg'
      },
      {
        image : 'images/image2.jpg',
        thumb: 'images/thumb2.jpg'
      },
      {
        image : 'images/image3.jpg',
        thumb: 'images/thumb3.jpg'
      }];

    this.pace.totalImages = list.count * 2;

  }

  loadAllImages(imageList){
    let imageObjList = imageList.map((elem) => {
      this.pace.addStep();
      return {
        image : new Image(elem.image),
        thumb : new Image(elem.thumb)
      }
    });

  }


}

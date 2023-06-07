const DL = require("./getDL");


const controller = {
  getPhotosController: async (category,page) => {
    try {
      const numberImagesDisplayed = 9;
      const from = numberImagesDisplayed * page - numberImagesDisplayed;  
      const to = numberImagesDisplayed * page;  
      const result = await DL.getPhotosDL(category);
      return result.data.hits.slice(from, to);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { controller };
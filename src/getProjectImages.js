/*To retrieve image paths in src folder for:

*/

const getProjectImages = (project, numImgs) => {
  const allProjectImages = [];

  for (let i = 1; i <= numImgs; i++) {
    const img =
      require(`./assets/projects/${project}/${project}-${i}.jpg`).default;
    allProjectImages.push(img);
  }

  return allProjectImages;
};

export default getProjectImages;

function insertString(original, toInsert, pos) {
  if (typeof pos == "undefined") {
    pos = 0;
  }
  if (typeof toInsert == "undefined") {
    toInsert = "";
  }
  return original.slice(0, pos) + toInsert + original.slice(pos);
}

const imageResize = (imageUrl, imgurThumnailSuffix) => {
  // Use Imgur API to send thumbnail version
  // of image via a thumbnail suffix appended
  // to end of the image id
  // position to append the thumbnail suffix
  const insertionPosition = imageUrl.length - 4;
  // insert the suffix into 'imageSrc'
  return insertString(
    imageUrl,
    imgurThumnailSuffix,
    insertionPosition
  );
};

export default imageResize

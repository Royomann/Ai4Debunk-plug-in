async function downloadImage(url : string) {
  console.log("foto");
  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
      
      const blob = await response.blob();
      const link = document.createElement("a");
      const urlObject = URL.createObjectURL(blob);

      link.href = urlObject;
      link.download = getImageFilename(url);

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(urlObject);
  } catch (error) {
      console.error(`Error while downloading image from ${url}: `, error);
  }
}
function getImageFilename(url : string) {
  return url.substring(url.lastIndexOf('/') + 1);
}

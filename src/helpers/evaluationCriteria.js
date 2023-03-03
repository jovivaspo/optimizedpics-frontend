export const evaluationformat = {
    svg:"optimo",
    webp:"optimo",
    avif:"optimo",
    png:"aceptable",
    jpg:"aceptable",
    jpeg:"aceptable",
    gif:"aceptable",
    ico:"aceptable",
    psd:"mejorable",
    bmp:"mejorable",
    tiff:"mejorable"
}

export const evaluationSize = (size) => {
   if(size < 50) return "optimo"
   if(size > 51 && size <150) return "aceptable"
   return "mejorable"
}

export const evaluationTime = (time)=> {

}

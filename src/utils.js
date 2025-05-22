export const randomColor=(min,max)=>{
    const nr1=Math.floor(Math.random()*(max-min+1))+min
    const nr2=Math.floor(Math.random()*(max-min+1))+min
    const nr3=Math.floor(Math.random()*(max-min+1))+min
    return `rgb(${nr1}, ${nr2}, ${nr3})`
}
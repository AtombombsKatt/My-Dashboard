export function RandomizeArray(length: number){
    if (length == 0 ) return 0;

    const newIndex = Math.floor(Math.random()* length);
    return newIndex;
}
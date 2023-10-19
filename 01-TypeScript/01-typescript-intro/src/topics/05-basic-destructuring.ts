interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const AudioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Eres mia",
    details: {
        author: "Romeo Santos",
        year: 2014
    }
}

//Ejemplo de desetructuracion de objetos
const song = 'New Song';

const {song:anotherSong, songDuration: duration, details} = AudioPlayer;

const {author}  = details;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author)


export{};
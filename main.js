const songs = [
    {title: 'Listen To The Music', artist: 'The Doobie Brothers', mood: 'happy'},
    {title: 'Willoughby Wallaby Woo', artist: 'Raffi', mood: 'happy'},
    {title: 'The Bear Went Over The Mountain', artist: 'StoryBots', mood: 'happy'},
    {title: 'Colors', artist: 'Black Pumas', mood: 'inspirational'},
    {title: 'Walking In The Air', artist: 'Peter Auty', mood: 'inspirational'},
    {title: 'Imagine', artist: 'John Lennon', mood: 'inspirational'},
    {title: 'The Polar Express', artist: 'Tom Hanks', mood: 'fun'},
    {title: 'This Is Halloween', artist: 'Danny Elfman', mood: 'fun'},
];

const getRandomSong = () => {
    const randomSong = Math.floor(Math.random() * songs.length);
    return songs[randomSong];
}

const printRandomSong = () => {
    const randomSong = getRandomSong();
    console.log(`Your song of the day is ${randomSong.title} by ${randomSong.artist}!`);
    console.log(`This is a ${randomSong.mood} song!`);
}

printRandomSong();

















































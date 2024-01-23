const songTitle = ['Listen To The Music by The Doobie Brothers', 'Willoughby Wallaby Woo by Raffi',
        'Colors by Black Pumas', 'The Bear Went Over The Mountain by StoryBots', 'Walking In The Air by Peter Auty',
        'The Polar Express by Tom Hanks', 'Imagine by John Lennon', 'This Is Halloween by Danny Elfman'];

const randomSong = Math.floor(Math.random() * songTitle.length);

console.log(`Your song of the day is: ${songTitle[randomSong]}! Have a great day listening away!`);


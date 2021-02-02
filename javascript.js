var love = [
    'I love you Casey Bear.',
    'I think you\'re amazing!',
    'I love Casey so much!',
    'If I had to choose to be a millionaire or be with Casey I\'d be a millionaire and then also be with Casey.',
    'Shall I compare thee to a summer day? (nah, you\'re more rad than a summer day.)',
    'You have the sweetest buns.',
    'You have the most lovely kisses!',
    'I wish I was with you right now giving you a smooch.',
    'You look cute in those glasses.',
    'I really like getting up and making you coffee while you get ready.',
    'You can probably do anything if you wanted to.',
    'Gizmo.',
    'You smell so nice!',
    'GIZMO!',
    'You got so good at ukulele so quickly!',
    'How are you so sweet?',
    'Do you need anything darling?',
    'WHERE IS ANDY FILMORE?!',
    'You are SO KIND to people!',
    'You make the best chili!',
    'Boy howdy I love ya',
    'Jeeze Casey you are just so clever.',
    'It\'s always been you',
    'I can\'t believe how lucky we are!',
    'Hey Casey, you\'re my best friend.',
    'I have fun just being beside you doing nothing.'

]

function newLove() {
    var randomNumber = Math.floor(Math.random()*(love.length));
    document.getElementById('loveDisplay').innerHTML = love[randomNumber];
}


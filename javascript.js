$(document).ready(function () {

    getQuote();

    $("#refresh").on("click", function () {
        getQuote();
    })

    function getQuote() {
        var quotes = [
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
            'GIZMOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!!!!!',
            'You got so good at ukulele so quickly!',
            'How are you so sweet?',
            'Do you need anything darling?',
            'WHERE IS ANDY FILMORE?!',
            'You are SO KIND to people!',
            'You make the best chili!',
            'Boy howdy I love ya.',
            'Jeeze Casey you are just so clever.',
            'It\'s always been you.',
            'I can\'t believe how lucky we are!',
            'Hey Casey, you\'re my best friend.',
            'I have fun just being beside you doing nothing.',
            'Hey I love you. Cool huh?!',
            'CASEY - Cool And Sexy Even Yesterday...?',
            'You are looking absolutely BEAUTIFUL!',
            'My Darling Casey, I love you and hope you\'ll make my dreams come true with a sweet kiss on my lips.',
            'Good luck, try your best, and have fun! Love you!',
            'Hey, if I\'m not home right now, I will be before you know it!',
            'Hey dear, I hope your day is UNBELIEVABLY good. Love you!',
            'I hope your day today is filled with love and happiness. You\'re my #1 gal!',
            'Redeem this for one free kiss',
            'Gizmo and I are both thinking of you right now!',
            'Your hair is getting so long (and also in the frains and floors and bed)!',
            'I\'ll never stop loving your sweet kisses and lips.',
            'One day I\'ll wake up next to you and you\'ll be my wife.',
            'How are you so damn sexy?!',
            'Can I keep you?',
            'I love how caring you are.',
            'Holding you makes me MELT.',
            'You are the bee\'s knees.',
            'I love warming you up when you\'re cold.',
            'Being around you is like always eating a cookie, and I love cookies.',
            'If I wasn\'t with you I wouldn\'t be with anyone.',
            'We spent so long searching, I\'m glad we finally found US.',
            'You are so BEAUTIFUL!',
            'You shine like the moon. You know, like you reflect the sun but sometimes you\'re a little dark.',
            '"I dare you to kiss me"',
            '"I double dog dare you"',
            'I\'m more addicted to you than a 14 year old is to Juul',
            'If you\'re reading this and I\'m not with you, I miss you.',
            'I will always be there for you.',
            'I fall in love with you again every time I see you.',
            'You are so lovable.',
            'You are so STRONG.',
            'I might mock it, but I love your laugh.',
            'I\'ll always love you.',
            'Everyone has flaws, but you\'re perfect to me.',
            'Your love empowers me!',
            'Thanks for always being yourself.',
            'Casey Casey Casey can\'t you see, I think you\'re cute and you can\'t stop me.',
            'It\'s about time you gave in to my badgering and fell in love with me.',
            'WHY ARE YOU SO DAMN ADORABLE?!',
            'SPACE CASE!',
            'Oswald is thinking of you.',
            'Ozzy and I love you baby bear!',
            'YOU\'RE MY BABY BEAR!',
            'Casey Bear, Casey Casey Casey... BEAAARRR!'
        ];

        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        $("#quote").text(quote);
    }

})

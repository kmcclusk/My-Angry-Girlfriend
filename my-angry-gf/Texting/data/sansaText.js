module.exports = [
    {
        _id: 1,
        text: "Text a response back: \n 1. Sure! \n 2. Maybe, I don't know? \n 3. No thanks \n 4. Definitely not, gross!",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sansa',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-cVdKUVdrckhPQ1U',
        },
    },
    {
        _id: 0,
        text: "Hey! We're a match! Do you want to meet up?",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sansa',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-cVdKUVdrckhPQ1U',
        },
    }
];
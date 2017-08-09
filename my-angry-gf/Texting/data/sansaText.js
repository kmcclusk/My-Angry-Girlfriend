module.exports = [
    {
        _id: 1,
        text: "Text a response back: \n 1. Pizza? \n 2. I'm not really that hungry \n 3. Remember your diet! Be strong \n 4. What do you want to eat?",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Sansa',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-YmxuTXlYWmhDYkU',
        },
    },
    {
        _id: 0,
        text: "I'm Hungry!",
        createdAt: new Date(),
        responses: [{
                replyText1: "Pizza?",
                sngerPoints: 0,
                _id: 1
            },
            {
                replyText2: "I'm not really that hungry",
                angerPoints: -10,
                _id: 2
            },
            {
                replyText3: "Remember your diet! Be strong!",
                angerPoints: -25,
                _id: 3
            },
            {
                replyText4: "What do you want to eat? :)",
                angerPoints: -5,
                _id: 4
            }
        ],
        user: {
            _id: 2,
            name: 'Sansa',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-YmxuTXlYWmhDYkU',
        },
    }
];
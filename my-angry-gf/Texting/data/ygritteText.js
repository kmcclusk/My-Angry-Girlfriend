module.exports = [
    {
        _id: 1,
        text: "Text a response back: \n 1. Pizza? \n 2. I'm not really that hungry \n 3. Remember your diet! Be strong \n 4. What do you want to eat?",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Ygritte',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-UGhyQUFKLXJILWc',
        },
    },
    {
        _id: 0,
        text: "I'm Hungry!",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Ygritte',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-UGhyQUFKLXJILWc',
        },
    }
];
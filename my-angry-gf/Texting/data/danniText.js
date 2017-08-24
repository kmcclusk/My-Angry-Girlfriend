module.exports = [
    {
        _id: 1,
        text: "Text a response back: \n 1. No, not at all \n 2. It never matters what I think \n 3. If you feel fat, try exercising \n 4. I think you always look great",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Daenerys',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-NFNjYnZRa2ZNbGc',
        },
    },
    {
        _id: 0,
        text: "Do I look fat?",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Daenerys',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-NFNjYnZRa2ZNbGc',
        },
    }
];
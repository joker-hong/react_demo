const random_jokes = [
    {
      setup: 'mock1 ?',
        punchline: 'mock1',
    },
    {
      setup: 'mock2',
      punchline: "mock2",
    },
    {
      setup: 'mocke3?',
      punchline: 'mocke3',
    },
  ];
  let random_joke_call_count = 0;
  export default {
    'get /dev/random_joke': function (req, res) {
        res.status(500);
        res.json({});
    },
  };  
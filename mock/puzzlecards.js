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
      const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
      random_joke_call_count += 1;
      setTimeout(() => {
        res.json(responseObj);
      }, 3000);
    },
  };  
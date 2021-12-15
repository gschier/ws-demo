const { createClient } = require('graphql-ws');

const client = createClient({
  url: 'ws://localhost:4000/graphql',
});

// subscription
(async () => {
  const onNext = () => {
    /* handle incoming values */
  };

  let unsubscribe = () => {
    /* complete the subscription */
  };

  await new Promise((resolve, reject) => {
    unsubscribe = client.subscribe(
      {
        query: 'subscription { greetings }',
      },
      {
        next: onNext,
        error: reject,
        complete: resolve,
      },
    );
    setTimeout(unsubscribe, 5000);
  });
})();

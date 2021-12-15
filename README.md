# ws-demo

- start demo with `npm start`
- navigate to http://localhost:8111 in your browser
- client subscribes to gql endpoint
- server subscribe doesn't yield anything
- client unsubscribes after 5 seconds
- server subscription generated never exists

If you uncomment `// yield { greetings: "hi "+(count++) };` in `schema.js` and
restart, the server will correctly stop ticking after 5 seconds.

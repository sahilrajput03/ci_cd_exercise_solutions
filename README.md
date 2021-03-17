# Full Stack open CI/CD.

- For this app to work you need two environment variables i.e., HEROKU_API_KEY and SLACK_WEBHOOK_URL..
  slack webhook url => https://hooks.slack.com/services/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
  To define those in github, you can navigate to 'Repository Settings' > 'Secrets' > 'New Repository secret'.
- Deployed @ https://pokedex-app-ex99.herokuapp.com/
- You can enable/disable workflows from github, read more at https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow .
- App name @ pokedex-app-ex99

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

[![Build Status](https://travis-ci.org/chrismllr/cm-web.svg?branch=master)](https://travis-ci.org/chrismllr/cm-web)

# CM Web

Portfolio website built using [next.js](https://github.com/zeit/next.js)

### Tidbits
This application utilizes a service worker, web manifest, and has full offline capabilities. It scores a 98/100 in the Lighthouse PWA tester! Ain't that fancy. Check out the link below in the [Future state](#future-state) section.

## Development
```
npm run dev
```
Visit `http://localhost:3000/`

## Linting
```
npm run lint
```
Runs `eslint` on `components/`, `layouts/`, `pages/` directories

## Tests
Tests are written using Jest and Jest snapshots.
```
npm run test
npm run test:dev // runs with watch
```

## Deployment
Deployed to heroku, pushes to `master` will trigger a deployment. Alternatively, you can `git push heroku master` to trigger a manual build using the `heroku-nextjs-build` build pack.
- [Heroku Nextjs Build](https://github.com/mars/heroku-nextjs)

## Generate a component and its test file
```
npm run generate component CoolComponent
```

## Future state
:white_check_mark: Implement Service worker
- https://github.com/ooade/NextSimpleStarter

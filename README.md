# CM Web

Portfolio website built using [next.js](https://github.com/zeit/next.js)

### Tidbits
This application utilizes a service worker, web manifest, and has full offline capabilities. It scores a 94/100 in the Lighthouse PWA tester! Ain't that fancy. Check out the link below in the [Future state](#future-state) section.

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

## Deployment
Deployed to heroku, pushes to `master` will trigger a deployment. Alternatively, you can `git push heroku master` to trigger a manual build using the `heroku-nextjs-build` build pack.
- [Heroku Nextjs Build](https://github.com/mars/heroku-nextjs)

## Future state
:white_check_mark: Implement Service worker
- https://github.com/ooade/NextSimpleStarter

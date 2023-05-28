# Task 2 - Serve SPA in AWS S3 and Cloudfront Services

## Task 2.1 - Manual Deployment (*70 points*)
S3 bucket has been created and configured properly. The app has been uploaded to the bucket and is available though the Internet.
In addition to the previous work a CloudFront distribution is created and configured properly and the site is served now with CloudFront and is available through the Internet over CloudFront URL, not S3-website link.

Link to S3-website - http://nodejs-aws-shop-react.s3-website-us-east-1.amazonaws.com/
Link to CloudFront website - https://diftsfi6p6l5y.cloudfront.net/

## Task 2.2 - Manual Deployment (*30 points*)
S3 bucket creation, website deployment, CloudFront Distribution and Invalidation added and configured by using AWS CDK. The app can be built and deployed by running npm script command.

Link to CloudFront website - https://d202mox6ze7nec.cloudfront.net/
### `build:deploy`

Builds the project for production in `dist` folder and deploys by using AWS CDK. More informaition in `package.json` file.



# React-shop-cloudfront

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.

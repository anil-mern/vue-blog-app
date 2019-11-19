#[Demo](https://vue-blog-app-deployment.herokuapp.com/#/)

# vue-blog-app
An simple blog app developed using Vue framework were users can add/delete there blog. Main thing to be noted is there is no database to store..!

## Run local
- "start": "vue-cli-service serve --open"
- npm install
- npm run start

## Run eslint
- eslint --ext .js,.vue `file-path`
-- example: eslint --ext .js,.vue src

## Heroku Deploy
- create an app using `heroku apps:create [app_name]`
- deploy master code in server using `git push heroku master`
- info `heroku apps:info`

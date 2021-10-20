## Blank Rails API React SPA Project Template

### Intro
This is a blank template to start new applications that use postgres, rails in API mode on the backend, and React.js on the frontend with react-router-dom and material UI.  There should be minimal setup necessary to get up and going after cloning the repo.  The repo is meant to be as bare-bones as possible -- so extras added by `rails new`, even in API mode (e.g. extra routes for mailers and such), and extras added by create-react-app, have been removed.  Please refer to the repo's git log to see the details of setup and what steps were taken to further clean up after initial setup.

### Usage
* `$> git clone https://www.github.com/voleinikov/blank_proj_template [your_proj_name]`
* If you wish, you can remove the centralized git repo and have separate repos for the API and react frontend.  
  - (In your project) `rm -rf .git`
  - `$> cd api; git init`
  - `$> cd frontend; git init`
* You may also wish to rename the api and frontend directories less generically (especially if you are going to have them in individual repos).  The simplest way to do this is to replace "proj" prefix with your app's name - but if you do customize the name, please remember to make name changes in `database.yml` before creating the DB with rails below!

##### Configure Rails API
* `$> cd proj_api`
* `$> bundle install`
* Change database name to your projects name in `config/database.yml`
* Add DB password and username to rails credentials
  - `$> rails credentials:edit`
  - Add the following to the tempfile:
  ```
  database:
    username: [some_username]
    password: [some_password]
  ```
* `$> createuser --interactive` (Then follow the prompts)
* `$> rails db:create`
* `$> rails g rspec:install`
* `$> rails s`
* Test the ping endpoint via curl:
  `$> curl -X POST http://localhost:3001/api/v1/ping`

##### Configure the React Frontend
* `$> cd proj_frontend`
* `$> npm install @material-ui/core @material-ui/icons react-router-dom` 
* `$> npm install`
* `$> npm start`

# envAuto

This is a very simple and small project create to save me some time when working on web servers hosted on Heroku.

I'm a big fan of the [Heroku Button](https://devcenter.heroku.com/articles/heroku-button) because it allows me to create a project deployable by anyone in my team with detailed instructions how to set up all the environment variables, thank to the `app.json` file.

Locally we do use Foreman to load the local environment variables from the `.env` file, and some times a project can end up with lots of variables.

With this tiny app, if you run it in a folder that has the `app.json` file, it will automatically create a `.env` for you. The only thing that you then need to do, is to set the right data to those variables.

If you find this project useful, don't forget to give it a star :)
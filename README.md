# 🥒 Cucumber

This is a very simple and small project that we created to save some time when working on web servers hosted on Heroku.

We are big fans of the [Heroku Button](https://devcenter.heroku.com/articles/heroku-button). It allows us to create a project that's deployable by anyone, with detailed instructions on how to set up all of the environment variables, thanks to the `app.json` file.

Locally, we use [foreman](https://www.npmjs.com/package/foreman) to load the local environment variables from the `.env` file, and since projects can sometimes end up with lots of env variables.

We created this tiny app to automatically generate the `.env` file while making sure the file won't excede the 80 char ruler mark.

If your `app.json` file has set default values, Cucumber will automatically populate the vriables. Anything else will require your action to fill in the data.

# Example

This is an example `app.json` file that you might have in your project.

```
{
	"name": "env-auto",
	"description": "convert app.json in to .env",
	"repository": "https://github.com",
	"keywords": ["node", "npm"],
	"success_url": "/",
	"env": {
		"NODE_ENV": {
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus sagittis urna pharetra varius. Maecenas mollis ac felis vitae blandit. Integer eu risus vehicula, pellentesque leo vel, imperdiet diam. Quisque ligula libero, aliquam ut lectus a, eleifend congue justo. Donec porttitor ultricies sem nec euismod. Fusce venenatis iaculis dapibus. Duis fringilla purus non erat lacinia tempus."
		},
		"NPM_CONFIG_PRODUCTION": {
			"description": "In volutpat ex ac metus efficitur tincidunt. Fusce tempus tempus neque, id pharetra tortor vehicula ut. Donec gravida dolor ut purus dictum, sed egestas lectus bibendum. Vestibulum et augue ac arcu dapibus tincidunt. Curabitur a neque pharetra, egestas enim id, auctor mi. Suspendisse blandit facilisis arcu in tempus. Integer ut metus non est aliquam scelerisque. Nunc dolor odio, elementum eu rhoncus nec, tincidunt ac velit. Suspendisse aliquam vestibulum diam non consequat. Phasellus aliquet neque in tellus iaculis iaculis. Pellentesque vitae massa lacus. In id erat et est vestibulum mollis. Vivamus scelerisque placerat urna nec ultrices. Nunc ac dictum tellus.",
			"value": "true"
		},
		"API_KEY": {
			"description": "Quisque justo odio, pretium a ante ac, mattis pharetra lectus. Cras erat velit, tincidunt sit amet est aliquet, pellentesque commodo massa. Duis ultrices purus dui, nec consectetur odio pellentesque sed. Etiam ipsum ex, euismod accumsan velit vitae, varius commodo arcu. Aliquam malesuada commodo lorem in tempor. Nam ut dui purus. Phasellus ornare maximus magna ac sollicitudin. Sed nec felis nibh. Nullam maximus pharetra dui, quis sodales est pretium nec.",
			"generator": "secret"
		}
	}
}
```
If you were to run `env-auto`, this is the output that you would see:

```
# Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus
# sagittis urna pharetra varius. Maecenas mollis ac felis vitae blandit.
# Integer eu risus vehicula, pellentesque leo vel, imperdiet diam. Quisque
# ligula libero, aliquam ut lectus a, eleifend congue justo. Donec porttitor
# ultricies sem nec euismod. Fusce venenatis iaculis dapibus. Duis fringilla
# purus non erat lacinia tempus.
NODE_ENV=

# In volutpat ex ac metus efficitur tincidunt. Fusce tempus tempus neque, id
# pharetra tortor vehicula ut. Donec gravida dolor ut purus dictum, sed egestas
# lectus bibendum. Vestibulum et augue ac arcu dapibus tincidunt. Curabitur a
# neque pharetra, egestas enim id, auctor mi. Suspendisse blandit facilisis
# arcu in tempus. Integer ut metus non est aliquam scelerisque. Nunc dolor
# odio, elementum eu rhoncus nec, tincidunt ac velit. Suspendisse aliquam
# vestibulum diam non consequat. Phasellus aliquet neque in tellus iaculis
# iaculis. Pellentesque vitae massa lacus. In id erat et est vestibulum mollis.
# Vivamus scelerisque placerat urna nec ultrices. Nunc ac dictum tellus.
NPM_CONFIG_PRODUCTION=true

# Quisque justo odio, pretium a ante ac, mattis pharetra lectus. Cras erat
# velit, tincidunt sit amet est aliquet, pellentesque commodo massa. Duis
# ultrices purus dui, nec consectetur odio pellentesque sed. Etiam ipsum ex,
# euismod accumsan velit vitae, varius commodo arcu. Aliquam malesuada commodo
# lorem in tempor. Nam ut dui purus. Phasellus ornare maximus magna ac
# sollicitudin. Sed nec felis nibh. Nullam maximus pharetra dui, quis sodales
# est pretium nec.
API_KEY=5db712b385afeacaa1ab2bcaba271483
```
As you can see, the description will be nicely formatted, the varaiables with thefault values will be filled automatcially, and  the rest is up to you.

## Installation

You have to install `Cucumber` as a global package with the following command

```bash
    $ npm install cucumber -g
```

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), where we have additional articles and tools that you might find interesting.

# For Hire 👨‍💻

If you'd like us to help you with something, please feel free to say hello@0x4447.com, and share what's on your mind. We'll take a look, and try our best to help you.

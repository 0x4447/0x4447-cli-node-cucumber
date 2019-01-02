# 🥒 Cucumber

This is a very simple and small project that we created to save some time when working on web servers hosted on Heroku.

We are big fans of the [Heroku Button](https://devcenter.heroku.com/articles/heroku-button). It allows us to create a project that's deployable by anyone, with detailed instructions on how to set up all of the environment variables, thanks to the `app.json` file.

Locally, we use [foreman](https://www.npmjs.com/package/foreman) to load the local environment variables from the `.env` file, and since projects can sometimes end up with lots of env variables.

We created this tiny app to automatically generate the `.env` file while making sure the file won't exceed the 80 char ruler mark.

If your `app.json` file has set default values, Cucumber will automatically populate the variables. Anything else will require your action to fill in the data.

# How to Install

```
] sudo npm install -g @0x4447/cucumber
```

# How to Use

```
] cucumber
```

# What to Expect

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
This is the output that you will get.

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
As you can see, the description will be nicely formatted, the variables with default values will be filled automatically, and  the rest is up to you.

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), where we have additional resources that you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in build custom solutions on top of AWS. Find out more by following this link: https://0x4447.com or, say [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).

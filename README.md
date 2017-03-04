# Why this code?

This is a very simple and small project that I created to save some time when working on web servers hosted on Heroku.

I'm a big fan of the [Heroku Button](https://devcenter.heroku.com/articles/heroku-button), because it allows me to create a project that's deployable by anyone on my team, with detailed instructions on how to set up all of the environment variables, thanks to the app.json file.

Locally, we use Foreman to load the local environment variables from the `.env` file, and projects can sometimes end up with lots of variables.

With this tiny app, running it in a folder that has the `app.json` file will automatically create a `.env` for you. The only thing you need to do is to set the right data to those variables.

# Example

This is an example app.json file that you might have in your project.

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
This file will converted in this output.

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
As you can see, the description will be nicely formatted; the variable will be ready to use.

## Installation

Install it as a global package, so you can use it through your system.

```bash
    $ npm install env-auto -g
```
# Side Window Css Scroll

🐠 A custom div scroll with custom sidebar

# Other

If you've enjoyed this article/project, please consider giving it a 🌟. Also check out my [GitHub account] (https://github.com/davidgatti), where I have other articles and apps that you might find interesting.

## Where to follow

You can follow me on social media 🐙😇, at the following locations:

- [GitHub](https://github.com/davidgatti)
- [Twitter](https://twitter.com/dawidgatti)
- [Instagram](https://www.instagram.com/gattidavid/)

## More about me

I don’t only live on GitHub, I try to do many things not to get bored 🙃. To learn more about me, you can visit the following links:

- [Podcasts](http://david.gatti.pl/podcasts)
- [Articles](http://david.gatti.pl/articles)
- [Technical Articles](http://david.gatti.pl/technical_articles)
- [Software Projects](http://david.gatti.pl/software_projects)
- [Hardware Projects](http://david.gatti.pl/hardware_projects)

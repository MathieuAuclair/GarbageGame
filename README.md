# How to launch the server and play

## Requirement
- Composer
- Php
- MySql
- Node.JS
- NPM

### Don't forget to set your .env file, check .env.example for references

### Note that you have to create an empty database named garbage on your mysql server to make the project run !!!

```shell
# install laravel
composer global require "laravel/installer"

# install project dependencies
composer install

# create project encryption key
php artisan  key:generate

# set storage link
php artisan storage:link

# populate database
php artisan migrate
```


# Contributions

contributions are welcome! This project is just for fun, send a pull request and it will be reviewed. If you send multiple pull request, you might be added as member

## Rules for contributions

**all script names must be a trash related name**

* [ x ] find trash name to all script
* [ x ] add player controller
* [ x ] add a renderer
* [ x ] add collision 
* [ x ]
* [ ] fix circle collider
* [ ] fix collisions movement restriction
* [ ]  improve collision system
* [ ] add shape collider support
* [ ] add quad tree support
* [ ] improve animator
* [ ] add multiplayer support
* [ ] recreate AirConsole in the engine as an open source version
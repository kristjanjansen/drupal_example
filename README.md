## Requirements

* LAMP stack (Laragon on Windows or Laravel Valet on OSX)
* Composer
* NodeJS and Yarn 

## Installation

```sh

# Server

git clone https://github.com/kristjanjansen/drupal_combo drupal
cd drupal
composer install
./vendor/bin/drupal site:install -n --db-name=drupal --db-user=root --site-name=drupal --site-mail=drupal@drupal.com --account-name=drupal --account-mail=drupal@drupal.com --account-pass=drupal --force standard
./vendor/bin/drupal module:install jsonapi
./vendor/bin/drupal module:install combo
./vendor/bin/drupal theme:install combo --set-default
./vendor/bin/drupal create:nodes article --limit=10 --title-words=5 --time-range=now
./vendor/bin/drupal create:nodes page --limit=3 --title-words=1 --time-range=now

# Client

yarn # or npm install
npm run build
```
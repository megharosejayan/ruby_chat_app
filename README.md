# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version : 6 

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

Fixed error of javascrpt_pack_tag by updating node version to be compactible with webpacker

errors with integrating semantic-ui fixed by adding:
gem 'sprockets-rails'
gem 'sassc-rails'
to the gemfile, after following the documentation.
Also create a custom.css.scss file in app\assests\stylesheets\
and add @import 'semantic-ui'; in it


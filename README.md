# README

This app uses Ruby 3.0.1 and Rails 6.0.4. For security, the Best Buy API key is not included in the committed code. In order to set it in your cloned repository:
```
bin/rails credentials:edit
```
Add your API key like so:
```
best_buy:
  api_key: "gibberish"
```
This app doesn't yet make use of its database. However if you're prompted to set up a database:
```
rails db:create db:migrate
```
Then start the server:
```
rails s
```

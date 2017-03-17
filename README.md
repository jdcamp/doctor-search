# Doctor Search

#### Epicodus JavaScript Week 1 Solo Project, 3/17/2017

#### By Jake Campa

## Description

A website to search for doctors using the BetterDoctor api

## Installation Requirements
* [Node.js](http://nodejs.org)
* [Bower](https://bower.io/)
* [BetterDoctor Api Key](https://developer.betterdoctor.com/)

## Setup

* Clone repository
* In the root directory create a file named '.env'
* In the .env file place ```exports.apiKey = "YOUR_API_KEY";``` where YOUR_API_KEY is a valid BetterDoctor api key.
* Open terminal and go to the project root directory
* In the terminal run ```$ npm install```
* In the terminal run ```$ bower install```
* In the terminal run ```$ gulp build```
* In the terminal run ```$ gulp serve```

## Known Bugs
* The ailment search is a general search function. It searches through all fields. There is no api call for symptoms

## Specifications

| Behavior | Input | Output |      
|----------| ----- | ------ |        
|Returns doctors based on symptom|search-form = 'Toothache'|doctors = ['Foo','Bar']|
|Returns doctors based on Name|search-form = 'Foo'|doctors = ['Foo']|

## Support and contact details
no support

## Technologies Used

* HTML
* CSS
* SASS
* Bootstrap
* jQuery
* Gulp
* Node.js
* Bower
* browser-sync
* BetterDoctor API
* Git

## Copyright (c)
* 2017 Jake Campa

## License
* MIT

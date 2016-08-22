# Vieux example with AngularJS

This project implements an example chat application with Vieux architecture. It demonstrates how a complex, stateful application should be built.

![demo](https://cloud.githubusercontent.com/assets/698308/9188378/41976688-3fe4-11e5-940d-e555f666b294.gif)

## Demo

You can review a running demo on [http://vieuxio.github.io/example-chat-angularjs/](http://vieuxio.github.io/example-chat-angularjs/).

## Install

Make sure you have grunt and bower installed:
```
$ npm install -g grunt-cli bower
```

Then clone project and install npm and bower dependencies.

```
$ git clone git@github.com:vieuxio/example-chat-angularjs.git
$ cd example-chat-angularjs
$ npm install
$ bower install
```

Now you are ready to run the project. After you execute this command, the project will start automatically on your browser.

```
$ grunt serve
```

## Development

This project provides a development web server that listens on port 1972.

Run the `serve` task via `grunt serve` and the project will be ready for development and inspection. Source files are symlinked, and the server watches for file changes with live reloading, so any change you make to the files under `src` folder will cause an automatic reload.

## Production builds

When you are satisfied with development and want to make a production build in order to deploy the app, just run the `build` task via `grunt build`. This compiles your source code with UglifyJS and concats and minifies your CSS files producing one file for all your JavaScript codes and one CSS file for all your styles. This task then suffixes these files to evade browser caches. Finally, it minifies the output HTML.

You can publish auto-generated `dist` folder to anywhere you want.

Happy coding!

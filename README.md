# Ember Test Free `g`

This addon provides the blueprints available for common Ember generators, without the
annoying tests you need to go back and delete. (This is especially true for models and routes).

Just run `ember generate nt-<blueprintName> <entity name>`.

The following ember generators are supported with test free bliss:

| Generator Type | Command        |
|----------------|----------------|
| model          | `nt-model`     |
| component      | `nt-component` |
| service        | `nt-service`   |
| helper         | `nt-helper`    |
| controller     | `nt-controller`|
| mixin          | `nt-mixin`     |
| routes         | `nt-route`     |
| utils          | `nt-util`      |

## Installation

* `git clone <repository-url>` this repository
* `cd ember-g-no-test`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* Don't bother.

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

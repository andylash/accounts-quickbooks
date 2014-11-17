Quickbooks oAuth Flow for Meteor
====================

This package allows oAuth via the Quickbooks API

[Quickbooks](https://developer.intuit.com)

Latest Version: **0.1.1**

## WARNING
This relies on an accepted pull request (https://github.com/meteor/meteor/pull/2894), that isn't yet in a public meteor build.  I'll update this when it is.

## Install

To install in a new project:
```bash
> meteor add accounts-ui
> meteor add andylash:accounts-quickbooks
```

Then include in your Handlebars template:

```html
{{> loginButtons align="right"}}
```

###TO DO / Contributions

Contributions are welcome.
###API Calls

An API package for Quickbooks that wraps the sweet node-quickbooks is under development here: https://github.com/andylash/meteor-quickbooks

### Credits
Based on axwaxw's [accounts-xero](https://github.com/axwaxw/accounts-xero), which was
based on wbartley's [accounts-fitbit](https://github.com/wbartley/accounts-fitbit)

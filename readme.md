# Holiday Demo App - PurgeTSS Version

This [**Titanium App**](https://titaniumsdk.com) is a cross-platform mobile application for iOS and Android that was created using [**PurgeTSS**](https://purgetss.com).

This is a re-creation of Michael's [**Holiday Demo App**](https://github.com/m1ga/demo_app_holiday).. So the design and creative properties goes to him!!

## Installation
First, make sure you have **PurgeTSS** installed globally on your machine:
```bash
> npm i -g purgetss
```

Then, download the App and run it on your device, or simulator.

## Content
The App uses TabGroups and Alloy Widgets, just like Michael's example.

To '*parse*' Widgets in **PurgeTSS**, set the `widgets` option to true in `config.js`.

```javascript
// ./purgetss/config.js
module.exports = {
  purge: {
    options: {
      widgets: true, // Parse Widgets
    }
  }
};
```

### Data Collections
This app is using Backbone Collections to simulate Dynamic content.

<img src="./purgetss/images/1.png" width="480" alt="iOS Tabs">

<img src="./purgetss/images/2.png" width="480" alt="iOS Tabs">

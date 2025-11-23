# ClientInfo

ClientInfo is a JavaScript module that retrieves client information using the device's IP address and/or the geolocation API.

## Getting Started

### Installation

Paste this into the <head> of your html file:

```html
<script src="https://cdn.jsdelivr.net/gh/ElliottStorey/client-info@master/client-info.min.js"></script>
```

### Usage

```javascript
let success = (clientInfo) => {
    console.log(clientInfo)
}
let error = (error) => {
    console.log(error)
}
let clientInfo = getClientInfo(success, error);
```

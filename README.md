# ClientInfo
ClientInfo is a JavaScript module that retrieves client information using the device's IP address and/or the geolocation API.
## Usage
#### Import Script
Paste this into the \<head> of your html file:
```
<script src="https://cdn.jsdelivr.net/gh/ElliottStorey/ClientInfo@master/client-info.min.js"></script>
```
#### Get Device Info
```
let success = (ClientInfo) => {
  console.log(ClientInfo)
}
let error = (error) => {
  console.log(error)
}
let ClientInfo = getClientInfo(success, error);
```

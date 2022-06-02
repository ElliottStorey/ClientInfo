[![](https://data.jsdelivr.com/v1/package/gh/ElliottStorey/ClientInfo/badge)](https://www.jsdelivr.com/package/gh/ElliottStorey/ClientInfo) :(
# ClientInfo
A JavaScript module to get client info using the device's IP address and the geolocation API.
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

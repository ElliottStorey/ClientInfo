fetch("https://api.ipify.org").then(response => {
  response.text().then(response => {
    window.ip = response;
  });
});

async function data() {
  let ip = window.ip;
  let url = `https://ipinfo.io/${ip}/json`;
  let data = await fetch(url);
  data = await data.json();
  return data;
}

async function getDeviceInfo(success, error) {
  let useGeolocation = async (GeolocationPosition) => {
    let loc = `${GeolocationPosition.coords.latitude},${GeolocationPosition.coords.longitude}`;
    let DeviceInfo = await data();
    DeviceInfo.loc = loc;
    delete DeviceInfo.readme;
    success(DeviceInfo);
  }
  let useData = async (GeolocationPositionError) => {
    console.log(GeolocationPositionError);
    let DeviceInfo = await data();
    delete DeviceInfo.readme;
    success(DeviceInfo);
  }
  let options = {
    enableHighAccuracy: true,
    maximumAge: 0
  };
  navigator.geolocation.getCurrentPosition(useGeolocation, useData, options);
}

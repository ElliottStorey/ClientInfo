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

async function getDeviceInfo() {
  let success = async (GeolocationPosition) => {
    let loc = `${GeolocationPosition.coords.latitude},${GeolocationPosition.coords.longitude}`;
    let DeviceInfo = await data();
    DeviceInfo.loc = loc;
    delete DeviceInfo.readme;
    return DeviceInfo;
  }
  let error = async (GeolocationPositionError) => {
    console.log(GeolocationPositionError);
    let DeviceInfo = await data();
    delete DeviceInfo.readme;
    return DeviceInfo;
  }
  let options = {
    enableHighAccuracy: true,
    maximumAge: 0
  };
  navigator.geolocation.getCurrentPosition(await success, await error, options);
}

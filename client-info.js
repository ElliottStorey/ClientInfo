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

async function getClientInfo(success, error) {
  let useGeolocation = async (GeolocationPosition) => {
    let loc = `${GeolocationPosition.coords.latitude},${GeolocationPosition.coords.longitude}`;
    let ClientInfo = await data();
    ClientInfo.loc = loc;
    delete ClientInfo.readme;
    success(ClientInfo);
  }
  let useData = async (GeolocationPositionError) => {
    console.log(GeolocationPositionError);
    let ClientInfo = await data();
    delete ClientInfo.readme;
    success(ClientInfo);
  }
  let options = {
    enableHighAccuracy: true,
    maximumAge: 0
  };
  navigator.geolocation.getCurrentPosition(useGeolocation, useData, options);
}

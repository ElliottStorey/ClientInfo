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

async function getCurrentPositionPlus() {
  let coords = await data();
  let GeolocationCoordinates = {
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: coords.loc.split(",")[0],
    longitude: coords.loc.split(",")[1],
    speed: null
  }
  let GeolocationPosition = {
    coords: GeolocationCoordinates,
    timestamp: + new Date()
  };
  return GeolocationPosition;
}

async function getCurrentPosition(finalSuccess, finalError, options) {
  async function success(GeolocationPosition) {
    try {
      let GeolocationPositionPlus = Object.assign(GeolocationPosition, await data());
      await finalSuccess(GeolocationPositionPlus);
    } catch (error) {
      await finalError(error);
    }
  }
  async function error(error) {
    try {
      console.log(error);
      let GeolocationPositionPlus = Object.assign(await getCurrentPositionPlus(), await data());
      await finalSuccess(GeolocationPositionPlus);
    } catch (error) {
      await finalError(error);
    }
  }
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    await error();
  }
}

async function watchPosition(success, error, options) {
  try {
    if ("geolocation" in navigator) {

    } else {

    }
  } catch (err) {
    error(err);
  }
}

async function clearWatch(success, error, options) {
  try {
    if ("geolocation" in navigator) {

    } else {

    }
  } catch (err) {
    error(err);
  }
}

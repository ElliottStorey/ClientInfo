fetch("https://api.ipify.org").then(response => {
  response.text().then(response => {
    window.ip = response;
  });
});

async function getCurrentPosition+(success, error, options) {
  try {
    let ip = window.ip;
    let url = `https://ipinfo.io/${ip}/json`;
    let data = await fetch(url);
    data = await data.json();
    console.log(data);
    let GeolocationPosition = {};
    await success(GeolocationPosition);
  } catch (GeolocationPositionError) {
    await error(GeolocationPositionError);
  }
}

async function getCurrentPosition(success, error, options) {
  try {
    if("geolocation" in navigator) {
      await navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      await getCurrentPosition+(success, error, options);
    }
  } catch (GeolocationPositionError) {
    console.log(GeolocationPositionError);
    getCurrentPosition+(success, error, options);
  }
}

async function watchPosition(success, error, options) {
  try {
    if("geolocation" in navigator) {
      
    } else {
      
    }
  } catch (err) {
    error(err);
  }
}

async function clearWatch(success, error, options) {
  try {
    if("geolocation" in navigator) {
      
    } else {
      
    }
  } catch (err) {
    error(err);
  }
}

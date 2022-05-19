const script = document.createElement("script");
script.setAttribute(
  "src",
  "http://api.ipify.org?format=jsonp&callback=getIP",
);

async function getIP(json) {
  return(json.ip);
}

async function success+(GeolocationPosition) {
  return(GeolocationPosition);
}

async function getCurrentPosition(GeolocationPositionError) {
  console.log(GeolocationPositionError);
  let ip = getIP();
  let url = `https://ipinfo.io/${ip}/json`;
  let data = await fetch(url);
  data = await data.json();
  console.log(data);
}

async function getCurrentPosition(success, error, options) {
  try {
    if("geolocation" in navigator) {
      
    } else {
      
    }
  } catch (err) {
    error(err);
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

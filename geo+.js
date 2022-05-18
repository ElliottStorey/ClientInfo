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

async function getCurrentPosition+(error) {
  console.log(error);
  let ip = getIP();
  let url = `https://ipinfo.io/${ip}/json`;
  let data = await fetch(url);
  data = await data.json();
  console.log(data);
}

async function getCurrentPosition(success, error, options) {
  if('geolocation' in navigator) {
    /* geolocation is available */
  } else {
    /* geolocation IS NOT available */
  }
}

async function watchPosition(success, error, options) {
  if('geolocation' in navigator) {
    /* geolocation is available */
  } else {
    /* geolocation IS NOT available */
  }
}

async function clearWatch(success, error, options) {
  if('geolocation' in navigator) {
    /* geolocation is available */
  } else {
    /* geolocation IS NOT available */
  }
}

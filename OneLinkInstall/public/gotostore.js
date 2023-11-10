setInterval(myTimer, 5000);

function myTimer() {
  let paramiOS = getParam('ios')
  let paramAndroid = getParam('android')
  let idIOS = 'itms-apps://itunes.apple.com/app/' + (paramiOS == null ? 'id1588812059' : paramiOS)
  let idAndroid = 'market://details?id=' + (paramAndroid == null ? 'com.snow.slidepuzzle' : paramAndroid)
  window.location.href = ((navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPad') || navigator.userAgent.match('iPod')) != null ) ? idIOS : idAndroid;
}

function gotoiOSStore() {
  let paramiOS = getParam('ios')
  window.location.href = 'https://apps.apple.com/us/app/' + (paramiOS == null ? 'id1588812059' : paramiOS);
}

function gotoAndroidStore() {
   let paramAndroid = getParam('android')
  window.location.href = 'https://play.google.com/store/apps/details?id=' + (paramAndroid == null ? 'com.snow.slidepuzzle' : paramAndroid);
}

function getParam(param){
  return new URLSearchParams(window.location.search).get(param);
}


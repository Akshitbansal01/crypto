

var settings ={
    "async": true,
    "crossDomain": true,
   
    " url": "https://pro-api.coingecko.com/api/v3/simple/price?ids=bitcoin%20&vs_currencies=usd",   
    "method": "GET",
   "headers": {}

}
$.ajax(settings).done(function (response){
    console.log(response);
});

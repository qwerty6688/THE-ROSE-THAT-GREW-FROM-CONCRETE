/*
var options = {
  text: "Welcome to my website!",
  gravity: "top",
  position: 'center',
  duration: 3500,
  callback: function() {
    console.log("Toast hidden");
    Toastify.reposition();
  },
  close: true,
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
};
*/
Toastify({
  text: "welcome to my website",
  duration: 3000,
  //destination: "https://github.com/apvarun/toastify-js",
  //newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, rgba(0,200,50,0.9), rgba(0,100,5,0.9))",
  },
  onClick: function(){} // Callback after click
}).showToast();

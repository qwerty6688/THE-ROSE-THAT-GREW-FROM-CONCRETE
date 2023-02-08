var options = {
  text: "Welcome to my website!",
  duration: 2500,
  callback: function() {
    console.log("Toast hidden");
    Toastify.reposition();
  },
  close: true,
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
};

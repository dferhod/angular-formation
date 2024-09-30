const call = function (str, cb) {
  const event = new Event(str);
  cb(event);
};

call("Correct ?", function (event) {
  console.log(event);
});

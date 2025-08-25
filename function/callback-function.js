function hello(nama, callback) {
  let sapaan = `hallo ${nama}`;

  callback(sapaan);
}

hello("fitra", function (sapaan) {
  console.log("sapaan : ", sapaan);
});

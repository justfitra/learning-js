const prosesData = (data, callback) => {
  let hasil = [];
  for (let i = 0; i < data.length; i++) {
    hasil.push(callback(data[i]));
  }
  return hasil;
};

const data = [1, 10, 23, 54];

console.log(
  prosesData(data, (data) =>
    data % 2 === 0
      ? `angka tersebut : ${data} genap`
      : `angka tersebut : ${data} ganjil`
  )
);

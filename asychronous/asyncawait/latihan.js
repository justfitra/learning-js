const downloadFile = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("File berhasil diunduh 📂");
    }, ms);
  });
};

async function startDownload() {
  console.log("Mulai download...");
  const res = await downloadFile(3000);
  console.log(res);

  console.log("Download selesai ✅");
}

startDownload();

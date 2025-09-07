const downloadFile = (ms, name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} berhasil diunduh 📂`);
    }, ms);
  });
};

async function startDownload() {
  console.log("Mulai download file...");

  const file1 = await downloadFile(2000, "File1");
  console.log(file1);

  const file2 = await downloadFile(3000, "File2");
  console.log(file2);

  const file3 = await downloadFile(1000, "File3");
  console.log(file3);

  console.log("Semua file berhasil diunduh ✅");
}

startDownload();

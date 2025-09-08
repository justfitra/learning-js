async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Gagal fetch data ❌");

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("Request selesai ✅");
  }
}

getUsers();

async function createPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Belajar Fetch",
        body: "Mantap 🚀",
        userId: 1,
      }),
    });

    const data = await res.json();
    console.log("POST:", data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
createPost();

async function updatePost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH", // bisa ganti PUT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Judul baru ✍️",
      }),
    });

    const data = await res.json();
    console.log("UPDATE:", data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
updatePost();

async function deletePost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });

    if (res.ok) {
      console.log("DELETE: Data berhasil dihapus ❌");
    } else {
      console.log("DELETE: Gagal hapus data");
    }
  } catch (err) {
    console.log("Error:", err.message);
  }
}
deletePost();

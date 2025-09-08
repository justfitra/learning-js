const getData = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");

    const res = await data.json();

    console.log(res.slice(0, 5));
  } catch (err) {
    console.log(err);
  }
};

getData();

async function createPost() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
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

    const res = await data.json();

    console.log("Post", res);
  } catch (err) {
    console.log(err.message);
  }
}

createPost();

async function editPost(title, body) {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    });

    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
}

editPost("JavaScript Asek", "Hello gais");

async function deletePost(id) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      console.log("DELETE: Data berhasil dihapus ❌");
    } else {
      console.log("DELETE: Gagal hapus data");
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("success delete");
  }
}

deletePost(1);

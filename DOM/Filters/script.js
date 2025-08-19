const form = document.getElementById("form");
const select = document.querySelector("#select");
const list = document.getElementById("list");

const myActivity = [
  {
    title: "Ngoding",
    status: "Selesai",
  },
  {
    title: "Makan",
    status: "Belum Selesai",
  },
  {
    title: "Mandi",
    status: "Selesai",
  },
  {
    title: "Ngopi",
    status: "Belum Selesai",
  },
];

form.addEventListener("click", function (e) {
  e.preventDefault();
  if (select.value === "all") {
    list.innerHTML = "";
    myActivity.map((res) => {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const status = document.createElement("p");
      const div = document.createElement("div");
      h2.textContent = res.title;
      status.textContent = res.status;
      div.appendChild(h2);
      div.appendChild(status);
      li.appendChild(div);
      list.appendChild(li);
    });
  } else if (select.value === "just-done") {
    list.innerHTML = "";
    myActivity
      .filter((res) => res.status === "Selesai")
      .map((res) => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const status = document.createElement("p");
        const div = document.createElement("div");
        h2.textContent = res.title;
        status.textContent = res.status;
        div.appendChild(h2);
        div.appendChild(status);
        li.appendChild(div);
        list.appendChild(li);
      });
    list.reset();
  } else if (select.value === "just-not-done") {
    list.innerHTML = "";
    myActivity
      .filter((res) => res.status === "Belum Selesai")
      .map((res) => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const status = document.createElement("p");
        const div = document.createElement("div");
        h2.textContent = res.title;
        status.textContent = res.status;
        div.appendChild(h2);
        div.appendChild(status);
        li.appendChild(div);
        list.appendChild(li);
      });
    // list.reset();
  }
  //   form.reset();
});

const name = document.getElementById("name");
const phone = document.getElementById("phone");
const form = document.getElementById("contactForm");
const list = document.getElementById("contactList");
let data = [];

const addToList = () => {
  const localData = JSON.parse(localStorage.getItem("contacts"));
  const nameData = document.createElement("span");
  const phoneData = document.createElement("span");
  const li = document.createElement("li");

  localData.map((res) => {
    nameData.textContent = "Name : " + res.name;
    phoneData.textContent = "Phone : " + res.phone;
    li.appendChild(nameData);
    li.appendChild(phoneData);
    list.appendChild(li);
  });
  console.log(localData);
};

const contactForm = (name, phone, e) => {
  e.preventDefault();
  if (name && phone !== "") {
    const contact = {
      name: name,
      phone: phone,
    };

    data.push(contact);
    console.log(data);
    localStorage.setItem("contacts", JSON.stringify(data));
    addToList();
    form.reset();
  }
};

form.addEventListener("click", (e) =>
  contactForm(name.value.trim(), phone.value.trim(), e)
);

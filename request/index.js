async function getAll() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json();
    const ul = document.getElementById("list");
    for (let user of users) {
      const li = document.createElement("li");
      li.textContent = user.name;
      ul.appendChild(li);
    }
  } catch (err) {
    console.log(err)
  }
}

getAll();

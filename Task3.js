let user = { name: "Слава", years: 30};
    let { name, years: age, isAdmin = false } = user;
    document.getElementById("name").textContent = name;
    document.getElementById("age").textContent = age;
    document.getElementById("isAdmin").textContent = isAdmin;
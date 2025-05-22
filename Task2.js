let user = {
      name: 'Слава',
      age: 30
    };
    function count(obj) {
      return Object.keys(obj).length;
    }
    document.getElementById("result").textContent = count(user);
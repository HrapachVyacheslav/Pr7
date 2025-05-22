function sumSalaries(salaries) {
      let sum = 0;
      for (const salary of Object.values(salaries)) {
        sum += salary;
      }
      return sum;
    }
    let salaries = {
      "Слава": 100,
      "Ярослав": 300,
      "Анна": 250
    };
    const total = sumSalaries(salaries);
    alert("Сума зарплат: " + total);
    document.getElementById('result').textContent = "Сума зарплат: " + total;
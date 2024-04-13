function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  function bubbleSortAscending(cars) {
    let len = cars.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (cars[j].year < cars[j+1].year) {
          let temp = cars[j];
          cars[j] = cars[j+1];
          cars[j+1] = temp;
        }
      }      
    }
    return cars;
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return bubbleSortAscending(result);
}

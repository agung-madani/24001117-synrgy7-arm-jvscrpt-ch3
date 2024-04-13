function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    if (element.available == true) {
      result.push(element);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
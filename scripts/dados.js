(function () {
  const lowerBound = document.getElementById('lower-bound'),
    upperBound = document.getElementById('upper-bound'),
    result = document.getElementById('result');

  document.getElementById('throw-dice').addEventListener('click', () => {
    const number = random(lowerBound.value, upperBound.value);
    result.innerText = `El resultado es ${number}.`;
  });

  function random(min, max) {
    let number = min - 1;

    while (number < min || number > max) {
      number = Math.floor(Math.random() * 100);
      number = number % (max + 1);
    }

    return number;
  }
})();

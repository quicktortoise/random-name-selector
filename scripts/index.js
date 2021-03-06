(function () {
  const nameList = document.getElementById('name-list'),
    currentName = document.querySelector('.current-name'),
    nameHistory = document.getElementById('name-history');

  /* Add a new text field to the list */
  document.getElementById('btn-add-name').addEventListener('click', () => {
    const li = document.createElement('li'),
      input = document.createElement('input');

    input.type = 'text';
    input.placeholder = 'Nombre';
    li.appendChild(input);
    nameList.appendChild(li);

    input.focus();
  });

  /* Remove a text field from the list, but always keeping two */
  document.getElementById('btn-remove-name').addEventListener('click', () => {
    const size = nameList.children.length;

    if (size > 2) {
      nameList.children[size - 1].remove();
    } else {
      alert('¡No se pueden eliminar los dos primeros elementos!');
    }
  });

  /* Randomly select a name from the list */
  document.getElementById('btn-select-name').addEventListener('click', () => {
    const invalidInput = validateInputs();

    if (invalidInput) {
      alert('¡No puede haber elementos sin información!');
      invalidInput.focus();
    } else {
      const selectedName = getSelectedName();
      currentName.innerText = `Resultado: ${selectedName}`;
      addNameToHistory(selectedName);
    }
  });

  /* Clear the history */
  document.getElementById('btn-clear-history').addEventListener('click', () => {
    const size = nameHistory.children.length;

    for (let i = size - 1; i >= 0; i--) {
      nameHistory.children[i].remove();
    }
  });

  function validateInputs() {
    const inputCollection = document.getElementsByTagName('input');

    for (const item of inputCollection) {
      if (item.value.trim() === '') {
        return item;
      }
    }
    return null;
  }

  function getSelectedName() {
    const nameInputs = nameList.children;

    const randomValue = Math.floor(Math.random() * (nameInputs.length * 5) + 1);
    const index = (randomValue - 1) % nameInputs.length;

    return nameInputs[index].children[0].value;
  }

  function addNameToHistory(selectedName) {
    const li = document.createElement('li');
    li.innerText = selectedName;
    nameHistory.appendChild(li);
  }
})();

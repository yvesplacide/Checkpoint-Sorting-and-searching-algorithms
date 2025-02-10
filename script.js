function insertionSort(arr) {
  // Parcourir le tableau à partir du deuxième élément
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // L'élément à insérer
    let j = i - 1;

    // Déplacer les éléments de arr[0..i-1] qui sont plus grands que key
    // vers une position en avant de leur position actuelle
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insérer l'élément à sa position correcte
    arr[j + 1] = key;
  }
  return arr; // Retourner le tableau trié
}

// Exemple d'utilisation
let tableau = prompt("Entrez les éléments du tableau séparés par des virgules")
  .split(",")
  .map(Number);
const tableauTrie = insertionSort(tableau);
console.log(tableauTrie); // Affiche [1, 2, 5, 5, 6, 9]

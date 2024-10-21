function insertionSort(arr) {
    // Parcourir tout le tableau à partir du deuxième élément
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // L'élément à insérer
        let j = i - 1;

        // Déplacer les éléments de arr[0 à i-1] qui sont plus grands que key
        //On déplace les éléments plus grands que keyd'une case vers la droite pour libérer une place.

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Décalage vers la droite
            j--;
        }

        // Insérer l'élément à la bonne place
        arr[j + 1] = key;
    }
    return arr;
}

// Exemple de tableau à trier
let arr = [12, 11, 13, 5, 6];
console.log("Tableau trié :", insertionSort(arr));

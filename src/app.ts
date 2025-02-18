/**
 * Écrire une fonction qui prend un tableau de nombres et retourne le plus grand nombre
 */
function tab(tab: number[]): number {
  if (tab.length === 0) {
    throw new Error("le tableau est vide");
  }
  let max = tab[0];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }
  return max;
}
const nombres = [30, 3, 20, 9, 200, 100];
console.log(tab(nombres));

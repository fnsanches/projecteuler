// Problem 15: Lattice paths
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// https://cdn-media-1.freecodecamp.org/project-euler/1Atixoj.gif

// How many such routes are there through a given gridSize?

// TODO: find new ways to solve this one.

function factorial(n){
    if (n > 1)
        return (n * factorial(n - 1));
    else
        return 1;
}

function latticePaths(gridSize) {
    let nPaths = factorial(gridSize * 2) / (factorial(gridSize) * factorial(gridSize * 2 - gridSize))
    return nPaths
  }
  
  console.log(latticePaths(4));
  console.log(latticePaths(9));
  console.log(latticePaths(20));
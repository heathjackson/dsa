const tower = [[11, 10, 5], [], []];

let locationOfSmallest = 0;
let length = tower.length;
let moved;
let previousLocation;

const moveSmallest = () => {
  if (tower[length - 1].length === length) {
    return;
  } else {
    let smallest = tower[locationOfSmallest].pop();
    locationOfSmallest === 0
      ? (locationOfSmallest += length - 1)
      : (locationOfSmallest -= 1);
    tower[locationOfSmallest].push(smallest);
  }
};

const getOthers = () => {
  for (let row = 0; row < tower.length; row++) {
    if (tower[row].length > 0 && row !== locationOfSmallest) {
      moved = tower[row].pop();
      previousLocation = row;
      break;
    }
  }
  return moved;
};

const moveOthers = () => {
  if (tower[length - 1].length === length) {
    return;
  } else {
    const moved1 = getOthers();
    for (let row = 0; row < tower.length; row++) {
      let rowLength = tower[row].length;
      if (
        (tower[row].length === 0 || tower[row][rowLength - 1] > moved1) &&
        row !== previousLocation
      ) {
        tower[row].push(moved1);
        return;
      }
    }
  }
};

const moveEverything = () => {
  while (tower[length - 1].length < length) {
    moveSmallest();
    console.log(tower);
    moveOthers();
    console.log(tower);
  }
  return tower;
};

console.log(tower);
moveEverything();

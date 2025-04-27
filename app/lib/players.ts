// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
export const playerOne = {
  name: "tim",
  marker: "X",
};

export const playerTwo = {
  name: "jenn",
  marker: "O",
};

export function getName(player: { name: string; marker: string }) {
  return player.name;
}

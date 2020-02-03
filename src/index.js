import "./styles.css";

function zigzag(str, depth) {
  const lines = [];
  let down = true;
  let lineIndex = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    lines[lineIndex] = lines[lineIndex] ? lines[lineIndex] + letter : letter;
    down ? lineIndex++ : lineIndex--;
    if (lineIndex === depth - 1) down = false;
    if (lineIndex === 0) down = true;
  }

  return lines;
}

for (let line of zigzag("Helloworld!", 4)) {
  console.log(line);
}

/*
  H_____o_____
  _e___w_r___
  __l_o___l_!
  ___l_____d
*/

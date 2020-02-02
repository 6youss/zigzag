import "./styles.css";

function zigzag(str, depth) {
  const lines = [str[0]];
  let reverseCalc = -1;
  let lineIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (i % (depth - 1) === 0) reverseCalc *= -1;
    lineIndex += reverseCalc;
    console.log(Math.round(i / depth));

    let initialSpaces = "_".repeat(lineIndex);
    // let spaces = "_".repeat(depth - lineIndex);

    lines[lineIndex] = lines[lineIndex]
      ? initialSpaces + lines[lineIndex] + (str[i + 1] ? str[i + 1] : "")
      : initialSpaces + (str[i + 1] ? str[i + 1] : "");
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

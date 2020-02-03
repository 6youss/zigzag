import "./styles.css";

function zigzag(str, depth, spaceChar = "_") {
  if (depth === 1) return [str];

  const lines = [];
  let down = true;
  let lineIndex = 0;
  let bottom = depth - 1;

  for (let i = 0; i < str.length; i++) {
    let initialSpaces = spaceChar.repeat(lineIndex);
    let spacesCount = down
      ? 2 * (bottom - lineIndex - 1) + 1
      : 2 * (lineIndex - 1) + 1;
    let spaces = spaceChar.repeat(spacesCount);
    let letter = str[i] + spaces;
    lines[lineIndex] = lines[lineIndex]
      ? lines[lineIndex] + letter
      : initialSpaces + letter;
    down ? lineIndex++ : lineIndex--;
    if (lineIndex === bottom) down = false;
    if (lineIndex === 0) down = true;
  }
  for (let line of lines) {
    //@OPTIONAL clean spaces at the end of the line
    for (let i = line.length - 1; line[i] === spaceChar; i--) {
      line = line.slice(0, i);
    }

    console.log(line);
  }
}

zigzag("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);

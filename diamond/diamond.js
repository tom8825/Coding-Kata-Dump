const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function printDiamond(letter) {
  inputIndex = letterIndex(letter);
  let padding = Array(inputIndex + 1).join(" ");

  let output;

  for (i = 0; i < inputIndex + 1; i++) {
    if (i === 0) {
      output = "";
      padding = " ".repeat(inputIndex);
      output += padding + ALPHABET[i];
    } else {
      output = "";
      padding = " ".repeat(inputIndex - i);
      output += padding + ALPHABET[i];
      padding = " ".repeat(i * 2);
      output += padding + ALPHABET[i];
    }
    console.log(output);
  }
  for (i = inputIndex-1; i > -1; i--) {
    if (i !== inputIndex && i !== 0) {
      output = "";
      padding = " ".repeat(inputIndex - i);
      output += padding + ALPHABET[i];
      padding = " ".repeat(i * 2);
      output += padding + ALPHABET[i];
    }else if (i === 0) {
        output = "";
        padding = " ".repeat(inputIndex);
        output += padding + ALPHABET[i];
    }
    
    console.log(output);
  }
}

function letterIndex(letter) {
  let index = ALPHABET.indexOf(letter);
  return index;
}

printDiamond("t");

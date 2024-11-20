// search the dictionary for a word with the given string in it
function search_dictionary() {
    let input = document.getElementById("input-search").value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName("word");
      
    for (i = 0; i < x.length; i++) { 
        // get entire entry in this li word item
        let entry = x[i].innerHTML.toLowerCase();
        // cut out anything in span tags
        // span tags are used for native script transliteration in these li tags
        // while it is rare that such will result in a false positive match, it is not impossible
        let entry_array = entry.split("<");
        let true_entry = "";
        for (j = 0; j < entry_array.length; j++){
          if(entry_array[j].includes("span class")) {
            true_entry += "";
          } else {
            true_entry += entry_array[j];
          }
        }
        // compare what"s left to input
        if (!true_entry.includes(input)) {
            x[i].style.display="none";
        } else {
            x[i].style.display="list-item";                 
        }
    }
}

// convert plaintext to PUA - Rokadong ("roka-convert")
function convert_roka() {
    let x = document.getElementsByClassName("roka-convert");
      
    for (i = 0; i < x.length; i++) { 
      // get entire entry in the roka-convert span
      let entry = x[i].innerHTML;
      // make a new string to hold the converted text
      let new_string = "";
      // for char in entry, convert roka-convert span to PUA characters F001-F02E
      for (j = 0; j < entry.length; j++) {
        switch (String.fromCodePoint(entry.codePointAt(j))){
            case "a": new_string = new_string.concat("\uF001"); break;
            case "k": new_string = new_string.concat("\uF002"); break;
            case "g": new_string = new_string.concat("\uF003"); break;
            case "t": new_string = new_string.concat("\uF004"); break;
            case "d": new_string = new_string.concat("\uF005"); break;
            case "p": new_string = new_string.concat("\uF006"); break;
            case "b": new_string = new_string.concat("\uF007"); break;
            case "\"": new_string = new_string.concat("\uF008"); break;
            case "f": new_string = new_string.concat("\uF009"); break;
            case "v": new_string = new_string.concat("\uF00A"); break;
            case "s": new_string = new_string.concat("\uF00B"); break;
            case "z": new_string = new_string.concat("\uF00C"); break;
            case "c": new_string = new_string.concat("\uF00D"); break;
            case "j": new_string = new_string.concat("\uF00E"); break;
            case "h": new_string = new_string.concat("\uF00F"); break;
            case "\'": new_string = new_string.concat("\uF010"); break;
            case "M": new_string = new_string.concat("\uF011"); break;
            case "m": new_string = new_string.concat("\uF012"); break;
            case "N": new_string = new_string.concat("\uF013"); break;
            case "n": new_string = new_string.concat("\uF014"); break;
            case "{": new_string = new_string.concat("\uF015"); break;
            case "[": new_string = new_string.concat("\uF016"); break;
            case "}": new_string = new_string.concat("\uF017"); break;
            case "]": new_string = new_string.concat("\uF018"); break;
            case "i": new_string = new_string.concat("\uF019"); break;
            case "í": new_string = new_string.concat("\uF01A"); break;
            case "e": new_string = new_string.concat("\uF01B"); break;
            case "é": new_string = new_string.concat("\uF01C"); break;
            case "u": new_string = new_string.concat("\uF01D"); break;
            case "ú": new_string = new_string.concat("\uF01E"); break;
            case "o": new_string = new_string.concat("\uF01F"); break;
            case "ó": new_string = new_string.concat("\uF020"); break;
            case "q": new_string = new_string.concat("\uF021"); break;
            case "l": new_string = new_string.concat("\uF022"); break;
            case "r": new_string = new_string.concat("\uF023"); break;
            case "x": new_string = new_string.concat("\uF024"); break;
            case "y": new_string = new_string.concat("\uF025"); break;
            case "w": new_string = new_string.concat("\uF026"); break;
            case "ï": new_string = new_string.concat("\uF027"); break;
            case "î": new_string = new_string.concat("\uF028"); break;
            case "ë": new_string = new_string.concat("\uF029"); break;
            case "ê": new_string = new_string.concat("\uF02A"); break;
            case "ü": new_string = new_string.concat("\uF02B"); break;
            case "û": new_string = new_string.concat("\uF02C"); break;
            case "ö": new_string = new_string.concat("\uF02D"); break;
            case "ô": new_string = new_string.concat("\uF02E"); break;
          }
      }
      x[i].innerHTML = new_string;
    }
}

// button back to top
const showOnPx = 200;
const backToTopButton = document.querySelector(".top-button")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden-button")
  } else {
    backToTopButton.classList.add("hidden-button")
  }
})

const goToTop = () => {
  document.body.scrollIntoView();
};

backToTopButton.addEventListener("click", goToTop)
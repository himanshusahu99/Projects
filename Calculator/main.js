let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenvalue = "";

let flagforequl = false;
for (item of buttons) {
  item.addEventListener("click", (e) => {
    let buttontext = e.target.innerText;
    console.log("button is ", buttontext);

    if (flagforequl) {
      screenvalue = "";
      screen.value = screenvalue;
      flagforequl = false;
    }
    if (buttontext == "X") {
      screenvalue += "*";
      screen.value = screenvalue;
    } else if (buttontext == "=") {
      try {
        screenvalue = eval(screenvalue);
      } catch (e) {
        //console.log("Not a valid input ");
        screenvalue = " Invalid Operation";
      }

      screen.value = screenvalue;
      flagforequl = true;
    } else if (buttontext == "C") {
      screenvalue = "";
      screen.value = screenvalue;
    } else {
      screenvalue += buttontext;
      screen.value = screenvalue;
    }
  });
}

// Determines button clicked via id
function myFunction(id) {
  document.calc.result.value += id;
}

// Clears calculator input screen
function clearScreen() {
  document.calc.result.value = "0";
}
// Calculates input values
function calculate() {
  try {
    var input = eval(document.calc.result.value);
    document.calc.result.value = input;
  } catch (err) {
    document.calc.result.value = "Error";
  }
}

// SWITCH the calculator 
// $(document).ready(function () {
//   $("#on").click({
//     myScreen() {
//       $("input").css("background-color", "black");

//     }
//   });
// });

$(document).ready(function () {
  $("#on").on({


    click: function () {
      $("input").css("background-color", "grey");
      $(".screen").val("0");
    }
  });
});

$(document).ready(function () {
  $("#off").on({


    click: function () {
      $(".screen").css("background-color", "black");
    }
  });

});
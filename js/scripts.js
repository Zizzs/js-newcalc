function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}


$(document).ready(function() {
  $("#formInfo").submit(function(event) {
    event.preventDefault();
    var a = parseInt($("input#numberOneInput").val());
    var b = parseInt($("input#numberTwoInput").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;

    if (operator === "add") {
      result = add(a, b);
    } else if (operator === "subtract") {
      result = subtract(a, b);
    } else if (operator === "multiply") {
      result = multiply(a, b);
    } else if (operator === "divide") {
      result = divide(a, b);
    }
    $("#output").text(result);
  });
});

function deleteValue() {
  document.getElementById("display").value = "";
}
function calculator(cal) {
  document.getElementById("display").value += cal;
}
function sum() {
  let b = eval(document.getElementById("display").value);
  document.getElementById("display").value = b ; 
}

let calculation = '';
let n=0
function calc(value) {
  if(n==1){
    calculation += value;
    n--;
    calculation = '';
    document.getElementById('output').value = calculation;
  }
  else{
    
    calculation += value;
    document.getElementById('output').value = calculation;
  }
}
function del() {
  output.value=output.value.slice(0,-1)
}
function reset() {
  calculation = '';
  document.getElementById('output').value = calculation;
}
function res() {
  n++
  try{
  let result = eval(calculation);
  document.getElementById('output').value = result;
  calculation = result.toString();
  }
  catch{ 
  calculation = '';
  document.getElementById('output').value = calculation;
  document.getElementById('output').value = 'error';
  }
}

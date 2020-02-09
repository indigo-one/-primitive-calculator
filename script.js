window.onload = function(e) {
  let btn = document.querySelector('input[name=plus]');
  let x = document.querySelector('input[name=umnojg]');
  let y = document.querySelector('input[name=minus]');
  let z = document.querySelector('input[name=delenie]');
  let inp1 = document.querySelector('input[name=num1]');
  let inp2 = document.querySelector('input[name=num2]');
  let span = document.querySelector('.res');

  btn.onclick = function() {
   let res = parseInt(inp1.value) + parseInt(inp2.value);
   span.innerHTML = res;
  }
  x.onclick = function() {
    let res = parseInt(inp1.value) * parseInt(inp2.value);
    span.innerHTML = res;
   }
   y.onclick = function() {
    let res = parseInt(inp1.value) - parseInt(inp2.value);
    span.innerHTML = res;
   }
   z.onclick = function() {
    let res = parseInt(inp1.value) / parseInt(inp2.value);
    span.innerHTML = res;
   }


}

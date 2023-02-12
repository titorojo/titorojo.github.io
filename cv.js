
document.getElementById('enviar').addEventListener('click', function(){
  document.getElementById('demo').style.display = 'none';
});

function validateForm(Form,fname) {
  let x = document.forms["Form"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}


validateForm(myForm, nombre);

validateForm(myForm, apellido);

validateForm(myForm, email);

validateForm(myForm, mensaje);

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
      	event.preventDefault();
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


/* CÓDIGO DEL CURSO*/

// const $form = $('#suscribeForm')
// const $formGroup = $form.find('.form-group')
// const $formControl = $formGroup.find('.form-control')

// $form.submit(function (ev){
// 	ev.preventDefault();

// 	const error = Math.random() > 0.5;
//$formGroup.removeClass().addClass('form-group');
//$formControl.removeClass().addClass('form-control');
//$formGroup.addClass( error ? 'has-danger'  : 'has-succes');
//$formControl.addClass( error ? 'form-control-danger'  : 'form-control-succes');
//$formGroup.find('.form-control-feedback').remove();
// 	var el;
// 	if (error){
// 		el = $('<div>', { html: 'Ha ocurrido un error'})
// 	} else {
// 		el = $('<div>', { html: 'Te enviaremos todas las novedades'})
// 	}
//el.addClass('form-control-feedback')
//$formGroup.append(el)
// })

// function mostrarModal(){
//   const noMostrarModal = JSON.parse("localStorage.noMostrarModal");
//   if(!noMostrarModal){
//     $('#modalOferta').modal();  
//   }
  
//   $('#btnNoRegistrar').click(function (ev){
//     localStorage.noMostrarModal = true;
//     localStorage.noMostrarModal =! 0;
//   });

// }
function mostrarModal() { // eslint-disable-line no-func-assign, no-unused-vars
  $('#btnNoRegistrar').click(function (eve) { // eslint-disable-line no-unused-vars
    localStorage.noMostrarModal = true;
  });
  const mostrar = (localStorage.noMostrarModal != 'undefined') ? localStorage.noMostrarModal : 'false';
  if (!mostrar) {
    // {backdrop: 'static', keyboard: false} evita que al realizar  click fuera de la ventana esta no se cierre
    $('#modalOferta').modal({ backdrop: 'static', keyboard: false });
  }
}

const $filtrosToggle = $('#filtrosToggle')
$filtrosToggle.click(function (ev){
  ev.preventDefault()

  const $i = $filtrosToggle.find('i.fa')
  const isDown = $i.hasClass('fa-chevron-down')
  if(isDown){
    $i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
  }else{
    $i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
  }
})

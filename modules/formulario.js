
 export default function initForm(){

  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var reason = document.getElementById('reason');
  var message = document.getElementById('message');
  var send = document.getElementById('send');

  send.addEventListener('click', validarDados);

  function validarDados(){
    if(name.value.trim() === '' || email.value.trim() === '' || reason.value.trim() === ''){
      alert('Preencha seus dados corretamente');
    }else{
      alert('Enviamos seus dados!');
      limparDados();
    }
  };

  function limparDados(){
    name.value = '';
    email.value = '';
    message.value = '';
    reason.value = '';
  };

};



  












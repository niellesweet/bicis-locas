function validateForm(){

var nombre = document.getElementById('name').value;
var apellido = document.getElementById('lastname').value;
var email = document.getElementById('input-email').value;
var password = document.getElementById('input-password').value;
var tipoBici = document.getElementsByTagName('select')[0];

//Para nombre y apellido solo puede tener caracteres de la A a la Z//(no supe hacerlo)//
//Los campos nombre y apellido la primera letra debe ser mayuscula//
	//validar nombre//
	function validateNombre(){
		if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
			alert('Debe ingresar su nombre')
        	return false;
		} 
		else if (nombre.charAt(0)!==nombre.charAt(0).toUpperCase()){ 
			alert('Debe comenzar con una mayuscula');
			return false;
		}

		else{
			return true
		}
	}
	validateNombre();

	//validar apellido//
	function validateApellido(){
		if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)){
			alert ('Ingrese su apellido!');
			return false;
		}
		else if(apellido.charAt(0)!== apellido.charAt(0).toUpperCase()){
			alert ('Debe comenzar con mayuscula');
			return false;
		}
		else {
			return true;
		}

	}
	validateApellido();

//El campo email debe tener un formato valido//
    //validar email//
    function validateEmail(){
    	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/) ) {
  		alert ('Ingrese un email valido!');
  			return false;
		}
		else {
			return true
		}
	}
	validateEmail();

//La contraseña debe tener al menos 6 caracteres y debe ser diferente a 'password', '123456' o '089754'//
	//validar contraseña//
	function validatePassword(){
		if(password.length < 6){
			alert ('Su contraseña debe tener al menos 6 caracteres');
			return false;
		}
		else if (password == 'password' || password == '123456' || password == '089754'){
		alert ('Elija otra contraseña: no puede ser "password", "123456" ni "089754"');
		return false
		}
		else {
			return true;
		}
	}
	validatePassword();	
    
    function validateBici(){
    	if (tipoBici == null || tipoBici <= 0){
    		alert ('Debe elegir una bicicleta');
    		return false
    	}
    }
    validateBici();
}
validateForm();
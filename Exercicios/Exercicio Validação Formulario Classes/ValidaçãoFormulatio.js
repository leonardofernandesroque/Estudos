class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e=> {
            this.handleSubmit(e);
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.checaCampos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulario enviado.');
            this.formulario.submit();
        }
    }


    //Checa os campos em branco ----------------------------------------------------------------------------------
    
    senhasSaoValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campo Senha e repetir senha não são iguais');
            this.criaErro(repetirSenha, 'Campo Senha e repetir senha não são iguais');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres');
        }
        return valid;
    }
    
    checaCampos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-Text')){
            errorText.remove();
        } 

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;

            if(!campo.value){
                this.criaErro(campo, `*Campo "${label}"está em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
        }
    }

    validaUsuario(campo){

        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length >12){
            this.criaErro(campo, 'Usuario invalido, precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e/ou numeros.');
            valid = false;
        }
        return valid;
    }



    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }


    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-Text');
        campo.insertAdjacentElement('afterend', div);      
    }
    //-------------------------------------------------------------------------------------------------------------

}


const valida = new ValidaFormulario();
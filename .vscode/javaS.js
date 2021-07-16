nome=[];
email=[];
dados=[];


function validar(){

    var recebe =  document.getElementById('nome').value;
    nome.push(recebe);
    document.getElementById('nome').value = ' ';
    console.log(nome);
    
    
    var recebe1 =  document.getElementById('email').value;
    email.push(recebe1);
    document.getElementById('email').value = ' '; 
    console.log(email);
    
    dados.push(nome)
    dados.push(email)
    console.log(dados)
        alert("Email cadrastrado!")
       }
       
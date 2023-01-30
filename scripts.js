// iniciar uma função em 'function' com valor 'calculateTip'//
function calculateTip(event){  
    //alert('Fui submitido para função!')//
    event.preventDefault();
    //comando usar qual 'id' para usar//
    let bill=document.getElementById('bill').value;  
    let serviceQual=document.getElementById('serviceQual').value;
    let people=document.getElementById('people').value;
    //comando 'if' verificar se a conta preenchida ou vazia//
    if(bill == '' | serviceQual == 0){ //se a conta estiver vazio no 'serviceQual' vou da alerta//
        alert("Por favor, preencha os valores") //comando de alerta//
        return; //'return' usado pra parar essa função e não continuar abaixo//
    }

    //proximo 'if' vai verificar o numero de pessoas//
    if(people == '' | people <= 1){
        people = 1;
        document.getElementById('each').style.display = "none"  //não aparecer antes resultado//
    } else{ //quando numero de pessoas não é vazio e nenhum menor que o outro//
        document.getElementById('each').style.display = "block" ///'block' faz é aparecer/
    }
    //agora fazer a conta//
    let total = (bill * serviceQual) / people; // no serviceQual te 'value="0.3"' que multiplicar com '0.3' no value//
    total = total.toFixed(2); //evita ficar vai numero repitido, apenas 2 casa decimais//
    document.getElementById('tip').innerHTML = total;  //comando para exibir o valor no campo 'tip' onde fica '0.00' //
    document.getElementById('totalTip').style.display = "block"; //comando p/ mostrar o valor total no html//
}

//  para desaparecer mensagem antes por resultado //
// 'Id('totalTip')' passando id que não apareça, 'style' aqui quero alterar o style dele, 'display="nome"' por 'nome' faz definir não aparecer //
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display="none";
//ao executar pagina a msg abaixo estrão desaparecido, este é o resultado//

//Agora colocar um evento usando 'id' do '<form>' tipo uma msg de alerta//
document.getElementById('tipsForm').addEventListener('submit', calculateTip);
//'addEventListener' ele vai associador evento(submit) com função(calculateTip) em seguida//



//document.getElementById('') => este é o padrão iniciar JS//
//ss//
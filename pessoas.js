// Declarar uma variável qualquer, que receba um objeto vazio.
var objetovazio = new Object();

/*
Declarar uma variável `Pessoa`, que receba suas informações Pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var Pessoa = new Object();

Pessoa.nome = "Rodriogo";
Pessoa.sobrenome = "Alcantara";
Pessoa.sexo = "Masculino";
Pessoa.idade = 31;
Pessoa.altura = 1.80;
Pessoa.peso = 73;
Pessoa.andando = false;
Pessoa.caminhouQuantosMetros = 0;

/*
Adicione um método ao objeto `Pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa Pessoa, somando `1` a cada vez que
for chamado.
*/
Pessoa.FazerAniversario = function() {
    Pessoa.idade++
    return Pessoa.idade
}

/*
Adicione um método ao objeto `Pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
Pessoa.Andar = function(metroCaminhados){
    Pessoa.caminhouQuantosMetros += metroCaminhados;
    Pessoa.andando = true;

}

/*
Adicione um método ao objeto `Pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
Pessoa.Parar = function() {
    Pessoa.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
Pessoa.NomeCompleto = function(){
   return console.log("Ola! Meu nome é " + Pessoa.nome +" "+ Pessoa.sobrenome + "!")
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
Pessoa.mostrarIdade = function(){
    return console.log("Ola, eu tenho " + Pessoa.idade +" anos!")

}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
Pessoa.mostrarPeso = function(){
    return console.log("Eu peso " + Pessoa.peso + "Kg.")

}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
Pessoa.mostrarAltura = function(){
    return console.log("Minha altura é " + Pessoa.altura + "m")
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da Pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
    Pessoa.NomeCompleto();
/*
Qual a idade da Pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

 Pessoa.mostrarIdade()
/*
Qual o peso da Pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
Pessoa.mostrarPeso()

/*
Qual a altura da Pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
Pessoa.mostrarAltura()

/*
Faça a `Pessoa` fazer 3 aniversários.
*/
Pessoa.FazerAniversario()
Pessoa.FazerAniversario()
Pessoa.FazerAniversario()


/*
Quantos anos a `Pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

Pessoa.mostrarIdade()
/*
Agora, faça a `Pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
Pessoa.Andar(3)
Pessoa.Andar(2)
Pessoa.Andar(1)


/*
A Pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(Pessoa.andando)

/*
Se a Pessoa ainda está andando, faça-a parar.
*/
 Pessoa.Parar()
 console.log(Pessoa.andando)

/*
E agora: a Pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(Pessoa.andando) // andando = false = parou de andar

/*
Quantos metros a Pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(Pessoa.caminhouQuantosMetros) // metros que a pessoa caminhou

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `Pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `Pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

Pessoa.Apresentacao = function(){
    // let apresentacao = "Olá, eu sou o "+Pessoa.nome +" "+ Pessoa.sobrenome +", tenho "+Pessoa.idade+" anos, " +Pessoa.altura +", meu peso é "+Pessoa.peso+" e, só hoje, eu já caminhei "+ Pessoa.caminhouQuantosMetros +" metros!"
    
    let artigo = "o"
    let ano = "anos"
    let metro = "metros"

    if (Pessoa.sexo == "Feminino") {
        artigo = "a"
    }else if (Pessoa.idade == 1 ){
        ano = "ano"
    }else if (Pessoa.caminhouQuantosMetros == 1){
        metro = "metro"
    }
    
    return console.log("Olá, eu sou"+ artigo +" "+Pessoa.nome +" "+ Pessoa.sobrenome +", tenho "+Pessoa.idade+" "+ ano +", " +Pessoa.altura +", meu peso é "+Pessoa.peso+" e, só hoje, eu já caminhei "+ Pessoa.caminhouQuantosMetros +" "+metro+"!")
    
    // var apresentacao;

    // let nome = "Olá, eu sou o "+Pessoa.nome +" "+ Pessoa.sobrenome 
    // let idade = ", tenho "+Pessoa.idade+" anos, "
    // let PesoeAltura = Pessoa.altura +", meu peso é "+Pessoa.peso
    // let caminhei = " e, só hoje, eu já caminhei "+ Pessoa.caminhouQuantosMetros +" metros!"

    // let nomeFeminino = "Olá, eu sou a "+Pessoa.nome +" "+ Pessoa.sobrenome 
    // let idadesingular = ", tenho "+Pessoa.idade+" ano, "
    // let caminheisingular = " e, só hoje, eu já caminhei "+ Pessoa.caminhouQuantosMetros +" metro!"

    // switch (apresentacao) {
    //     case Pessoa.sexo = "Feminino":
    //         return apresentacao = nomeFeminino + idade + PesoeAltura + caminhei;
    //     case Pessoa.idade = 1:
    //         return apresentacao = nome + idadesingular + PesoeAltura + caminhei;
    //     case Pessoa.caminhouQuantosMetros = 1:
    //         return  apresentacao = nome + idade + PesoeAltura + caminheisingular
    //     default:
    //         return apresentacao = nome + idade + PesoeAltura + caminhei
    // }


}



// Agora, apresente-se ;)
// Pessoa.idade = 1
 //Pessoa.sexo = "Feminino"
// Pessoa.caminhouQuantosMetros = 1

Pessoa.Apresentacao()
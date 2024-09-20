// Classes
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Função para exibir erro
function exibirErro(mensagem) {
    const errorDiv = document.getElementById('error');
    errorDiv.innerText = mensagem;
}

// Função para capturar valores do formulário e criar instâncias
function criarFuncionarios() {
    try {
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;

        // Validação dos campos
        if (!nome || !idade || !cargo) {
            throw new Error("Por favor, preencha todos os campos obrigatórios (nome, idade, cargo).");
        }

        let gerente = null;
        let desenvolvedor = null;

        if (departamento) {
            gerente = new Gerente(nome, idade, cargo, departamento);
            console.log(gerente.seApresentar());
            console.log(gerente.trabalhar());
            console.log(gerente.gerenciar());
        }

        if (linguagem) {
            desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
            console.log(desenvolvedor.seApresentar());
            console.log(desenvolvedor.trabalhar());
            console.log(desenvolvedor.programar());
        }

        // Exibir informações na página
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = "";
        if (gerente) {
            outputDiv.innerHTML += `<p>${gerente.seApresentar()}</p>`;
            outputDiv.innerHTML += `<p>${gerente.gerenciar()}</p>`;
        }
        if (desenvolvedor) {
            outputDiv.innerHTML += `<p>${desenvolvedor.seApresentar()}</p>`;
            outputDiv.innerHTML += `<p>${desenvolvedor.programar()}</p>`;
        }
    } catch (error) {
        exibirErro(error.message);
    }
}

// Evento para capturar o envio do formulário
document.getElementById('formFuncionario').addEventListener('submit', function (event) {
    event.preventDefault();
    criarFuncionarios();
});

    Alunos = []
    Professores = []

    function controlar_menu() {
    mostrar_menu();
    }

    controlar_menu();

    function mostrar_menu() {
        while (true) {
            let resposta = parseInt(prompt('Menu\n[1] Cadastrar alunos \n[2] Listar Alunos \n[3] Cadastrar Professores \n[4] Listar Professores \n[5] Sair'));
        console.log(resposta);
        switch (resposta) {
            case 1:
                controlar_cadastro_Alunos(Alunos);
            case 2:
                controlar_lista_Alunos(Alunos);
                break;
            case 3:
                controlar_cadastro_Professores(Professores);
            case 4:
                controlar_lista_Professores(Professores);
                break;
            default:
                controlar_saida();
                break
        }
        }
    }

    function controlar_lista_Professores(Professores) {
        mostrar_lista(Professores);
    }

    function controlar_lista_Alunos(Alunos) {
        mostrar_lista(Alunos);
    }

    function armazenar(Alunos, aluno) {
        Alunos.push(aluno);
    }

    function mostrar_mensagem(mensagem) {
        alert(mensagem);
    }

    function controlar_cadastro_Alunos(Alunos) {
        let aluno = cadastro_aluno();
        // modelo
        armazenar(Alunos, aluno);
        mostrar_mensagem('cadastrado');
    }

    function controlar_cadastro_Professores(Professores) {
        let professor = cadastro_professor();
        // modelo
        armazenar(Professores, professor);
        mostrar_mensagem('cadastrado');
    }

    function cadastro_aluno() {
        let nome = prompt('Digite o nome: ');
        let idade = prompt('Digite a idade: ');
        let matricula = prompt('Digite a matricula: ');
        
        let aluno = {
            'nome' : nome,
            'idade' : idade,
            'matricula' : matricula,
        };
        return aluno;
    }

    function cadastro_professor() {
        let nome = prompt('Digite o nome: ');
        let idade = parseInt(prompt('Digite a idade: '));
        let materia = toString(prompt('Digite a materia que leciona: '));
        
        let professor = {
            'nome' : nome,
            'idade' : idade,
            'Materia' : materia,
        };
        return professor;
    }

    function controlar_lista_Alunos(Alunos) {
        // visão
        let texto = 'nome \t idade \t matricula';
        for (let aluno of Alunos) {
            //texto += '\n' + contato[0] + '\t' + contato[1];
            texto += '\n' + aluno.nome + '\t  |  ' + aluno['idade'] + 'Anos  \t|  ' + aluno['matricula'];
        }
        alert(texto);
    }

    function controlar_lista_Professores(Professores) {
        // visão
        let texto = 'nome \t idade \t Materia';
        for (let professor of Professores) {
            //texto += '\n' + contato[0] + '\t' + contato[1];
            texto += '\n' + professor.nome + '   \t|   ' + professor['idade'] + 'Anos   \t|  ' + professor['Materia'];
        }
        alert(texto);
    }

    function controlar_saida() {
        // visão
        mostrar_mensagem('Você saiu');
    }
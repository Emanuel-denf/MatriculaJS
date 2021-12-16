    alunos = []
    Professores = []

    function controlar_menu() {
    mostrar_menu();
    }

    //controlar_menu();

    function mostrar_menu() {
        loop_principal:
        while (true) {
            let resposta = parseInt(prompt('Menu\n[1] Cadastrar alunos \n[2] Listar Alunos \n[3] Cadastrar Professores \n[4] Listar Professores \n[6] Editar alunos \n[7] Apagar alunos '));
            console.log(resposta);
            switch (resposta) {
                case 1:
                    controlar_cadastro_Alunos(alunos);
                    break;
                case 2:
                    controlar_lista_Alunos(alunos);
                    break;
                case 3:
                    controlar_cadastro_Professores(Professores);
                case 4:
                    controlar_lista_Professores(Professores);
                    break;
                case 5:
                    controlar_apagar_Alunos(alunos);
                    break;
                case 6:
                    controlar_editar_Alunos(alunos);
                    break;
                case 7:
                    controlar_saida();
                    break;
                default:
                    controlar_saida();
                    break loop_principal;
            }  
        }
    }

    function controlar_lista_Professores(Professores) {
        mostrar_lista(Professores);
    }

    function controlar_lista_Alunos(alunos) {
        mostrar_lista_html(alunos);
    }

    function controlar_apagar_Alunos(alunos) {
        mostrar_lista(alunos)        
        let id = parseInt(prompt("Digite o ID do Aluno que você deseja apagar: "));
        apagar(alunos, id);
    }
    
    function apagar(alunos, id) {
        alunos.splice(id, 1);
        alert('Apagado ' + id);
    }

    function armazenar(alunos, aluno) {
        alunos.push(aluno);
    }

    function mostrar_mensagem(mensagem) {
        alert(mensagem);
    }

    function editar(alunos, aluno, id) {
        alunos[id] = aluno;
    }

    function controlar_cadastro_Alunos(alunos) {
        let formulario = document.getElementById('formulario_principal');
        let id = document.getElementById('id').value;
        let aluno = cadastro_aluno_html(alunos);
        // modelo
        if (formulario.method == 'put') {
            editar(alunos, aluno, id);
            mostrar_mensagem('Editado');
        } 
        else {
            armazenar(alunos, aluno);
            mostrar_mensagem('cadastrado'); 
        }
        controlar_lista_Alunos(alunos);
    }


    function controlar_formulario_edicao(alunos, id) {
        document.getElementById('id').value = id;
        let aluno = procurar(alunos, id);
        mostrar_formulario_HTML(aluno);
        let formulario = document.getElementById('formulario_principal');
        formulario.method = 'put';
    }

    function procurar(alunos, id) {
        let aluno = alunos[id];
        return aluno
    }

    function mostrar_formulario_HTML(aluno) {
        document.getElementById('nome').value = aluno.nome;
        document.getElementById('idade').value = aluno.idade;
        document.getElementById('matricula').value = aluno.matricula;
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

    function controlar_lista_Alunos(alunos) {
        // visão
        let texto = '\t ID \t nome \t idade \t matricula';
        for (let id in alunos) {
            let aluno = alunos[id];
            //texto += '\n' + contato[0] + '\t' + contato[1];
            texto += '\n' + id + '\t  |  ' + aluno.nome + '\t  |  ' + aluno['idade'] + 'Anos  \t|  ' + aluno['matricula'];
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

    function cadastro_aluno_html() {
        let nome = document.getElementById('nome').value;
        let idade = document.getElementById('idade').value;
        let matricula = document.getElementById('matricula').value;
    

        let aluno = {
            'nome' : nome,
            'idade' : idade,
            'matricula' : matricula, 
        };
        return aluno;
    }

    function mostrar_lista_html(alunos) {
        
        let tabela_dados = document.getElementById('tabela_dados');
        tabela_dados.innerHTML = '';
        for (let id in alunos) {
            let aluno = alunos[id];
            let linha = document.createElement('tr');
            let coluna_id = document.createElement('td');
            let coluna_nome = document.createElement('td');
            let coluna_idade = document.createElement('td');
            let coluna_matricula = document.createElement('td');
            let coluna_acao = document.createElement('td');
            let botao_apagar = document.createElement('button');
            let botao_editar = document.createElement('button');
            coluna_acao.append(botao_editar, botao_apagar);
            coluna_id.textContent = id;
            coluna_nome.textContent = aluno.nome;
            coluna_idade.textContent = aluno.idade;
            coluna_matricula.textContent = aluno.matricula;
            botao_apagar.textContent = 'Apagar';
            botao_editar.textContent = 'Editar';
            botao_apagar.onclick = function () {
                apagar(alunos, id);
            };
            botao_editar.onclick = function () {
                controlar_formulario_edicao(alunos, id);
            }
            linha.append(coluna_id, coluna_nome, coluna_idade, coluna_matricula, coluna_acao);
            tabela_dados.append(linha);
        }
        
    }
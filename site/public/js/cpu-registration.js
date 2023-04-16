function abrirPopup() {
    document.getElementById('popup_fundo').style.display = 'block';
    inp_host.value = "";
    inp_nomeArq.value = "";
    inp_ultimo_nome_arq.value = "";
    inp_SO.value = "";
}

function fecharPopup() {
    document.getElementById('popup_fundo').style.display = 'none';
    body.style.overflowY = "visible";
}

function cadastrarMaquina() {
    var idGestor = sessionStorage.ID_GESTOR
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var hostName = inp_host.value;
    var nomeArq = inp_nomeArq.value;
    var ultimoNomeArq = inp_ultimo_nome_arq.value;
    var SO = inp_SO.value;

    if (hostName == "" || nomeArq == "" || ultimoNomeArq == "" || SO == "") {
        alert("Preencha todos os campos");
        return false;
    }

    // Enviando o valor da nova input
    fetch(`/maquinas/cadastrarMaquina/${idGestor}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            hostNameServer: hostName,
            nomeArqServer: nomeArq,
            ultimoNomeArqServer: ultimoNomeArq,
            soServer: SO,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso!");

            setTimeout(function () {
                window.location.reload();
            }, 2000);
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
}

function listarMaquinas() {
    let idGestor = sessionStorage.ID_GESTOR

    //aguardar();
    fetch(`/maquinas/listarMaquinas/${idGestor}`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                throw "Nenhum resultado encontrado!!";
            }
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                for (let i = 0; i < resposta.length; i++) {
                    computers.innerHTML += `
                    <div class="computer">
                        <div class="cardHeader">
                            <div class="actions">
                                <ion-icon name="pencil-outline" size="large"></ion-icon>
                                <ion-icon name="trash-outline" size="large"></ion-icon>
                            </div>
                            <div class="activity">
                                <small>${resposta[i].status}</small>
                            </div>
                        </div>
                        <div class="cardFooter">
                            <img src="styles/assets/icone/+monitor.png" alt="">
                            <span>${resposta[i].hostName}</span>
                        </div>
                    </div>
                            `;
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}
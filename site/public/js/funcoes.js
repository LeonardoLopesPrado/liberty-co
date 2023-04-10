// sessão
function validarSessao() {
    // aguardar();

    var razaoSoc = sessionStorage.RAZAO_SOCIAL_EMPRESA;
    var cnpj = sessionStorage.CNPJ_EMPRESA;

    var b_empresa = document.getElementById("b_empresa");
    var b_cnpj = document.getElementById("b_cnpj");
    console.log(razaoSoc);
    console.log(cnpj);

    if (razaoSoc != null && cnpj != null) {
        // alert(`Seja bem-vindo, ${razaoSoc}!`);
        b_empresa.innerHTML = razaoSoc;
        b_cnpj.innerHTML = cnpj;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}


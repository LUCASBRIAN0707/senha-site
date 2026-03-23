function gerarSenha() {
    const tamanho = document.getElementById('tamanho').value;
    const caracteres = 
    'ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let senha = '';
    //gerar senha aleatória
    for (let i = 0; i < tamanho; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(index);//pega o caractere na posição
    }
    //Exibe a senha na tela
    document.getElementById('senha').textContent = senha;
}
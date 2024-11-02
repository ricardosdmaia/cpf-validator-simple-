function validarCPF() {
    const cpf = document.getElementById('cpf').value;
    const mensagem = document.getElementById('mensagem');
    const valido = cpf.length === 11; // Validação básica só para exemplo
  
    mensagem.textContent = valido ? 'CPF Válido!' : 'CPF Inválido!';
    mensagem.className = valido ? 'verde' : 'vermelho';
  }
  
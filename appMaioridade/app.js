/**
 * Validação da maioridade
 * @author Gustavo Nunes Bispo
 */

// Função para a validação de maioridade
function validar(event) {
    // a linha abaixo anula o comportamento padrão de envio
    event.preventDefault()

    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value

    document.getElementById('aluno').value = `Aluno: ${nome}`

    if (idade < 18) {
        document.getElementById('status').value = "Menor de idade"
    } else {
        document.getElementById('status').value = "Maior de idade"
    }
}
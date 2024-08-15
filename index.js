const apiUrl = 'http://localhost:3000/transporte'; 

async function obterTransporte() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Dados de transporte:', data);
    } catch (error) {
        console.error('Erro ao obter dados de transporte:', error);
    }
}

async function adicionarTransporte() {
    const distancia = document.getElementById('distancia').value;
    const veiculo = document.getElementById('veiculo').value;

    const novoTransporte = {
        km: distancia,
        veiculo: veiculo
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoTransporte)
        });
        const data = await response.json();
        console.log('Transporte adicionado:', data);
    } catch (error) {
        console.error('Erro ao adicionar transporte:', error);
    }
}

async function atualizarTransporte() {
    const id = prompt('Digite o ID do transporte a ser atualizado:');
    const distancia = document.getElementById('distancia').value;
    const veiculo = document.getElementById('veiculo').value;

    const transporteAtualizado = {
        km: distancia,
        veiculo: veiculo
    };

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transporteAtualizado)
        });
        const data = await response.json();
        console.log('Transporte atualizado:', data);
    } catch (error) {
        console.error('Erro ao atualizar transporte:', error);
    }
}

async function deletarTransporte() {
    const id = prompt('Digite o ID do transporte a ser deletado:');

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('Transporte deletado com sucesso');
        } else {
            console.error('Erro ao deletar transporte');
        }
    } catch (error) {
        console.error('Erro ao deletar transporte:', error);
    }
}


window.onload = obterTransporte;
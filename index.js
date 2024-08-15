document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const transport = parseFloat(document.getElementById('transport').value);
    const energy = parseFloat(document.getElementById('energy').value);
    const waste = parseFloat(document.getElementById('waste').value);

    const transportEmission = transport  0.21;  Emissão por km (em kg CO2e)
    const energyEmission = energy  0.233;  Emissão por kWh (em kg CO2e)
    const wasteEmission = waste  52  0.1;  Emissão por kg de resíduos (em kg CO2e por ano dividido por 52 semanas)
    
    const totalEmission = transportEmission + energyEmission + wasteEmission;
    
    document.getElementById('carbonOutput').innerText = `Sua emissão de carbono é de aproximadamente ${totalEmission.toFixed(2)} kg de CO2e por dia.`;
});
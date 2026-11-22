const fs = require('fs');
const readline = require('readline');

// VPB: normalização de espaços na linha final do versículo
// (as quebras de linha do formato f4 deixam espaços duplos e espaços antes de pontuação)
function normalizeSpaces(text) {
    return text
        .replace(/ +\\add\*/g, '\\add* ')                    // espaço final de dentro do itálico vai para fora
        .replace(/ +\\f \+/g, '\\f +')                         // chamada de nota colada à palavra anterior (padrão USFM)
        .replace(/[ \t]{2,}/g, ' ')                               // espaços duplos
        .replace(/ +([,.;:!?)\]»”’])/g, '$1')                    // espaço antes de pontuação
        .replace(/(\p{L}) -(o|a|os|as|lo|la|los|las|no|na|nos|lhe|lhes|se|me|te|vos)(?![\p{L}])/gu, '$1-$2') // "acusá -lo"
        .replace(/ +$/, '');
}

// Função para processar o arquivo
function processFile(inputFile, outputFile) {
    const inputStream = fs.createReadStream(inputFile);
    const outputStream = fs.createWriteStream(outputFile);
    const rl = readline.createInterface({
        input: inputStream,
        crlfDelay: Infinity
    });

    let currentVerse = '';
    const allowedMultiLineMarkers = ['\\c', '\\b', '\\m', '\\p', '\\q1', '\\q2', '\\mt1', '\\mt2', '\\id', '\\ide', '\\h', '\\toc1', '\\toc2', '\\toc3', '\\d' ];

    rl.on('line', (line) => {
        const trimmedLine = line.trim();

        // Verifica se a linha contém um marcador de verso (\v)
        if (trimmedLine.startsWith('\\v ')) {
            // Se houver um verso anterior, escreve-o no arquivo de saída
            if (currentVerse) {
                outputStream.write(normalizeSpaces(currentVerse) + '\n');
            }
            currentVerse = line.trim() + ' '; // Inicia um novo verso
        } else if (allowedMultiLineMarkers.some(marker => trimmedLine.startsWith(marker))) {
            // Para marcadores específicos, escreve na linha seguinte
            if (currentVerse) {
                outputStream.write(normalizeSpaces(currentVerse) + '\n');
                currentVerse = ''; // Limpa o verso atual
            }
            outputStream.write(line + '\n');
        } else {
            // Continua adicionando conteúdo à linha do verso atual
            currentVerse += line;
        }
    });

    rl.on('close', () => {
        // Escreve o último verso
        if (currentVerse) {
            outputStream.write(normalizeSpaces(currentVerse) + '\n');
        }
        outputStream.end();
        console.log('Arquivo processado com sucesso!');
    });
}

// Executa o script com os parâmetros do arquivo de entrada e saída
const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (inputFile && outputFile) {
    processFile(inputFile, outputFile);
} else {
    console.log('Por favor, forneça o nome do arquivo de origem e destino.');
}

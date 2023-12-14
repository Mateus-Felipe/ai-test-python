const tf = require('@tensorflow/tfjs-node');
const { TFAutoModelForQuestionAnswering } = require('@huggingface/tfjs');

async function loadModel() {
    // Carregar o modelo pré-treinado BERT para Question Answering
    const model = await TFAutoModelForQuestionAnswering.fromPretrained('bert-large-uncased-whole-word-masking-finetuned-squad');

    return model;
}

async function answerQuestion(model, question, context) {
    // Tokenizar a pergunta e o contexto
    const tokenizer = await tf.autodiff.io.fileSystem('https://cdn.huggingface.co/distilbert-base-cased-distilled-squad/tokenizer.json');
    const inputs = await tokenizer.encodePlus(question, context, { return_tensors: 'tf' });

    // Obter a previsão do modelo
    const outputs = await model.predict(inputs);

    // Decodificar a resposta
    const answer = tokenizer.decode(outputs.startTensor.dataSync()[0], { endTensor: outputs.endTensor });

    return answer;
}

async function main() {
    // Carregar o modelo BERT
    const model = await loadModel();

    // Exemplo de pergunta e contexto
    const question = "Qual é a diferença entre Python 2 e Python 3?";
    const context = "Python 2 foi descontinuado, enquanto Python 3 é a versão mais recente e ativamente mantida da linguagem de programação Python.";

    // Obter resposta
    const response = await answerQuestion(model, question, context);

    // Exibir a resposta
    console.log('Resposta:', response);
}
// Executar o código principal
main();
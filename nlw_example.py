from transformers import pipeline
import sys 


def answer_question(question, context):
    # Utiliza o modelo pré-treinado da Hugging Face para Question Answering
    nlp = pipeline("question-answering")
    
    # Chama o modelo com a pergunta e o contexto
    result = nlp({
        "question": question,
        "context": context
    })

    return result["answer"]

if __name__ == "__main__":
    # Exemplo de uso
    question = "Qual é a diferença entre Python 2 e Python 3?"
    context = "Python 2 foi descontinuado, enquanto Python 3 é a versão mais recente e ativamente mantida da linguagem de programação Python."

    answer = answer_question(question, context)
    print("Resposta:", answer)

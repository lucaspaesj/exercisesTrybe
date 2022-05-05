import React from 'react';

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

const format = (content, block, status) => {
    return <li className="card" key={block}>O conteúdo é: {content};<br />Status: {status};<br />Bloco: {block}</li>
}

class Content extends React.Component {
    render() {
        return <ul className="content">{conteudos.map((conteudo) => format(conteudo.conteudo, conteudo.bloco, conteudo.status))}</ul>
    }
}

export default Content;

import React, { useRef } from 'react';
import './App.css';

function App() {
    // Cria uma referência para o formulário
    const formRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        // Usa formRef.current para acessar o elemento do formulário
        const formData = new FormData(formRef.current);

        // Adiciona os parâmetros necessários para o EmailJS
        formData.append('service_id', 'service_48c54qx');
        formData.append('template_id', 'template_fwmjeki');
        formData.append('user_id', '33KF7mloTQixL1p32');

        // Envia os dados do formulário usando fetch e a API do EmailJS
        fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                method: 'POST',
                body: formData,
            })
            .then((response) => {
                if (response.ok) {
                    alert('Seu e-mail foi enviado!');
                } else {
                    alert('Algo deu errado.');
                }
            })
            .catch((error) => {
                alert('Erro: ' + JSON.stringify(error));
            });
    };

    return ( <
        div className = "App" >
        <
        h2 > Confirme sua presença < /h2>

        { /* Imagem do convite */ } <
        img src = "convite.jpeg"
        alt = "Convite de Aniversário de Isabelle"
        className = "invite-image" / >

        { /* Título da Mensagem */ } <
        div className = "message-title" > Mensagem da Isabelle < /div>

        { /* Mensagem da Isabelle */ } <
        div className = "wishlist" >
        <
        div className = "wishlist-title" > Quero muito você na minha festa.E para facilitar, se quiser conhecer mais meu gosto, segue uma listinha: < /div> <
        ul >
        <
        li > Sapato - 36 e Tamanho de roupa M < /li> <
        li > Fone de Ouvido(Com fio, sem fio, bluetooth...) < /li> <
        li > Caixinha de som < /li> <
        li > Microfone com fio < /li> <
        li > Câmera polaroid < /li> <
        li > Acessórios de prata(anel, pulseira, brinco, colar) < /li> <
        li > Perfumes Floratta e Tatty(Boticário) < /li> <
        li > Tênis e Bota confortáveis < /li> <
        li > Blusa do Brasil < /li> <
            li > Camiseta do Brasil < /li> <
                li > Roupa de academia(Camiseta, shorts, meias) < /li> <
                li > Itens de academia(Bloco de yoga, barra, colchonete) < /li> <
                li > Quebra - cabeça de 3.000 peças ou mais < /li> <
                li > Itens para RPG(Tela de escudo de mestre, set de dados, mapas, miniaturas, livro de D & D)(Ex.Lojas: Leitura e Saraiva) < /li> <
                li > Vale presente da Steam < /li> <
                li > Material de pintura(quadro, tinta acrílica, pincéis, caneta posca...) < /li> <
                li > Guitarra, Violino, amplificador(Não precisam ser novos) < /li> <
                /ul> <
                /div>

            <
            div className = "card" >
            <
            div className = "title" > Você foi convidado! < /div> <
            div className = "subtitle" > Aniversário de Isabelle - 18 Anos < /div> <
            div className = "details" >
            Data: 07 / 12 / 2024 < br / >
            Hora: 19: 00 < br / >
            Local: Atelier Viriato(ao lado do Alice 's) <br />
                Endereço: Rua Núbia Barrocas, 1685 - Parque Manibura, Fortaleza - CE < br / >
                Traje: Esporte fino <
                /div>

                <
                div className = "form" >
                <
                h3 > Confirme sua presença < /h3> { /* Formulário com referência e evento de envio */ } <
                form ref = { formRef }
                onSubmit = { sendEmail } >
                <
                input type = "text"
                id = "nome"
                name = "nome"
                placeholder = "Nome"
                required / > < br / >
                <
                input type = "text"
                id = "sobrenome"
                name = "sobrenome"
                placeholder = "Sobrenome"
                required / > < br / >
                <
                button type = "submit" > Confirmar Presença < /button> <
                /form> <
                /div>

                <
                div className = "map" >
                <
                h3 > Localização < /h3> { /* Mapa do Google Maps embutido */ } <
                iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31811.29715747865!2d-38.4851943295544!3d-3.797475019749503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748fe3e869a29%3A0x4742cb25ae7a4f4d!2sRua%20N%C3%BAbia%20Barrocas%2C%201685%20-%20Parque%20Manibura%2C%20Fortaleza%20-%20CE%2C%2060810-005%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1699388902758!5m2!1spt-BR!2sbr"
                width = "100%"
                height = "250"
                style = {
                    { border: 0 } }
                allowFullScreen = ""
                loading = "lazy"
                referrerPolicy = "no-referrer-when-downgrade" >
                < /iframe> <
                /div> <
                /div> <
                /div>
            );
    }

    export default App;
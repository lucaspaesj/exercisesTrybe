FROM nginx
# imagem base
COPY ./index.html /usr/share/nginx/html
# copiando o arquivo html pra dentro da nossa imagem
EXPOSE 3000
# para fins de documentação, seleciona a porta usada no container
ENV API_URL=http://localhost:8000/api/
# ENV se trata da criação de uma variável em Docker
WORKDIR /usr/share/nginx/html
# pasta a ser acessada ao iniciar nossa imagem
RUN ls
# permite rodar qualquer comando bash na hora da criação da nossa imagem
ENTRYPOINT [ "/usr/sbin/nginx" ]
# seta o comando a ser executado no início da criação do container
CMD [ "-g", "daemon off;" ]
# seta os parâmetros base a serem executados no início da criação do container
#JLIVERY
        
Como fazer o deploy no ambiente de DEV(local)?

1. Na raiz do projeto, execute o comando docker-compose up -d
2. Rode o comando `docker exec -it <ID_DO_MARIADB_CONTAINER> bash -l -c 'mysql --user=root --password=i34dbkub < /config/privileges.sql'`
3. Rode o comando `docker stop $(docker ps -a -q)`
4. Rode o comando `docker-compose up`
4. Ao acessar `http://localhost:3001/users` deve ser mostrado o json de usuarios

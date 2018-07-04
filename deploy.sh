rm -rf jlivery-ws && \
git clone https://BrunoBNascimento:i34dbkub@github.com/BrunoBNascimento/jlivery-ws -v && \
cd jlivery-ws && \
ls -a && \
docker rm -f jliveryws_jliveryws_1 && \
docker rm -f jliveryws_mariadb_1 && \
docker-compose up -d


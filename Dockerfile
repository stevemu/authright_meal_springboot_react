FROM jimador/docker-jdk-8-maven-node

WORKDIR /
COPY . .
WORKDIR /meal_client
RUN npm install
RUN npm build
WORKDIR /meal_server
RUN mvn package

CMD [ "java", "-jar", "./target/meal-0.0.1-SNAPSHOT.jar" ]
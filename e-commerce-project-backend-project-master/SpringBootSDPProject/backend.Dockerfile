# -------- Stage 1: Build the Spring Boot JAR using JDK 21 --------
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# Copy dependencies first
COPY pom.xml .
RUN mvn -q dependency:go-offline

# Copy project
COPY . .

# Build project with Java 21
RUN mvn clean package -DskipTests


# -------- Stage 2: Run the JAR using JDK 21 --------
FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# Copy jar from Maven build
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8000

ENTRYPOINT ["java", "-jar", "/app/app.jar"]

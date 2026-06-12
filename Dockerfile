# Estágio de Build (Compilação)
FROM node:22-alpine AS builder

WORKDIR /app

# Copia as definições de dependências
COPY package*.json ./

# Instalação limpa das dependências
RUN npm ci

# Copia todo o código fonte (respeitando o .dockerignore)
COPY . .

# Compila o projeto Astro gerando a pasta dist
RUN npm run build

# Estágio de Produção (Servidor Web)
FROM nginx:alpine

# Copia os arquivos compilados da etapa anterior para a pasta do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta padrão do Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

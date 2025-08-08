# 🚗 Cadastro de Veículos - Fullstack Kotlin + React

Aplicação **fullstack** para gerenciamento de veículos, com **backend em Kotlin (Ktor)** e **frontend em React (SPA)**.  
O sistema permite cadastrar, listar, atualizar e excluir veículos, além de fornecer estatísticas como:

- Quantidade de veículos não vendidos
- Distribuição por década de fabricação
- Distribuição por fabricante
- Veículos cadastrados na última semana

---

## 📂 Estrutura do Projeto

│  
├── backend/ # API RESTful em Kotlin (Ktor)  
│ ├── build.gradle.kts # Configuração do Gradle  
│ ├── src/ # Código fonte do backend  
│ └── test/ # Testes unitários  
│  
├── frontend-veiculos/ # Aplicação SPA em React  
│ ├── package.json # Configuração do npm/yarn  
│ ├── src/ # Código fonte do frontend  
│ └── public/ # Arquivos estáticos  
│  
└── README.md # Este arquivo  


---

## 🛠️ Tecnologias Utilizadas

### **Backend**
- [Kotlin](https://kotlinlang.org/)
- [Ktor](https://ktor.io/) - Framework para APIs HTTP
- [Gradle](https://gradle.org/) - Build automation
- [JUnit](https://junit.org/) - Testes unitários

### **Frontend**
- [React](https://react.dev/) - Biblioteca para UI
- [Vite](https://vitejs.dev/) - Build rápido para frontend
- [Axios](https://axios-http.com/) - Requisições HTTP
- [React Router](https://reactrouter.com/) - Navegação SPA

---

## 🚀 Como Executar o Projeto

### **1️⃣ Clonar o repositório**

```bash
git clone [https://github.com/seu-usuario/meu-projeto-veiculos.git](https://github.com/luisgu496/TesteBackendVeiculos/tree/main)
cd meu-projeto-veiculos
```

### **2️⃣ Rodar o Backend (Kotlin)**

1. Acesse a pasta do backend:

```bash
cd backend
```

2. Compile e execute:

```bash
./gradlew run
```

3. A API estará disponível em:
   
```bash
http://localhost:8080
```

### **3️⃣ Rodar o Frontend (React)**

1. Acesse a pasta do frontend:
   
```bash
cd ../frontend-veiculos
```

2. Instale as dependências:

 ```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

 ```bash
npm run dev
```

4. O sistema estará disponível em:
   
 ```bash
http://localhost:5173
```

👨‍💻 Autor
Desenvolvido por Luis Gustavo 🚀


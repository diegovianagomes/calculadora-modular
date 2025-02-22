# Calculadora Modular
GitHub License

A **Calculadora Modular** é uma ferramenta desenvolvida para arquitetos e profissionais da construção civil, projetada para otimizar o uso de espaço e materiais através de cálculos modulares precisos.

## 🚀 Recursos Principais

- **Cálculo Modular**: Insira largura, altura e módulo base para encontrar combinações modulares otimizadas.
- **Modulação por Área**: Forneça uma área total e um módulo base para gerar layouts modulares com base em proporções específicas (como a proporção áurea).
- **Interface Responsiva**: Interface moderna e acessível, construída com tecnologias como **Next.js**, **React**, **TailwindCSS** e **Radix UI**.
- **Tema Claro/Escuro**: Alterne entre temas claro e escuro para melhorar a experiência do usuário.
- **Ajuda e Documentação**: Inclui páginas dedicadas para explicar conceitos de coordenação modular e apresentar a equipe de desenvolvimento.

## 📦 Tecnologias Utilizadas

- **Frontend**: Next.js, React, TailwindCSS
- **Componentes UI**: Radix UI, Shadcn/ui
- **Estilização**: TailwindCSS, DaisyUI
- **Gráficos**: Recharts (opcional, não amplamente utilizado no momento)
- **Outros**: Sonner (notificações), Lucide React (ícones)

## 🛠️ Como Usar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/diegovianagomes/calculadora-modular.git
   cd calculadora-modular
   ```

2.Instale as dependencias:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
### 📂Estrutura do Projeto

    ```bash
        ├── app/
    │   ├── page.tsx          # Página inicial com a calculadora
    │   ├── ajuda/            # Página de ajuda com explicações sobre modulação
    │   └── quem-somos/       # Página "Quem Somos" com informações da equipe
    ├── assets/
    │   └── avatar_mock.webp  # Imagens estáticas
    ├── components/
    │   ├── calculator.tsx    # Lógica principal da calculadora
    │   ├── header.tsx        # Cabeçalho da aplicação
    │   └── footer.tsx        # Rodapé da aplicação
    ├── styles/
        └── globals.css       # Estilos globais
    ```

### 📄 Licença
Este projeto está licenciado sob a MIT License . Veja o arquivo LICENSE para mais detalhes.

### 🙌 Agradecimentos
Diego Viana e Paula Louzada pela criação e desenvolvimento desta ferramenta.
A comunidade open-source por bibliotecas e frameworks incríveis.
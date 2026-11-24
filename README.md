# Portfólio Dev

Site responsivo feito com HTML, CSS e JavaScript puro. Não precisa de Flask, banco de dados ou instalação de dependências. Pode ser publicado no GitHub Pages.

## Personalização obrigatória
Abra `assets/script.js` e edite o objeto `CONFIG`:
- `name`: seu nome profissional.
- `githubUser`: usuário do GitHub, sem @.
- `whatsapp`: DDI + DDD + telefone, apenas números (exemplo fictício: `5511999999999`).
- `email`: endereço para contato.

Edite também o texto de apresentação e o link do LinkedIn em `index.html`.

## Adicionar projetos
No arquivo `assets/script.js`, dentro de `const projects = [...]`, adicione objetos com:
- `title`: nome do projeto.
- `description`: resumo das funcionalidades.
- `symbol`: emoji ou símbolo da capa.
- `tech`: tecnologias usadas.
- `github`: URL do repositório.
- `demo`: URL da versão publicada; deixe vazio se não houver demonstração.

## Testar
Abra `index.html` no navegador ou use a extensão Live Server no VS Code.

## Publicar no GitHub Pages
1. Crie um repositório público (ex.: `meu-portfolio`).
2. Envie `index.html`, a pasta `assets` e `README.md` para a raiz.
3. Vá em Settings > Pages.
4. Em Build and deployment, selecione Deploy from a branch, branch `main`, pasta `/ (root)` e salve.
5. Aguarde o GitHub exibir o endereço publicado.

## Contato
Os botões abrem WhatsApp e aplicativo de e-mail com uma mensagem inicial. Este modelo não armazena mensagens. Para formulário que envie dados sem abrir outro aplicativo, será necessário integrar backend ou serviço de formulários.

Antes de divulgar, substitua todos os campos de exemplo e teste os links no celular e computador.

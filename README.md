# Landing page — Karen Cristine

Landing page estática para divulgação de serviços de cuidado domiciliar e hospitalar em Juiz de Fora, MG.

## Executar localmente

```bash
python3 -m http.server 4173
```

Acesse `http://localhost:4173`.

## Publicar no GitHub Pages

O projeto inclui um workflow do GitHub Actions que publica automaticamente o
conteúdo da branch `main` no GitHub Pages.

1. Crie um repositório no GitHub e envie este projeto para ele.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **GitHub Actions**.
4. Faça merge das alterações na branch `main` ou execute manualmente o workflow
   **Publicar no GitHub Pages** na aba **Actions**.
5. Ao concluir, o endereço público aparecerá no resumo da execução e em
   **Settings → Pages**.

Em um repositório chamado `landingpage-karen`, o endereço normalmente terá o
formato `https://SEU-USUARIO.github.io/landingpage-karen/`.

Os caminhos dos arquivos do site são relativos, então a página funciona tanto
em um domínio próprio quanto em um subdiretório do GitHub Pages.

## Personalização necessária

Antes da publicação, substitua o telefone e o e-mail de exemplo presentes em `index.html` e `script.js` pelos contatos reais da Karen. Os depoimentos e o contador também são conteúdo demonstrativo e devem ser validados.

# HM Digital · Links

Página de links da bio do Instagram [@agencia_hmdigital](https://instagram.com/agencia_hmdigital), no mesmo visual dos cartões dos sócios.

- Botão principal: WhatsApp da HM com mensagem de orçamento.
- Um botão por serviço, que abre o WhatsApp com a mensagem já escrita (assim dá para saber o interesse de quem chamou).
- Cartões e Instagram do Neto e da Mariana.

## Editar

Tudo fica no bloco `window.HM_LINKS`, no topo de `assets/js/links.js`: número do WhatsApp, textos, serviços, mensagens e sócios.
Para adicionar um serviço, copie uma linha de `services`. Os ícones disponíveis estão no objeto `icons` logo abaixo.

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicar na Vercel

Site estático, sem build. **Add New → Project → importar este repositório → Deploy** (Framework Preset: *Other*).
Domínio sugerido: `links.hmdigitalgo.com` (já usado na prévia do link em `index.html`; se mudar, troque lá também).

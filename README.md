# parking-web-client

> Operar check-in, check-out e histórico de vagas de estacionamento em interface web responsiva.

## Stack

- React 18 + TypeScript
- Vite
- Redux + Redux Saga
- Styled Components
- MSW (mock de API para desenvolvimento/demo)

## Pré-requisitos

- Node.js 20+

## Configuração

1. Copie o arquivo de ambiente:

```bash
cp .env.example .env
```

2. Variáveis disponíveis:

| Variável | Descrição |
|---|---|
| `VITE_API_URL` | URL base da API de estacionamento |
| `VITE_USE_MOCK_API` | `true` usa MSW local; `false` usa API real |

> O backend Heroku original pode estar indisponível. Para demo local/portfólio, mantenha `VITE_USE_MOCK_API=true`.

## Scripts

```bash
npm install
npm run dev
npm run build
npm test
npm run lint
```

## Fluxos cobertos

- Entrada de veículo (`POST /parking`)
- Saída (`POST /parking/:plate/out`)
- Pagamento (`POST /parking/:plate/pay`)
- Histórico (`GET /parking/:plate`)

## CI

Pipeline em `.github/workflows/ci.yml` executa lint, testes e build.

---

[Ver no portfólio](https://josuelns.github.io/) · [josuelns](https://github.com/josuelns)

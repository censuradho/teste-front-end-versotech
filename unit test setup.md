# Unit test TypeScript

```bash
yarn add -D jest @types/jest jest-environment-jsdom
```

```bash
yarn jest --init
```

Agora crie um arquivo chamado `setup.ts` no seguinte path `src/tests` com o seguinte conteúdo.

```typescript
import '@testing-library/jest-dom'
```

No `jest.config` é preciso fazer as seguintes alterações

```typescript
{
    moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/setup.ts'
  ],
    roots: [
    "<rootDir>"
  ],
    transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },
}
```

```bash
yarn add -D ts-node
```

Agora precisamos de uma lib chamada SWC, que cumpre o mesmo papel do Babel, ou seja, converte o código para ser compatível com diversos providers como browser, jest etc. O diferencial dela é que ela é escrita em Rust.

```bash
yarn add -D @swc/core @swc/jest
```

Precisamos também adicionar as dependências da lib testing library.

```bash
yarn add @testing-library/react @testing-library/jest-dom @testing-library/user-event -D 
```

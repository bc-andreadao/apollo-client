
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://store-o8ertuc7vw-1730162.mybigcommerce.com/graphql",
  documents: "./src/**/*.graphql",
  generates: {
    "./src/graphql/generated.ts": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;

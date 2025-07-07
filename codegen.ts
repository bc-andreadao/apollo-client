import dotenv from 'dotenv';
import type { CodegenConfig } from '@graphql-codegen/cli';

dotenv.config({ path: '.env.local' });

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://store-o8ertuc7vw-1730162.mybigcommerce.com/graphql": {
        headers: {
          Authorization: `Bearer ${process.env.BIGCOMMERCE_API_TOKEN}`,
        },
      },
    },
  ],
  documents: "./src/**/*.graphql",
  generates: {
    "./src/graphql/generated.ts": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;

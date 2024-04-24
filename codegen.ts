import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: ["./moduleFile.ts", "./schemaFile.graphql"],
  require: ["ts-node/register"],
  generates: {
    schema: {
      ...defineConfig(),
      config: {
        enumValues: {
          Color: {
            RED: "red",
            GREEN: "green",
            BLUE: "blue",
          },
        },
      },
    },
  },
};

export default config;

import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"
import dts from "rollup-plugin-dts"
import filesize from "rollup-plugin-filesize"

import packageJson from "./package.json" assert { type: "json" }

const config = [
  {
    input: "lib/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      commonjs(),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
      filesize(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
]
export default config

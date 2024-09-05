# repoagentapp

Install dependencies:

```bash
bun install
```

Setup environment:

```bash
bun ./setup.bun.sh --setup-env="${MODE:-development}"
```

Dev:

```bash
NODE_ENV=development bun run --define=process.env.MODE="'development'" --port=3000 --watch src/index.ts
```

Build:

```bash
NODE_ENV=production bun build src/index.ts --target=bun --outdir=./dist --define=process.env.MODE="'production'"
```

Start:

```bash
NODE_ENV=production bun run --port=8080 src/index.ts
```

This project was created using `bun init` in bun v1.1.27. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

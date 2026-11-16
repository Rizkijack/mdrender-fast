# mdrender-fast

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/Rizkijack/mdrender-fast/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/Rizkijack/mdrender-fast/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

A fast, dependency-free batch Markdown-to-HTML runner that renders byte-exact `marked` 18.1.3 output from `cases.json`.

## Run it

```sh
MAKEFUN_INPUT_DIR=./scratch/in MAKEFUN_OUTPUT_DIR=./scratch/out node main.ts
```

Input `cases.json` is an array of `{ "markdown": "..." }`; output `html.json` is the matching array of rendered HTML strings.

---

Built for the [make.fun bounty board](https://make.fun).

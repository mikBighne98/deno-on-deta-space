## Some _almost_ working 🦕 Deno apps on [Deta Space](https://deta.space) 🚀.

### ℹ️ These are just some tests for Deno apps on Deta Space.

`src/deno-crud` works locally but not on Deta Space. Cause it's using npm package of Deta SDK with [npm_specifiers](https://deno.land/manual@v1.29.4/node/npm_specifiers). That needs some more tweaking to be able to run on Deta Space.

### Prerequisites ??

Have [Deno](https://deno.land) installed on your system, `cd` into one of the directories in `src/` and then run `deno task dev`. That's all 😏.

⚠️ Deploying multiple micros using custom engines doesn't seem to be working right now. So don't push multiple micros at once by uncommenting all the micro configs at once.

import { Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts';
import { Status } from 'https://deno.land/std@0.152.0/http/http_status.ts';
import { Deta } from 'npm:deta';

const deta = Deta();
const db = deta.Base('deno-deta-base');

const router = new Router();

router
  .put('/', async (ctx) => {
    const data = await ctx.request.body().value;
    if (data) {
      ctx.response.body = await db.put(data);
    } else {
      ctx.response.status = Status.BadRequest;
    }
  })

  .get('/', async (ctx) => {
    const key = ctx.request.url.searchParams.get('key');
    if (key) {
      ctx.response.body = await db.get(key);
    } else {
      ctx.response.status = Status.BadRequest;
    }
  })

  .patch('/', async (ctx) => {
    const { data, key } = await ctx.request.body().value;
    if (data && key) {
      ctx.response.body = await db.update(data, key);
    } else {
      ctx.response.status = Status.BadRequest;
    }
  })

  .delete('/', async (ctx) => {
    const key = ctx.request.url.searchParams.get('key');
    if (key) {
      ctx.response.body = await db.delete(key);
    } else {
      ctx.response.status = Status.BadRequest;
    }
  });

export default router;

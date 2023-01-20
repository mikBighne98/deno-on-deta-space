import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts';
import baseRouter from './routes/base.ts';

const env = Deno.env.toObject();
const PORT = +env.PORT || 8000;

const app = new Application();
const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = 'Hello from Deta Space 🚀';
});

app.use(router.routes());
app.use(baseRouter.prefix('/base').routes());
app.use(router.allowedMethods());
app.addEventListener('listen', () => {
  console.log(
    `Denp app is running on port %c${PORT}`,
    'color:green; font-weight: bold'
  );
});

await app.listen({ port: PORT });

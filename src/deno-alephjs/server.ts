import { serve } from 'aleph/react-server';
import routes from '~/routes/_export.ts';
import unocss from '~/unocss.config.ts';

const env = Deno.env.toObject();

serve({
  port: +env.PORT || 3000,
  router: { routes },
  ssr: true,
  unocss,
});

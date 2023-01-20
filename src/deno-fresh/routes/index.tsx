import { Head } from '$fresh/runtime.ts';
import Todo from '../islands/Todo.tsx';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todos</title>
        <meta name="description" content="Fresh ToDo List" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <link rel="stylesheet" href="app.css" />
      </Head>
      <main class="p-4 pt-24 mx-auto max-w-screen-md flex flex-col justify-center items-center">
        <a
          href="https://fresh.deno.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
        <a
          class="absolute top-10 right-20 text-gray-700 hover:text-black fill-current"
          href="https://deta.space"
          target="_blank"
          rel="noreferrer noopener"
          data-hotkey="g d"
          aria-label="Homepage "
          data-turbo="false"
          data-analytics-event='{"category":"Header","action":"go to dashboard","label":"icon:logo"}'
        >
          <svg
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="2.5 2.5 27 27"
          >
            <path
              cx="170.08"
              cy="170.08"
              r="141.73"
              fill="#ef39a8"
              vector-effect="non-scaling-stroke"
              d="M29.333 16A13.333 13.333 0 0 1 16 29.333A13.333 13.333 0 0 1 2.667 16A13.333 13.333 0 0 1 29.333 16z"
            />
            <path
              cx="170.08"
              cy="170.08"
              r="113.39"
              fill="#bd399c"
              vector-effect="non-scaling-stroke"
              d="M26.667 16A10.667 10.667 0 0 1 16 26.667A10.667 10.667 0 0 1 5.333 16A10.667 10.667 0 0 1 26.667 16z"
            />
            <path
              cx="170.08"
              cy="170.08"
              r="85.039"
              fill="#93388e"
              vector-effect="non-scaling-stroke"
              d="M24 16A8 8 0 0 1 16 24A8 8 0 0 1 8 16A8 8 0 0 1 24 16z"
            />
            <path
              cx="170.08"
              cy="170.08"
              r="56.693"
              fill="#563379"
              vector-effect="non-scaling-stroke"
              d="M21.333 16A5.333 5.333 0 0 1 16 21.333A5.333 5.333 0 0 1 10.667 16A5.333 5.333 0 0 1 21.333 16z"
            />
          </svg>
        </a>
        <a
          class="absolute top-10 right-10 text-gray-700 hover:text-black fill-current"
          href="https://github.com/mikBighne98/deno-on-deta-space"
          target="_blank"
          rel="noreferrer noopener"
          data-hotkey="g d"
          aria-label="Homepage "
          data-turbo="false"
          data-analytics-event='{"category":"Header","action":"go to dashboard","label":"icon:logo"}'
        >
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
            class=""
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        <h1 class="text-3xl p-2 font-bold text-gray-50">
          A simple Deno app using Fresh deployed on Deta
        </h1>
        <Todo />
      </main>
    </div>
  );
}

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Code } from '@/ui/code'
import { Counter } from './counter'

const counterJsx = `
\`\`\`js showLineNumbers title="counter.jsx"
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}
\`\`\`
`

const counterJsx_outdated = `
\`\`\`js {2,5-6} showLineNumbers title="counter.jsx" /count/#v
function Counter() {
  const [count, setCount] = useState(0); // still the old value
  return (
    <div>
      <p>You clicked {count} times.</p> {/* still the old value */}
      <button onClick={() => setCount(count + 1)}> {/* still the old value */}
        +1
      </button>
    </div>
  );
}
\`\`\`
`

const counterJsx_updating = `
\`\`\`js {2,5-6} showLineNumbers title="counter.jsx" /count/#s
function Counter() {
  const [count, setCount] = useState(0); // useState gets the internal value
  return (
    <div>
      <p>You clicked {count} times.</p> {/* now displaying the new value */}
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}
\`\`\`
`

export default function Home() {
  return (
    <main>
      <Counter />
      <div className="prose prose-invert prose-pre:mt-0">
        <div className="my-7"></div>
        {/* <h2 className="mb-1 text-2xl font-medium leading-9">
          Behind the scenes
        </h2>
        <p className="my-3">
          Look at the code below; it’s the above counter component which shows
          the current count and a button to increase that count by 1.
        </p> */}
        {/* @ts-ignore Async Server Component */}
        {/*  <Code code={counterJsx} /> */}
        {/* <div className="mb-10"></div>
        <p className="my-3">
          When you click the button, React is told to update the state. But
          nothing happens yet. React is lazy; it waits until the Browser is no
          longer busy and then re-renders the counter component. Until then, the
          counter component shows the old value.
        </p> */}
        {/* @ts-ignore Async Server Component */}
        {/* <Code code={counterJsx_outdated} /> */}
        {/* <p className="my-3">
          What does re-rendering mean? It means that React{' '}
          <span className="italic">calls the function component again</span>.
          The entire code inside the <code>counter.jsx</code> function is
          executed again, from line 1 until line 11. But this time, useState
          gets the internal value of the state variable.
        </p> */}
        {/* @ts-ignore Async Server Component */}
        {/* <Code code={counterJsx_updating} /> */}
        {/* <p className="my-3">
          If the original value was 0 and you clicked the button once, the new
          value is 1. useState in React knows that current value and when the
          component is re-rendered, it gets that new value and plugs it in
          everywhere it’s used inside the component. This is how useState works
          in React.
        </p>
        <a
          className="inline-flex items-start"
          href="https://react.dev/reference/react/useState"
          target="_blank"
          rel="noopener noreferrer"
        >
          For more technical info, visit the React docs.
          <ArrowTopRightOnSquareIcon className="block w-4" />
        </a> */}
      </div>
    </main>
  )
}

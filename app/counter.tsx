'use client'

import { useState, useReducer, type Reducer } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Boundary } from '@/ui/boundary'
import Button from '@/ui/button'
import { CodeDisplay } from './code-display'
import { Function } from './function'
import { SkeletonGetSum } from '@/ui/skeleton-code'

function getSum(a: number, b: number) {
  return a + b
}

function getProduct(a: number, b: number) {
  return a * b
}

const fn_getSum = `
function getSum(a, b) {
  return a + b;
}
`.trim()

const fn_getProduct = `
function getProduct(a, b) {
  return a * b;
}
`.trim()

const fn_higherOrder = `
function getResult(a, b, callback) {
  return callback(a, b);
}
`.trim()

const fn_callWithSum = `
getResult(4, 5, getSum);
`.trim()

const fn_callWithProduct = `
getResult(4, 5, getProduct);
`.trim()

type State = {
  count: number
  disabled: boolean
  message: string
  reactMessage: string
  color: 'violet' | 'default' | 'pink' | 'blue' | 'cyan' | 'orange' | undefined
  label: string
  animateRerendering: boolean
  callback: ((a: number, b: number) => number) | undefined
  higherOrderFunctionCall: string
  result: number | undefined
}

type Action = {
  type: 'addition' | 'product' | 'result'
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'addition':
      return {
        ...state,
        callback: getSum,
        higherOrderFunctionCall: fn_callWithSum,
        result: undefined,
        message: 'The count did not increase, yet.',
        color: 'pink',
        label: 'Higher order function (executing addition)',
        animateRerendering: false,
        disabled: false,
        reactMessage: '',
      }
    case 'product':
      return {
        ...state,
        callback: getProduct,
        higherOrderFunctionCall: fn_callWithProduct,
        result: undefined,
        message: 'Re-rendered successfully, showing the current count now.',
        color: 'violet',
        label: 'Higher order function (executing multiplication)',
        animateRerendering: false,
        disabled: false,
        reactMessage: '',
      }
    case 'result':
      return {
        ...state,
        result: state.callback ? state.callback(4, 5) : undefined,
        message: 'Re-rendered successfully, showing the current count now.',
        color: 'violet',
        label: 'Higher order function (executing multiplication)',
        animateRerendering: false,
        disabled: true,
        reactMessage: '',
      }
    default:
      throw new Error('Unknown action type.')
  }
}

const initialState: State = {
  count: 0,
  disabled: true,
  message: 'Click the button to execute the higher order function.',
  reactMessage: '',
  color: 'violet',
  label: 'function getsum',
  animateRerendering: false,
  callback: undefined,
  higherOrderFunctionCall: '',
  result: undefined,
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [componentToShow, setComponentToShow] = useState<
    'codeDisplay' | 'buttonDisplay'
  >('buttonDisplay')

  const handleAnimationComplete = () => {
    setComponentToShow('buttonDisplay')
  }

  const flipVariants = {
    initial: {
      rotateY: 90,
      opacity: 0,
    },
    animate: {
      rotateY: 0,
      opacity: 1,
    },
    exit: {
      rotateY: -90,
      opacity: 0,
    },
  }

  const codeSnippet_0 = `
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
}`.trim()

  const codeSnippet_1 = `
function Counter() {
  const [count, setCount] = useState(0); // count = 
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}`.trim()

  const codeSnippet_2 = `
function Counter() {
  const [count, setCount] = useState(0); // count = 
  return (
    <div>
      <p>You clicked {count} times.</p> {/* count =  */}
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}`.trim()

  return (
    <>
      <div className="flex justify-between gap-x-4">
        <div className="mx-auto w-full">
          <Boundary
            labels={['Function getSum']}
            color={'orange'}
            size="small"
            animateRerendering={false}
          >
            <motion.div
              key="codeDisplay"
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Function
                code={fn_getSum}
                Fallback={() => <SkeletonGetSum isLoading />}
              />
            </motion.div>
          </Boundary>
        </div>
        <div className="mx-auto w-full">
          <Boundary
            labels={['Function getProduct']}
            color={'orange'}
            size="small"
            animateRerendering={false}
          >
            <motion.div
              key="codeDisplay"
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Function code={fn_getProduct} Fallback={SkeletonGetSum} />
            </motion.div>
          </Boundary>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="mx-auto">
          <Button
            variant="default"
            onClick={() => {
              dispatch({ type: 'addition' })
              /* setComponentToShow('codeDisplay') */
            }}
          >
            Use addition
          </Button>
        </div>
        <div className="mx-auto">
          <Button
            variant="default"
            onClick={() => {
              dispatch({ type: 'product' })
              /* setComponentToShow('codeDisplay') */
            }}
          >
            Use multiplication
          </Button>
        </div>
      </div>
      <div className="mb-7 mt-3">
        <div className="mb-12 mt-2 h-3 text-sm font-normal italic sm:mb-0 sm:h-4">
          {state.reactMessage}
        </div>
      </div>
      <Boundary
        labels={['higher order function']}
        color="blue"
        size="small"
        /* key={state.count} */
        animateRerendering={state.animateRerendering}
      >
        <div>
          <Function code={fn_higherOrder} />
        </div>
      </Boundary>
      {componentToShow === 'codeDisplay' && (
        <motion.div
          key="codeDisplay"
          variants={flipVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <CodeDisplay
            code={[
              codeSnippet_0,
              codeSnippet_1,
              codeSnippet_1,
              codeSnippet_1,
              codeSnippet_2,
              codeSnippet_2,
              codeSnippet_2,
              codeSnippet_2,
              codeSnippet_2,
              codeSnippet_2,
              codeSnippet_2,
            ]}
            onAnimationComplete={handleAnimationComplete}
          />
        </motion.div>
      )}

      {componentToShow === 'buttonDisplay' && (
        <motion.div
          key="buttonDisplay"
          variants={flipVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="flex flex-col items-center justify-center gap-y-6 p-4 text-white sm:p-24">
            <div>
              {state.callback ? (
                <>
                  <span className="font-mono font-bold">
                    `{state.callback.name}`
                  </span>{' '}
                  selected.
                </>
              ) : (
                <>
                  Select a
                  <span
                    className={clsx('mx-1 rounded-md px-3 py-2 font-mono', {
                      'animate-[highlight_1s_ease-in-out_1]': state.disabled,
                      'bg-slate-700': state.disabled,
                      'bg-slate-800': !state.disabled,
                    })}
                  >
                    function
                  </span>
                  to call back.
                </>
              )}
            </div>
            {state.callback ? (
              <Function code={state.higherOrderFunctionCall} />
            ) : (
              'no function selected'
            )}
            <Button
              focus={!state.disabled}
              onClick={() => {
                dispatch({ type: 'result' })
              }}
              /* disabled={!state.disabled} */
            >
              {state.result
                ? 'result = ' + state.result + '👨‍🔬'
                : 'Call me, maybe? 📞'}
            </Button>
          </div>
        </motion.div>
      )}
    </>
  )
}

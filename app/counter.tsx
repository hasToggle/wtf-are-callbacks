'use client'

import { useState, useReducer, type Reducer } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Boundary } from '@/ui/boundary'
import Button from '@/ui/button'
import { CodeDisplay } from './code-display'

type State = {
  count: number
  internalCount: number
  disabled: boolean
  message: string
  reactMessage: string
  color: 'violet' | 'default' | 'pink' | 'blue' | 'cyan' | 'orange' | undefined
  label: string
  animateRerendering: boolean
}

type Action = {
  type: 'updating' | 'updated'
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'updating':
      return {
        ...state,
        internalCount: state.internalCount + 1,
        message: 'The count did not increase, yet.',
        color: 'pink',
        label: 'React (waiting to re-render)',
        disabled: false,
        reactMessage:
          'You are now React. Click the button to re-render the component.',
      }
    case 'updated':
      return {
        ...state,
        count: state.count + 1,
        message: 'Re-rendered successfully, showing the current count now.',
        color: 'violet',
        label: 'React',
        animateRerendering: true,
        disabled: true,
        reactMessage: '',
      }
    default:
      throw new Error('Unknown action type.')
  }
}

const initialState: State = {
  count: 0,
  internalCount: 0,
  disabled: true,
  message: 'Click the button to increase the count.',
  reactMessage: '',
  color: 'violet',
  label: 'React',
  animateRerendering: false,
}

const codeSnippet = `
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
  `.trim()

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [componentToShow, setComponentToShow] = useState<
    'codeDisplay' | 'buttonDisplay'
  >('buttonDisplay')

  const handleAnimationComplete = () => {
    setComponentToShow('buttonDisplay')
  }

  const containerVariants = {
    initial: {
      opacity: 0,
      scale: 0.75,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.75,
    },
  }

  return (
    <>
      <Boundary
        labels={[state.label]}
        color={state.color}
        size="small"
        animateRerendering={false}
      >
        <Boundary
          labels={['internal state management']}
          color={'default'}
          size="small"
          animateRerendering={false}
        >
          <div className="mb-7 mt-3">
            <span className="my-2 block">
              <span
                className={clsx('inline rounded-md px-3 py-1', {
                  'bg-hastoggle-violet': state.disabled === false,
                })}
              >
                count: {state.internalCount}{' '}
              </span>
            </span>
            <span className="relative inline-flex">
              <Button
                focus={!state.disabled}
                variant="pink"
                onClick={() => {
                  dispatch({ type: 'updated' })
                  setComponentToShow('codeDisplay')
                }}
                disabled={state.disabled}
              >
                Render
              </Button>
            </span>
            <div className="mt-2 h-4 text-sm font-normal italic">
              {state.reactMessage}
            </div>
          </div>
          <Boundary
            labels={['Counter Component']}
            color="blue"
            size="small"
            key={state.count}
            animateRerendering={state.animateRerendering}
          >
            {componentToShow === 'codeDisplay' && (
              <motion.div
                key="codeDisplay"
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <CodeDisplay
                  code={codeSnippet}
                  onAnimationComplete={handleAnimationComplete}
                />
              </motion.div>
            )}

            {componentToShow === 'buttonDisplay' && (
              <motion.div
                key="buttonDisplay"
                variants={containerVariants}
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
                    You clicked{' '}
                    <span className="mx-1 rounded-md bg-gray-700 px-3 py-2">
                      {state.count}
                    </span>{' '}
                    {state.count === 1 ? 'time' : 'times'}.
                  </div>
                  <Button
                    onClick={() => {
                      dispatch({ type: 'updating' })
                    }}
                    disabled={!state.disabled}
                  >
                    +1
                  </Button>
                  <div className="text-base font-light italic">
                    {state.message}
                  </div>
                </div>
              </motion.div>
            )}
          </Boundary>
        </Boundary>
      </Boundary>
    </>
  )
}

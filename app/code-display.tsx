import React, { useState, useEffect } from 'react'
import { getHighlighter } from 'shiki'
import { SkeletonCode } from '@/ui/skeleton-code'

export const CodeDisplay = ({
  code,
  onAnimationComplete,
}: {
  code: string
  onAnimationComplete: () => void
}) => {
  const [highlightedCode, setHighlightedCode] = useState<string>('')
  const [currentLine, setCurrentLine] = useState<number>(0)
  const [highlighter, setHighlighter] = useState<any>(null)

  useEffect(() => {
    async function runHighlighter() {
      setHighlighter(
        await getHighlighter({
          themes: ['ayu-dark'],
          langs: ['jsx'],
        }),
      )
    }
    runHighlighter()
  }, [])

  useEffect(() => {
    if (highlighter) {
      const highlighted = highlighter.codeToHtml(code, {
        lang: 'jsx',
        theme: 'ayu-dark',
      })

      const lines = highlighted.split('\n')
      const highlightedLines = lines
        .map((line: string, index: number) => {
          if (index === currentLine) {
            return `<span class="highlighted-line">${line}</span>`
          }
          return line
        })
        .join('\n')

      setHighlightedCode(highlightedLines)
    }
  }, [highlighter, currentLine])

  useEffect(() => {
    if (highlighter) {
      let interval: NodeJS.Timeout | undefined
      const totalLines = code.split('\n').length - 1
      if (currentLine < totalLines) {
        interval = setInterval(() => {
          setCurrentLine((prevLine) => prevLine + 1)
        }, 300)
      } else {
        onAnimationComplete()
      }
      return () => clearInterval(interval)
    }
  }, [code, highlighter, currentLine, onAnimationComplete])

  if (!highlightedCode) {
    return <SkeletonCode />
  }

  return (
    <div
      className="whitespace-pre-wrap"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  )
}

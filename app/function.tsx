import React, { useState, useEffect } from 'react'
import { getHighlighter } from 'shiki'
import { SkeletonCode } from '@/ui/skeleton-code'

export const Function = ({
  code = '',
  onAnimationComplete,
  Fallback = SkeletonCode,
}: {
  code: string
  onAnimationComplete?: () => void
  Fallback?: React.FunctionComponent<{}>
}) => {
  const [highlightedCode, setHighlightedCode] = useState<string>('')

  useEffect(() => {
    async function runHighlighter() {
      const highlighter = await getHighlighter({
        themes: ['ayu-dark'],
        langs: ['javascript'],
      })

      if (highlighter) {
        const highlighted = highlighter.codeToHtml(code, {
          lang: 'javascript',
          theme: 'ayu-dark',
        })
        setHighlightedCode(highlighted)
      }
    }
    runHighlighter()
  }, [code])

  /*  useEffect(() => {
    if (highlighter) {
      const highlighted = highlighter.codeToHtml(code[currentLine], {
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
  }, [code, highlighter, currentLine]) */

  /*  useEffect(() => {
    if (highlighter) {
      let interval: NodeJS.Timeout | undefined
      const totalLines = codeline.split('\n').length - 1
      if (currentLine < totalLines) {
        interval = setInterval(() => {
          setCurrentLine((prevLine) => prevLine + 1)
        }, 300)
      } else {
        onAnimationComplete()
      }
      return () => clearInterval(interval)
    }
  }, [code, codeline, highlighter, currentLine, onAnimationComplete]) */

  if (!highlightedCode) {
    return <Fallback />
  }

  return (
    <div
      className="overflow-scroll whitespace-pre-wrap p-4 sm:overflow-hidden"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  )
}

import React, { useState, useEffect } from 'react';
import { getHighlighter } from 'shiki';

export const CodeDisplay = ({ code }: { code: string }) => {
  const [highlightedCode, setHighlightedCode] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [highlighter, setHighlighter] = useState<any>(null);

  useEffect(() => {
    async function runHighlighter() {
      setHighlighter(
        await getHighlighter({
          themes: ['nord'],
          langs: ['jsx'],
        }),
      );
    }
    runHighlighter();
  }, []);

  useEffect(() => {
    if (highlighter) {
      const highlighted = highlighter.codeToHtml(code, {
        lang: 'jsx',
        theme: 'nord',
      });

      const lines = highlighted.split('\n');
      const highlightedLines = lines
        .map((line: string, index: number) => {
          if (index === currentLine) {
            return `<span class="highlighted-line">${line}</span>`;
          }
          return line;
        })
        .join('\n');

      if (!highlightedCode.includes(highlightedLines)) {
        setHighlightedCode([...highlightedCode, highlightedLines]);
      }
    }
  }, [highlighter, currentLine]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => {
        const totalLines = code.split('\n').length - 2;
        return prevLine < totalLines ? prevLine + 1 : 0;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [code]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: highlightedCode[currentLine] }}
      style={{
        whiteSpace: 'pre-wrap',
        /* fontFamily: '"Fira Code", monospace', */
        fontSize: '16px',
      }}
    />
  );
};

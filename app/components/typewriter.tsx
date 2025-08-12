'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[]
  loop?: boolean
  cursor?: boolean
  cursorStyle?: string
  typeSpeed?: number
  deleteSpeed?: number
  delaySpeed?: number
}

export function Typewriter({
  words,
  loop = true,
  cursor = true,
  cursorStyle = '|',
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 1500
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    if (isDeleting) {
      // Deleting text
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deleteSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    } else {
      // Typing text
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, typeSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delaySpeed)
        return () => clearTimeout(timeout)
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words, typeSpeed, deleteSpeed, delaySpeed])

  return (
    <span className="inline-block">
      {currentText}
      {cursor && (
        <span className="animate-pulse text-warmGold">
          {cursorStyle}
        </span>
      )}
    </span>
  )
} 
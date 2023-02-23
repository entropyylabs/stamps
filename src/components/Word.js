import React, { useState, useEffect } from "react"
import { WordPuzzleComponent } from "../components/WordPuzzleComponent"

export const Word = () => {
  const answerWords = ["github"]

  const matrix = [
    ["P", "D", "O", "N", "A", "U", "T"],
    ["Z", "L", "U", "T", "T", "J", "L"],
    ["V", "G", "U", "P", "H", "D", "G"],
    ["L", "G", "I", "T", "L", "G", "R"],
    ["P", "X", "S", "K", "O", "Y", "U"],
  ]
  const [found, setFound] = useState([])
  const [isSelecting, setIsSelecting] = useState(false)
  const [selectedLetters, setSelectedLetters] = useState([])
  const [markedLetters, setMarkedLetters] = useState([])

  const pathNames = ["left2right", "right2left", "top2bottom", "bottom2top"]
  const [paths, setPaths] = useState(["left2right", "top2bottom"])

  useEffect(() => {
    if (isSelecting) {
    } else {
      const selectedWord = selectedLetters.map((x) => x.letter).join("")
      console.log(selectedWord)
      addToFound(selectedWord)
    }
  }, [isSelecting])

  const isInList = (searched, arr) => {
    let found = false

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      if (searched === element) {
        found = true
        break
      }
    }

    return found
  }

  const addToFound = (founded) => {
    if (isInList(founded, answerWords)) {
      if (!isInList(founded, found)) {
        setFound([...found, founded])
        console.log(founded)
      }
    }
  }

  const addOrRemovePath = (param) => {
    if (!isInList(param, paths)) {
      setPaths([...paths, param])
    } else {
      setPaths(paths.filter((element) => element !== param))
    }
  }

  useEffect(() => {}, [paths])

  useEffect(() => {}, [markedLetters])

  return (
    <div>
      <WordPuzzleComponent
        design={{
          markedBackgroundColor: "#00C3FF",
          selectedBackgroundColor: "white",
          hoveredBackgroundColor: "rgb(0, 218, 145)",
          backgroundColor: "rgb(38, 38, 38)",
          fontFamily: "monospace",
          fontWeight: "",
          fontSize: "1.5rem",
          markedForeColor: "white",
          selectedForeColor: "rgb(38, 38, 38)",
          hoveredForeColor: "white",
          foreColor: "white",
        }}
        options={{
          answerWords: answerWords,
          matrix: matrix,
          isSelecting: isSelecting,
          selectedLetters: selectedLetters,
          setSelectedLetters: setSelectedLetters,
          markedLetters: markedLetters,
          setMarkedLetters: setMarkedLetters,
          setIsSelecting: setIsSelecting,
          availablePaths: paths,
        }}
      />
    </div>
  )
}

export default Word

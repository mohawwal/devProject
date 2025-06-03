import { ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const HoverableText = ({ text, className = "" }) => {
  const getRandomHighlightedLetters = (text) => {
    const letters = text.split('').map((char, index) => ({ char, index }))
    const nonSpaceLetters = letters.filter(item => item.char !== ' ')
    
    const numToHighlight = text.length <= 8 ? 1 : 2
    const actualHighlight = Math.min(numToHighlight, nonSpaceLetters.length)
    
    const shuffled = [...nonSpaceLetters].sort(() => 0.5 - Math.random())
    const highlightedIndices = new Set(shuffled.slice(0, actualHighlight).map(item => item.index))
    
    return highlightedIndices
  }

  const highlightedIndices = getRandomHighlightedLetters(text)

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block ${highlightedIndices.has(index) ? 'text-[#aaa]' : ''}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

const DisplayHead = ({ TextA, TextB, aboutText, id }) => {
  const [scrollY, setScrollY] = useState(0)

  const widthMotionValue = useMotionValue(150)
  const smoothWidth = useSpring(widthMotionValue, {
    stiffness: 120,
    damping: 20,
    mass: 1,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const baseWidth = 150
    const maxWidth = 500
    const cycleHeight = window.innerHeight
    
    const cyclicScrollY = scrollY % cycleHeight
    
    const scrollProgress = cyclicScrollY / cycleHeight
    const additionalWidth = scrollProgress * (maxWidth - baseWidth)
    const newWidth = baseWidth + additionalWidth
    
    widthMotionValue.set(newWidth)
  }, [scrollY, widthMotionValue])

  return (
    <div id={id} className='w-full h-[90vh] pt-[12vh] overflow-hidden'>
      <div className="">
        <div className="hidden md:flex items-center gap-4">
          <h1 className="clamp-text">
            <HoverableText text={TextA} />
          </h1>
          <motion.div
            className="h-[28px] bg-[#777] rounded"
            style={{ width: smoothWidth }}
          />
          <h1 className="clamp-text">
            <HoverableText text={TextB} />
          </h1>
        </div>

        <div className="md:hidden">
          <h1 className="clamp-text">
            <HoverableText text={TextA} />
          </h1>
          <h1 className="clamp-text mt-5 flex items-center gap-4">
            <motion.div
              className="h-[20px] bg-[#777] rounded"
              style={{ width: smoothWidth }}
            />
            <HoverableText text={TextB} />
          </h1>
        </div>

        <div className="mt-5 flex md:flex-row items-start gap-[5%] flex-col">
          <h1 className="clamp-text">
            <HoverableText text="DEVELOPER" />
          </h1>
          <div className="h-[200px] flex flex-col md:w-full w-[320px] justify-between">
            <p className="clamp-small">
              {aboutText}
            </p>
            <div className="clamp-small md:flex flex-row items-center justify-between text-xs text-[#777] hidden">
              <p>Scroll Down</p>
              <motion.div
                animate={{
                  y: [5, -15, 3],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <ArrowDown size={16} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayHead
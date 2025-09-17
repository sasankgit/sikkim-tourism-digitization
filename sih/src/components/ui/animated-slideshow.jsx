"use client"

import * as React from "react"
import { motion, MotionConfig } from "framer-motion"
import { cn } from "../../lib/utils"

function splitText(text) {
  const words = text.split(" ").map((word) => word.concat(" "))
  const characters = words.map((word) => word.split("")).flat(1)

  return {
    words,
    characters,
  }
}

const HoverSliderContext = React.createContext(undefined)

function useHoverSliderContext() {
  const context = React.useContext(HoverSliderContext)
  if (context === undefined) {
    throw new Error(
      "useHoverSliderContext must be used within a HoverSliderProvider"
    )
  }
  return context
}

export const HoverSlider = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    const [activeSlide, setActiveSlide] = React.useState(0)
    const changeSlide = React.useCallback(
      (index) => setActiveSlide(index),
      [setActiveSlide]
    )
    return (
      <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
        <div className={className} ref={ref} {...props}>{children}</div>
      </HoverSliderContext.Provider>
    )
  }
)
HoverSlider.displayName = "HoverSlider"

const WordStaggerHover = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        className={cn("relative inline-block origin-bottom overflow-hidden")}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    )
  }
)
WordStaggerHover.displayName = "WordStaggerHover"

export const TextStaggerHover = React.forwardRef(
  ({ text, index, className, ...props }, ref) => {
    const { activeSlide, changeSlide } = useHoverSliderContext()
    const { characters } = splitText(text)
    const isActive = activeSlide === index
    const handleMouse = () => changeSlide(index)
    return (
      <span
        className={cn(
          "relative inline-block origin-bottom overflow-hidden",
          className
        )}
        {...props}
        ref={ref}
        onMouseEnter={handleMouse}
      >
        {characters.map((char, charIndex) => (
          <span
            key={`${char}-${charIndex}`}
            className="relative inline-block overflow-hidden"
          >
            <MotionConfig
              transition={{
                delay: charIndex * 0.025,
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.span
                className="inline-block opacity-20"
                initial={{ y: "0%" }}
                animate={isActive ? { y: "-110%" } : { y: "0%" }}
              >
                {char}
                {char === " " && charIndex < characters.length - 1 && <>&nbsp;</>}
              </motion.span>

              <motion.span
                className="absolute left-0 top-0 inline-block opacity-100"
                initial={{ y: "110%" }}
                animate={isActive ? { y: "0%" } : { y: "110%" }}
              >
                {char}
              </motion.span>
            </MotionConfig>
          </span>
        ))}
      </span>
    )
  }
)
TextStaggerHover.displayName = "TextStaggerHover"

export const clipPathVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)",
  },
}

export const HoverSliderImageWrap = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full",
          className
        )}
        {...props}
      />
    )
  }
)
HoverSliderImageWrap.displayName = "HoverSliderImageWrap"

export const HoverSliderImage = React.forwardRef(
  ({ index, imageUrl, className, ...props }, ref) => {
    const { activeSlide } = useHoverSliderContext()
    return (
      <motion.img
        src={imageUrl}
        className={cn("inline-block align-middle", className)}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
        variants={clipPathVariants}
        animate={activeSlide === index ? "visible" : "hidden"}
        ref={ref}
        {...props}
      />
    )
  }
)
HoverSliderImage.displayName = "HoverSliderImage"

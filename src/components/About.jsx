import React from 'react'
import AnimatedCard from './AnimatedCard'
import DecorationFragment from './DecorationFragment'
// import PatternBackground from './PatternBackground'

/*
Краткое описание философии и концепции Umbra
Фото галерея интерьера/команды
*/
const About = () => {
  return (
    <div className="relative flex flex-col min-h-[90vh] bg-bronze-umbra px-4 md:px-16 py-20 overflow-hidden">
      {/* Heading */}
      <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-10 tracking-wide uppercase z-10">
        About Umbra
      </h2>

      {/* Main Row */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 z-10">
        {/* Left Text */}
        <div className="flex-1 flex items-center justify-center text-center lg:text-right">
          <p className="max-w-xs text-white/90 text-xl md:text-3xl lg:text-4xl font-light">
            The contemporary spirit of an historic space.
          </p>
        </div>
        {/* Center Image & Title */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center gap-4 relative mt-20 xl:mt-40">
          {/* Styled Title - overlays image on all screens */}
          <div className="z-20 absolute -top-11 xl:-top-32 left-1/2 -translate-x-1/2 w-full pointer-events-none">
            <div className="font-serif text-[2.5rem] md:text-[4rem] lg:text-[6rem] xl:text-[7.5rem] 2xl:text-[9rem] leading-none text-white font-bold drop-shadow-lg text-center">
              <span className="block">A <span className="italic">place</span></span>
              <span className="block relative">
                of <span className="relative inline-block">culture
                  <span className="block border-b-4 border-white mt-2 lg:mt-4 w-full absolute left-0 right-0" style={{bottom: '-0.15em'}}></span>
                </span>
              </span>
            </div>
          </div>
          <AnimatedCard
            img={"/8.jpg"}
            color="#fff4e6"
            classes="w-[320px] h-[380px] sm:w-[400px] sm:h-[480px] md:w-[550px] md:h-[650px] lg:w-[700px] lg:h-[900px] xl:w-[700px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[1100px] shadow-2xl"
          />
        </div>
        {/* Right Text */}
        <div className="flex-1 flex items-center justify-center text-center lg:text-left">
          <p className="max-w-xs text-white/90 text-xl md:text-3xl lg:text-4xl font-light">
            Where attention to detail fuels an elegant and refined conviviality.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="mt-16 flex flex-col items-center z-10">
        <h3 className="text-2xl md:text-3xl text-white font-bold mb-4 tracking-wide uppercase">Our Philosophy</h3>
        <p className="max-w-2xl text-white/80 text-center text-lg md:text-xl font-light italic">
          "At Umbra, we believe that every meal is a celebration of culture, history, and artistry. Our team is dedicated to crafting experiences that linger in memory, blending tradition with innovation in every detail."
        </p>
      </div>
    </div>
  )
}

export default About
import { HoverSlider, HoverSliderImage, HoverSliderImageWrap, TextStaggerHover } from "./animated-slideshow"

const SIKKIM_SLIDES = [
  {
    id: "slide-1",
    title: "Sacred Monasteries",
    imageUrl: "/imagesforme/Rumtek Monastery.png",
  },
  {
    id: "slide-2", 
    title: "Mountain Peaks",
    imageUrl: "/imagesforme/Sunrise_over_Kangchenjunga.jpg",
  },
  {
    id: "slide-3",
    title: "Buddhist Culture",
    imageUrl: "/imagesforme/Sacred img.png",
  },
  {
    id: "slide-4",
    title: "Heritage Sites",
    imageUrl: "/imagesforme/Pemayangtse Monastery.png",
  },
  {
    id: "slide-5",
    title: "Natural Beauty",
    imageUrl: "/imagesforme/BuddhaStatue.jpg",
  },
]

export function SikkimSlideshowDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-12">
      <HoverSlider className="min-h-[80vh] place-content-center">
        <h3 className="mb-8 text-blue-600 text-sm font-medium capitalize tracking-wide text-center">
          / Discover Sikkim
        </h3>
        <div className="flex flex-wrap items-center justify-evenly gap-8 md:gap-16">
          <div className="flex flex-col space-y-4 md:space-y-6">
            {SIKKIM_SLIDES.map((slide, index) => (
              <TextStaggerHover
                key={slide.title}
                index={index}
                className="cursor-pointer text-3xl md:text-5xl font-bold uppercase tracking-tighter text-gray-800 hover:text-blue-700 transition-colors duration-300"
                text={slide.title}
              />
            ))}
          </div>
          <HoverSliderImageWrap className="w-full max-w-md md:max-w-lg">
            {SIKKIM_SLIDES.map((slide, index) => (
              <div key={slide.id} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <HoverSliderImage
                  index={index}
                  imageUrl={slide.imageUrl}
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="size-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </HoverSliderImageWrap>
        </div>
      </HoverSlider>
    </div>
  )
}

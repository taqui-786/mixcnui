import {
    Carousel,
    CarouselIndicator,
    CarouselMainContainer,
    CarouselNext,
    CarouselPrevious,
    CarouselThumbsContainer,
    SliderMainItem,
    SliderThumbItem,
  } from "@/components/uiComponents/MultiCarousel";
  import AutoScroll from "embla-carousel-auto-scroll";
  
  export const CarouselExample = () => {
    return (
      <Carousel orientation="vertical" className="flex items-center gap-2 w-3/4">
        <div className="relative basis-3/4 ">
          <CarouselMainContainer className="h-60">
            {Array.from({ length: 10 }).map((_, index) => (
              <SliderMainItem
                key={index}
                className="border border-muted flex items-center justify-center h-52 rounded-md"
              >
                Slide {index + 1}
              </SliderMainItem>
            ))}
          </CarouselMainContainer>
        </div>
        <CarouselThumbsContainer className="h-60 basis-1/4">
          {Array.from({ length: 10 }).map((_, index) => (
            <SliderThumbItem
              key={index}
              index={index}
              className="rounded-md bg-transparent"
            >
              <span className="border border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background">
                Slide {index + 1}
              </span>
            </SliderThumbItem>
          ))}
        </CarouselThumbsContainer>
      </Carousel>
    );
  };
  
export const CarouselIndicatorExample = () => {
  return (
    <Carousel className="w-3/4">
      <CarouselNext />
      <CarouselPrevious />
      <div className="relative ">
        <CarouselMainContainer className="h-60">
          {Array.from({ length: 5 }).map((_, index) => (
            <SliderMainItem key={index} className="bg-transparent">
              <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                Slide {index + 1}
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <CarouselThumbsContainer className="gap-x-1 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </div>
    </Carousel>
  );
};
  

export const CarouselOrientation = () => {
  return (
    <Carousel className="w-3/4">
      <CarouselNext className="top-1/3 -translate-y-1/3" />
      <CarouselPrevious className="top-1/3 -translate-y-1/3" />
      <CarouselMainContainer className="h-60">
        {Array.from({ length: 5 }).map((_, index) => (
          <SliderMainItem key={index} className="bg-transparent">
            <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
              Slide {index + 1}
            </div>
          </SliderMainItem>
        ))}
      </CarouselMainContainer>
      <CarouselThumbsContainer>
        {Array.from({ length: 5 }).map((_, index) => (
          <SliderThumbItem key={index} index={index} className="bg-transparent">
            <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
              Slide {index + 1}
            </div>{" "}
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export const CarouselOrientationWithPlugin = () => {
  return (
    <Carousel
    className="w-3/4"
      plugins={[
        AutoScroll({
          speed: 1,
        }),
      ]}
      carouselOptions={{
        loop: true,
      }}
    >
      <CarouselMainContainer className="h-60">
        {Array.from({ length: 5 }).map((_, index) => (
          <SliderMainItem key={index} className="bg-transparent">
            <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
              Slide {index + 1}
            </div>
          </SliderMainItem>
        ))}
      </CarouselMainContainer>
    </Carousel>
  );
};
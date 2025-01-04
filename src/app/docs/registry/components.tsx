"use client";
import React from "react";
import HackerButton from "@/components/uiComponents/HackerButton";
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
  CarouselIndicator,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
} from "@/components/uiComponents/MultiCarousel";
import AutoScroll from "embla-carousel-auto-scroll";

export type ComponentType = {
  name: string;
  installName: string;
  component: React.ComponentType<any>;
  code: string;
  description: string;
  sourcePath: string;
  rawCode?: Promise<string>;
  props?: {
    name: string;
    type: string;
    default?: string;
    description: string;
    required?: boolean;
  }[];
  examples?: {
    name: string;
    code: string;
    component: React.ReactNode;
  }[];
};

export const components: Record<string, ComponentType> = {
  hackerbutton: {
    name: "HackerButton",
    component: HackerButton,
    installName: "hackerbutton",
    description: "A button that randomizes text on hover with a hacker effect.",
    sourcePath: "uiComponents/HackerButton.tsx",
    code: `import HackerButton from "@/components/customComponents/HackerButton";

<HackerButton text="Hover Me" />`,
    props: [
      {
        name: "text",
        type: "string",
        description: "The text to display in the button",
        required: true,
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes",
        required: false,
      },
    ],
    examples: [
      {
        name: "Basic Usage",
        component: <HackerButton text="Hover Me" />,
        code: '<HackerButton text="Hover Me" />',
      },
      {
        name: "Custom Style",
        component: (
          <HackerButton
            text="Custom Style"
            className="bg-purple-500 hover:bg-purple-600"
          />
        ),
        code: `<HackerButton 
  text="Custom Style" 
  className="bg-purple-500 hover:bg-purple-600" 
/>`,
      },
    ],
  },
  MultiCarousel: {
    name: "MultiCarousel",
    component: () => (
      <Carousel orientation="vertical" className="flex items-center gap-2">
        <div className="relative basis-3/4">
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
    ),
    installName: "multicarousel",
    description:
      "A carousel component that supports all embla carousel features.",
    sourcePath: "uiComponents/MultiCarousel.tsx",
    code: `import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/uiComponents/MultiCarousel";

export default function Example() {
  return (
    <Carousel orientation="vertical" className="flex items-center gap-2">
      <div className="relative basis-3/4">
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
}`,
    props: [
      {
        name: "carouselOptions",
        type: "EmblaCarouselOptions",
        description: "Options for configuring the carousel behavior",
        required: false,
      },
      {
        name: "orientation",
        type: "horizontal | vertical",
        default: "horizontal",
        description: "The orientation of the carousel",
        required: false,
      },
    ],
    examples: [
      {
        name: "With Indicators",
        component: (
          <Carousel>
            <CarouselNext />
            <CarouselPrevious />
            <div className="relative">
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
                <CarouselThumbsContainer className="gap-x-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselIndicator key={index} index={index} />
                  ))}
                </CarouselThumbsContainer>
              </div>
            </div>
          </Carousel>
        ),
        code: `import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "@/components/uiComponents/MultiCarousel";

export default function Example() {
  return (
    <Carousel>
      <CarouselNext />
      <CarouselPrevious />
      <div className="relative">
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
          <CarouselThumbsContainer className="gap-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </div>
    </Carousel>
  );
}`,
      },
      {
        name: "With Auto-scroll Plugin",
        component: (
          <Carousel
            plugins={[
              AutoScroll({
                playOnInit: true,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                speed: 1,
                // delay: 0
              }),
            ]}
            carouselOptions={{
              loop: true,
              align: "start",
              containScroll: "trimSnaps",
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
        ),
        code: `import {
  Carousel,
  CarouselMainContainer,
  SliderMainItem,
} from "@/components/uiComponents/MultiCarousel";
import AutoScroll from "embla-carousel-auto-scroll";

export default function Example() {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          playOnInit: true,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          speed: 1,
          delay: 0
        })
      ]}
      carouselOptions={{
        loop: true,
        align: 'start',
        containScroll: 'trimSnaps'
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
}`,
      },
      {
        name: "Orientation",
        component: (
          <Carousel>
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
                <SliderThumbItem
                  key={index}
                  index={index}
                  className="bg-transparent"
                >
                  <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                    Slide {index + 1}
                  </div>
                </SliderThumbItem>
              ))}
            </CarouselThumbsContainer>
          </Carousel>
        ),
        code: `import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  SliderMainItem,
  CarouselThumbsContainer,
  SliderThumbItem,
} from "@/components/uiComponents/MultiCarousel";

export default function Example() {
  return (
    <Carousel>
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
            </div>
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
}`,
      },
    ],
  },
};

async function fetchComponentSource(path: string): Promise<string> {
  try {
    const response = await fetch(
      `/api/component-source?path=${encodeURIComponent(path)}`
    );
    const data = await response.json();
    return data.source || "// Error loading component source";
  } catch (error) {
    console.error("Error fetching component source:", error);
    return "// Error loading component source";
  }
}

Object.keys(components).forEach((key) => {
  const component = components[key];
  Object.defineProperty(component, "rawCode", {
    get: async () => await fetchComponentSource(component.sourcePath),
  });
});

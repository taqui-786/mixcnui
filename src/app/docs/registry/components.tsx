"use client"
import React from "react"
import HackerButton from "@/components/uiComponents/HackerButton"
import { FloatingNotificationDemo } from "@/components/uiComponents/FloatingNotification"
import { LoadingSpinnerDemo } from "@/components/uiComponents/LoadingSpinner"
import LoadingSpinner from "@/components/uiComponents/LoadingSpinner"
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
} from "@/components/uiComponents/MultiCarousel"
import AutoScroll from "embla-carousel-auto-scroll"

export type ComponentType = {
    name: string
    installName: string
    component: React.ComponentType<any>
    code: string
    description: string
    sourcePath: string
    rawCode?: Promise<string>
    props?: {
        name: string
        type: string
        default?: string
        description: string
        required?: boolean
    }[]
    examples?: {
        name: string
        code: string
        component: React.ReactNode
    }[]
}

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
                component: <HackerButton text="Custom Style" className="bg-purple-500 hover:bg-purple-600" />,
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
                            <SliderMainItem key={index} className="border border-muted flex items-center justify-center h-52 rounded-md">
                                Slide {index + 1}
                            </SliderMainItem>
                        ))}
                    </CarouselMainContainer>
                </div>
                <CarouselThumbsContainer className="h-60 basis-1/4">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <SliderThumbItem key={index} index={index} className="rounded-md bg-transparent">
                            <span className="border border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background">
                                Slide {index + 1}
                            </span>
                        </SliderThumbItem>
                    ))}
                </CarouselThumbsContainer>
            </Carousel>
        ),
        installName: "multicarousel",
        description: "A carousel component that supports all embla carousel features.",
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
                        }}>
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
                                <SliderThumbItem key={index} index={index} className="bg-transparent">
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
    floatingnotification: {
        name: "FloatingNotification",
        component: FloatingNotificationDemo,
        installName: "floatingnotification",
        description:
            "A fully animated notification component that slides in from various positions with auto-close functionality and multiple types (success, error, warning, info).",
        sourcePath: "uiComponents/FloatingNotification.tsx",
        code: `import FloatingNotification from "@/components/uiComponents/FloatingNotification";

const [isVisible, setIsVisible] = useState(true);

<FloatingNotification 
  message="This is a notification message"
  type="success"
  position="top-right"
  autoClose={true}
  duration={3000}
/>`,
        props: [
            {
                name: "message",
                type: "string",
                default: "This is a notification message",
                description: "The notification message to display",
                required: false,
            },
            {
                name: "type",
                type: "'success' | 'error' | 'warning' | 'info'",
                default: "info",
                description: "The type of notification (affects color and icon)",
                required: false,
            },
            {
                name: "duration",
                type: "number",
                default: "3000",
                description: "Duration in milliseconds before auto-close",
                required: false,
            },
            {
                name: "position",
                type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'",
                default: "top-right",
                description: "Position of the notification on screen",
                required: false,
            },
            {
                name: "onClose",
                type: "() => void",
                description: "Callback function called when notification closes",
                required: false,
            },
            {
                name: "autoClose",
                type: "boolean",
                default: "true",
                description: "Whether the notification should auto-close",
                required: false,
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
                name: "Interactive Demo",
                component: <FloatingNotificationDemo />,
                code: `import { useState } from "react";
import FloatingNotification from "@/components/uiComponents/FloatingNotification";

export default function Demo() {
  const [notifications, setNotifications] = useState([]);
  
  const addNotification = (type, position) => {
    const newNotification = {
      id: Date.now(),
      type,
      message: "Operation completed!",
      position,
    };
    setNotifications(prev => [...prev, newNotification]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 3000);
  };

  return (
    <div>
      <button onClick={() => addNotification("success", "top-right")}>
        Show Success
      </button>
      {notifications.map(notification => (
        <FloatingNotification key={notification.id} {...notification} />
      ))}
    </div>
  );
}`,
            },
        ],
    },
    loadingspinner: {
        name: "LoadingSpinner",
        component: LoadingSpinnerDemo,
        installName: "loadingspinner",
        description:
            "A collection of fully animated loading spinner components with multiple variants (dots, circle, pulse, bounce, bars), customizable sizes, and colors.",
        sourcePath: "uiComponents/LoadingSpinner.tsx",
        code: `import LoadingSpinner from "@/components/uiComponents/LoadingSpinner";

<LoadingSpinner variant="circle" size="md" color="currentColor" />`,
        props: [
            {
                name: "variant",
                type: "'dots' | 'circle' | 'pulse' | 'bounce' | 'bars'",
                default: "circle",
                description: "The variant/style of the loading spinner",
                required: false,
            },
            {
                name: "size",
                type: "'sm' | 'md' | 'lg'",
                default: "md",
                description: "The size of the spinner",
                required: false,
            },
            {
                name: "color",
                type: "string",
                default: "currentColor",
                description: "The color of the spinner (accepts CSS color values)",
                required: false,
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
                name: "All Variants",
                component: <LoadingSpinnerDemo />,
                code: `import LoadingSpinner from "@/components/uiComponents/LoadingSpinner";

export default function Example() {
  return (
    <div className="flex gap-8">
      <LoadingSpinner variant="circle" />
      <LoadingSpinner variant="dots" />
      <LoadingSpinner variant="pulse" />
      <LoadingSpinner variant="bounce" />
      <LoadingSpinner variant="bars" />
    </div>
  );
}`,
            },
            {
                name: "Different Sizes",
                component: (
                    <div className="flex gap-8 items-center">
                        <LoadingSpinner size="sm" />
                        <LoadingSpinner size="md" />
                        <LoadingSpinner size="lg" />
                    </div>
                ),
                code: `<div className="flex gap-8 items-center">
  <LoadingSpinner size="sm" />
  <LoadingSpinner size="md" />
  <LoadingSpinner size="lg" />
</div>`,
            },
            {
                name: "Custom Colors",
                component: (
                    <div className="flex gap-8 items-center">
                        <LoadingSpinner color="#3b82f6" />
                        <LoadingSpinner color="#8b5cf6" />
                        <LoadingSpinner color="#ec4899" />
                    </div>
                ),
                code: `<div className="flex gap-8 items-center">
  <LoadingSpinner color="#3b82f6" />
  <LoadingSpinner color="#8b5cf6" />
  <LoadingSpinner color="#ec4899" />
</div>`,
            },
        ],
    },
}

async function fetchComponentSource(path: string): Promise<string> {
    try {
        const response = await fetch(`/api/component-source?path=${encodeURIComponent(path)}`)
        const data = await response.json()
        return data.source || "// Error loading component source"
    } catch (error) {
        console.error("Error fetching component source:", error)
        return "// Error loading component source"
    }
}

Object.keys(components).forEach((key) => {
    const component = components[key]
    Object.defineProperty(component, "rawCode", {
        get: async () => await fetchComponentSource(component.sourcePath),
    })
})

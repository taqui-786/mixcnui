import React from "react";

function TextRotator() {
  return (
    <span className="text-primary ml-2 inline-flex  flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">

    <ul className="block text-left  text-4xl sm:text-[48px] leading-tight [&_li]:block animate-text-slide">
      <li>This Component</li>
      <li>is really</li>
      <li>awesome</li>
      <li>You must</li>
      <li>Try it Once</li>
      <li>Thankyou...</li>
    </ul>
    </span>
  );
}

export default TextRotator;
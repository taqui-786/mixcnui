"use client";

import React from "react";
import { motion } from "framer-motion";

type SpinnerVariant = "dots" | "circle" | "pulse" | "bounce" | "bars";

interface LoadingSpinnerProps {
  variant?: SpinnerVariant;
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  variant = "circle",
  size = "md",
  color = "currentColor",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const dotSizes = {
    sm: 4,
    md: 8,
    lg: 12,
  };

  const barHeights = {
    sm: "h-4",
    md: "h-8",
    lg: "h-12",
  };

  const renderDotsSpinner = () => {
    const dotSize = dotSizes[size];
    return (
      <div className={`flex gap-2 ${className}`}>
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="rounded-full"
            style={{
              backgroundColor: color,
              width: dotSize,
              height: dotSize,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  const renderCircleSpinner = () => {
    return (
      <motion.div
        className={`${sizeClasses[size]} ${className}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 0.8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    );
  };

  const renderPulseSpinner = () => {
    return (
      <motion.div
        className={`${sizeClasses[size]} rounded-full ${className}`}
        style={{ backgroundColor: color }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  };

  const renderBounceSpinner = () => {
    return (
      <div className="flex items-end gap-2">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`w-2 ${barHeights[size]} rounded-full ${className}`}
            style={{ backgroundColor: color }}
            animate={{
              scaleY: [1, 0.4, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  const renderBarsSpinner = () => {
    return (
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className={`w-1 ${barHeights[size]} rounded-full ${className}`}
            style={{ backgroundColor: color }}
            animate={{
              scaleY: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  const renderSpinner = () => {
    switch (variant) {
      case "dots":
        return renderDotsSpinner();
      case "circle":
        return renderCircleSpinner();
      case "pulse":
        return renderPulseSpinner();
      case "bounce":
        return renderBounceSpinner();
      case "bars":
        return renderBarsSpinner();
      default:
        return renderCircleSpinner();
    }
  };

  return <div className="inline-flex items-center justify-center">{renderSpinner()}</div>;
};

// Demo Component
export const LoadingSpinnerDemo: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Variants</h3>
        <div className="flex flex-wrap gap-8 items-center">
          <div className="text-center">
            <LoadingSpinner variant="circle" />
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Circle</p>
          </div>
          <div className="text-center">
            <LoadingSpinner variant="dots" />
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Dots</p>
          </div>
          <div className="text-center">
            <LoadingSpinner variant="pulse" />
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Pulse</p>
          </div>
          <div className="text-center">
            <LoadingSpinner variant="bounce" />
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Bounce</p>
          </div>
          <div className="text-center">
            <LoadingSpinner variant="bars" />
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Bars</p>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Sizes</h3>
        <div className="flex flex-wrap gap-8 items-center">
          <div className="text-center">
            <LoadingSpinner size="sm" />
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Small</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="md" />
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Medium</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Large</p>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Colors</h3>
        <div className="flex flex-wrap gap-8 items-center">
          <LoadingSpinner color="#3b82f6" />
          <LoadingSpinner color="#8b5cf6" />
          <LoadingSpinner color="#ec4899" />
          <LoadingSpinner color="#10b981" />
          <LoadingSpinner color="#f59e0b" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

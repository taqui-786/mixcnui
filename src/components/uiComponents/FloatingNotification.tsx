"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NotificationType = "success" | "error" | "warning" | "info";

interface FloatingNotificationProps {
  message?: string;
  type?: NotificationType;
  duration?: number;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  onClose?: () => void;
  autoClose?: boolean;
  className?: string;
}

const FloatingNotification: React.FC<FloatingNotificationProps> = ({
  message = "This is a notification message",
  type = "info",
  duration = 3000,
  position = "top-right",
  onClose,
  autoClose = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green-500 dark:bg-green-600",
          icon: "✓",
          border: "border-green-600 dark:border-green-700",
        };
      case "error":
        return {
          bg: "bg-red-500 dark:bg-red-600",
          icon: "✕",
          border: "border-red-600 dark:border-red-700",
        };
      case "warning":
        return {
          bg: "bg-yellow-500 dark:bg-yellow-600",
          icon: "⚠",
          border: "border-yellow-600 dark:border-yellow-700",
        };
      case "info":
      default:
        return {
          bg: "bg-blue-500 dark:bg-blue-600",
          icon: "ℹ",
          border: "border-blue-600 dark:border-blue-700",
        };
    }
  };

  const getPositionStyles = () => {
    switch (position) {
      case "top-left":
        return "top-4 left-4";
      case "top-right":
        return "top-4 right-4";
      case "bottom-left":
        return "bottom-4 left-4";
      case "bottom-right":
        return "bottom-4 right-4";
      case "top-center":
        return "top-4 left-1/2 -translate-x-1/2";
      case "bottom-center":
        return "bottom-4 left-1/2 -translate-x-1/2";
      default:
        return "top-4 right-4";
    }
  };

  const getAnimationVariants = () => {
    const isTop = position.includes("top");
    const isLeft = position.includes("left");
    const isCenter = position.includes("center");

    if (isCenter) {
      return {
        initial: { opacity: 0, y: isTop ? -50 : 50, x: "-50%" },
        animate: { opacity: 1, y: 0, x: "-50%" },
        exit: { opacity: 0, y: isTop ? -50 : 50, x: "-50%" },
      };
    }

    return {
      initial: {
        opacity: 0,
        x: isLeft ? -100 : 100,
        y: isTop ? -20 : 20,
      },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: {
        opacity: 0,
        x: isLeft ? -100 : 100,
        y: isTop ? -20 : 20,
      },
    };
  };

  const typeStyles = getTypeStyles();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          {...getAnimationVariants()}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className={`fixed ${getPositionStyles()} z-50 ${className}`}
        >
          <div
            className={`flex items-center gap-3 ${typeStyles.bg} border-2 ${typeStyles.border} text-white px-4 py-3 rounded-lg shadow-2xl min-w-[300px] max-w-md`}
          >
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
                delay: 0.1,
              }}
              className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-white/20 rounded-full font-bold"
            >
              {typeStyles.icon}
            </motion.div>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 text-sm font-medium"
            >
              {message}
            </motion.p>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setIsVisible(false);
                onClose?.();
              }}
              className="flex-shrink-0 w-5 h-5 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
            >
              ✕
            </motion.button>

            {/* Progress Bar */}
            {autoClose && (
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: duration / 1000, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-white/30 w-full origin-left"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Demo Component
export const FloatingNotificationDemo: React.FC = () => {
  const [notifications, setNotifications] = useState<
    Array<{
      id: number;
      type: NotificationType;
      message: string;
      position: FloatingNotificationProps["position"];
    }>
  >([]);

  const addNotification = (
    type: NotificationType,
    position: FloatingNotificationProps["position"]
  ) => {
    const messages = {
      success: "Operation completed successfully!",
      error: "An error occurred. Please try again.",
      warning: "Warning: This action cannot be undone.",
      info: "You have a new message.",
    };

    const newNotification = {
      id: Date.now(),
      type,
      message: messages[type],
      position,
    };

    setNotifications((prev) => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => addNotification("success", "top-right")}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Show Success
        </button>
        <button
          onClick={() => addNotification("error", "top-left")}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Show Error
        </button>
        <button
          onClick={() => addNotification("warning", "bottom-right")}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
        >
          Show Warning
        </button>
        <button
          onClick={() => addNotification("info", "bottom-left")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Show Info
        </button>
      </div>

      {notifications.map((notification) => (
        <FloatingNotification
          key={notification.id}
          type={notification.type}
          message={notification.message}
          position={notification.position}
        />
      ))}
    </div>
  );
};

export default FloatingNotification;

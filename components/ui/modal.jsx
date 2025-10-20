"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const ModalContext = React.createContext()

function Modal({ children, open, onOpenChange }) {
  return (
    <ModalContext.Provider value={{ open, onOpenChange }}>
      {children}
    </ModalContext.Provider>
  )
}

function ModalTrigger({ children, asChild = false }) {
  const { onOpenChange } = React.useContext(ModalContext)
  
  if (asChild) {
    return React.cloneElement(children, {
      onClick: () => onOpenChange(true)
    })
  }
  
  return (
    <button onClick={() => onOpenChange(true)}>
      {children}
    </button>
  )
}

function ModalContent({ children, className, ...props }) {
  const { open, onOpenChange } = React.useContext(ModalContext)
  
  if (!open) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          "relative bg-background border rounded-lg shadow-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto",
          className
        )}
        {...props}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10"
          onClick={() => onOpenChange(false)}
        >
          <X className="h-4 w-4" />
        </Button>
        {children}
      </div>
    </div>
  )
}

function ModalHeader({ children, className, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6 pb-0", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function ModalTitle({ children, className, ...props }) {
  return (
    <h2
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h2>
  )
}

function ModalBody({ children, className, ...props }) {
  return (
    <div
      className={cn("p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalBody }

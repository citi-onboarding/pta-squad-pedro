"use client";

import * as React from "react";

type PopoverProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export function Popover({ open = false, onOpenChange, children }: PopoverProps) {
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (onOpenChange) onOpenChange(!isOpen);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div onClick={handleToggle}>{children}</div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginTop: "4px",
            zIndex: 100,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export function PopoverTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function PopoverContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

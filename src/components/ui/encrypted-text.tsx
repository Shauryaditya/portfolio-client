"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/utils/cn";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

type EncryptedTextProps = {
  text: string;
  className?: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
};

function getGlyph(index: number, tick: number) {
  return GLYPHS[(index * 11 + tick * 7) % GLYPHS.length];
}

export function EncryptedText({
  text,
  className,
  encryptedClassName,
  revealedClassName,
  revealDelayMs = 50,
}: EncryptedTextProps) {
  const characters = useMemo(() => Array.from(text), [text]);
  const [revealedCount, setRevealedCount] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const revealTimer = window.setInterval(() => {
      setRevealedCount((count) => {
        if (count >= characters.length) {
          window.clearInterval(revealTimer);
          return count;
        }

        return count + 1;
      });
    }, revealDelayMs);

    const scrambleTimer = window.setInterval(() => {
      setTick((value) => value + 1);
    }, 40);

    return () => {
      window.clearInterval(revealTimer);
      window.clearInterval(scrambleTimer);
    };
  }, [characters.length, revealDelayMs, text]);

  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {characters.map((character, index) => {
        const isRevealed = index < revealedCount || character === " ";

        return (
          <span
            key={`${character}-${index}`}
            aria-hidden="true"
            className={cn(
              "transition-colors duration-200",
              isRevealed ? revealedClassName : encryptedClassName
            )}
          >
            {character === " " ? "\u00a0" : isRevealed ? character : getGlyph(index, tick)}
          </span>
        );
      })}
    </span>
  );
}

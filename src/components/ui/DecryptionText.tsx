import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface DecryptionTextProps {
    text: string;
    speed?: number;
    chars?: string;
    animateOnHover?: boolean;
    className?: string;
    parentHover?: boolean; // Trigger from parent
}

const DecryptionText: React.FC<DecryptionTextProps> = ({
    text,
    speed = 40,
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
    animateOnHover = true,
    className = "",
    parentHover = false,
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const startScramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(() =>
                text
                    .split("")
                    .map((_letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsScrambling(false);
            }

            iteration += 1 / 3; // Speed control: larger increment = faster
        }, speed) as unknown as number;
    };

    useEffect(() => {
        startScramble(); // Initial scramble on mount
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [text]);

    useEffect(() => {
        if (parentHover) startScramble();
    }, [parentHover]);

    return (
        <motion.span
            className={`inline-block whitespace-pre ${className}`}
            onMouseEnter={animateOnHover ? startScramble : undefined}
        >
            {displayText}
        </motion.span>
    );
};

export default DecryptionText;

import React, { useRef, useEffect } from 'react';
import { createNoise3D } from 'simplex-noise';

const TopoBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const noise3D = createNoise3D();

        // Configuration
        const config = {
            thresholdIncrement: 5,
            thickLineThresholdMultiple: 3,
            res: 12, // Resolution
            lineColor: '#80008080', // Purple with opacity
            noiseScale: 0.015,
        };

        let cols = 0;
        let rows = 0;
        const zOffset = 0; // Fixed Z-offset for static generation
        let inputValues: number[][] = [];

        // Core noise generation
        const generateNoise = () => {
            let noiseMin = 100;
            let noiseMax = 0;

            inputValues = [];
            for (let y = 0; y < rows; y++) {
                inputValues[y] = [];
                for (let x = 0; x < cols; x++) {
                    const noiseVal = (noise3D(x * config.noiseScale, y * config.noiseScale, zOffset) + 1) / 2 * 100;
                    inputValues[y][x] = noiseVal;
                    if (noiseVal < noiseMin) noiseMin = noiseVal;
                    if (noiseVal > noiseMax) noiseMax = noiseVal;
                }
            }
            return { noiseMin, noiseMax };
        };

        // Linear interpolation
        const linInterpolate = (x0: number, x1: number, currentThreshold: number, y0 = 0, y1 = 1) => {
            if (x0 === x1) return 0;
            return y0 + ((y1 - y0) * (currentThreshold - x0)) / (x1 - x0);
        };

        // Marching squares helper
        const binaryToType = (nw: number, ne: number, se: number, sw: number) => {
            return (nw << 3) | (ne << 2) | (se << 1) | sw;
        };

        // Draw line helper
        const line = (from: number[], to: number[]) => {
            ctx.moveTo(from[0], from[1]);
            ctx.lineTo(to[0], to[1]);
        };

        // Place lines based on grid value
        const placeLines = (gridValue: number, x: number, y: number, currentThreshold: number) => {
            const res = config.res;
            let nw = inputValues[y][x];
            let ne = inputValues[y][x + 1];
            let se = inputValues[y + 1][x + 1];
            let sw = inputValues[y + 1][x];
            let a, b, c, d;

            const lerp = (v1: number, v2: number) => linInterpolate(v1, v2, currentThreshold);

            switch (gridValue) {
                case 1:
                case 14:
                    c = [x * res + res * lerp(sw, se), y * res + res];
                    d = [x * res, y * res + res * lerp(nw, sw)];
                    line(d, c);
                    break;
                case 2:
                case 13:
                    b = [x * res + res, y * res + res * lerp(ne, se)];
                    c = [x * res + res * lerp(sw, se), y * res + res];
                    line(b, c);
                    break;
                case 3:
                case 12:
                    b = [x * res + res, y * res + res * lerp(ne, se)];
                    d = [x * res, y * res + res * lerp(nw, sw)];
                    line(d, b);
                    break;
                case 4:
                case 11:
                    a = [x * res + res * lerp(nw, ne), y * res];
                    b = [x * res + res, y * res + res * lerp(ne, se)];
                    line(a, b);
                    break;
                case 5:
                    a = [x * res + res * lerp(nw, ne), y * res];
                    b = [x * res + res, y * res + res * lerp(ne, se)];
                    c = [x * res + res * lerp(sw, se), y * res + res];
                    d = [x * res, y * res + res * lerp(nw, sw)];
                    line(d, a);
                    line(c, b);
                    break;
                case 6:
                case 9:
                    a = [x * res + res * lerp(nw, ne), y * res];
                    c = [x * res + res * lerp(sw, se), y * res + res];
                    line(c, a);
                    break;
                case 7:
                case 8:
                    a = [x * res + res * lerp(nw, ne), y * res];
                    d = [x * res, y * res + res * lerp(nw, sw)];
                    line(d, a);
                    break;
                case 10:
                    a = [x * res + res * lerp(nw, ne), y * res];
                    b = [x * res + res, y * res + res * lerp(ne, se)];
                    c = [x * res + res * lerp(sw, se), y * res + res];
                    d = [x * res, y * res + res * lerp(nw, sw)];
                    line(a, b);
                    line(c, d);
                    break;
                default:
                    break;
            }
        };

        const renderAtThreshold = (currentThreshold: number) => {
            ctx.beginPath();
            ctx.strokeStyle = config.lineColor;

            const isThick = currentThreshold % (config.thresholdIncrement * config.thickLineThresholdMultiple) === 0;
            ctx.lineWidth = isThick ? 2 : 1;

            for (let y = 0; y < rows - 1; y++) {
                for (let x = 0; x < cols - 1; x++) {
                    const nw = inputValues[y][x];
                    const ne = inputValues[y][x + 1];
                    const se = inputValues[y + 1][x + 1];
                    const sw = inputValues[y + 1][x];

                    if (nw > currentThreshold && ne > currentThreshold && se > currentThreshold && sw > currentThreshold) continue;
                    if (nw < currentThreshold && ne < currentThreshold && se < currentThreshold && sw < currentThreshold) continue;

                    const gridValue = binaryToType(
                        nw > currentThreshold ? 1 : 0,
                        ne > currentThreshold ? 1 : 0,
                        se > currentThreshold ? 1 : 0,
                        sw > currentThreshold ? 1 : 0
                    );

                    placeLines(gridValue, x, y, currentThreshold);
                }
            }
            ctx.stroke();
        };

        // Main draw function - runs ONCE
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { noiseMin, noiseMax } = generateNoise();

            const roundedNoiseMin = Math.floor(noiseMin / config.thresholdIncrement) * config.thresholdIncrement;
            const roundedNoiseMax = Math.ceil(noiseMax / config.thresholdIncrement) * config.thresholdIncrement;

            for (let threshold = roundedNoiseMin; threshold < roundedNoiseMax; threshold += config.thresholdIncrement) {
                renderAtThreshold(threshold);
            }
        };

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = parent.clientWidth * dpr;
                canvas.height = parent.clientHeight * dpr;
                canvas.style.width = `${parent.clientWidth}px`;
                canvas.style.height = `${parent.clientHeight}px`;
                ctx.scale(dpr, dpr);

                cols = Math.floor(parent.clientWidth / config.res) + 1;
                rows = Math.floor(parent.clientHeight / config.res) + 1;

                draw(); // Redraw static frame on resize
            }
        };

        // Initial render
        resize();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-[#E0E7FF] to-[#D1E0FF] overflow-hidden">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};

export default TopoBackground;

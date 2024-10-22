"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ComponentProps {
  image: string;
  className?: string;
}

const Glitch = ({ image, className }: ComponentProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pixelSize, setPixelSize] = useState(100);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const img = new Image();
    img.src = image;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      drawPixelated(ctx, img, pixelSize);
    };
  }, [image, pixelSize]);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setPixelSize((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 1;
          }
          return prev - 1;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [inView]);

  const drawPixelated = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    pixelSize: number
  ) => {
    ctx.imageSmoothingEnabled = true;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height);

    if (pixelSize <= 1) return;

    const imageData = ctx.getImageData(
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    );
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let y = 0; y < ctx.canvas.height; y += pixelSize) {
      for (let x = 0; x < ctx.canvas.width; x += pixelSize) {
        const red = imageData.data[(y * ctx.canvas.width + x) * 4];
        const green = imageData.data[(y * ctx.canvas.width + x) * 4 + 1];
        const blue = imageData.data[(y * ctx.canvas.width + x) * 4 + 2];

        ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }
  };

  return (
    <div className={`${className}`}>
      <div
        ref={ref}
        style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
      >
        <canvas ref={canvasRef} className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Glitch;

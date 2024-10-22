import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import Hero from "../assets/neon.jpg";
import Header from "../components/Header";

const PIXELATION_SIZE = 100;

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pixelSize, setPixelSize] = useState(PIXELATION_SIZE);
  const [isUnpixelated, setIsUnpixelated] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (canvasRef.current) {
        const scrollTop = window.scrollY;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollTop / scrollHeight;
        const newPixelSize = Math.max(
          1,
          PIXELATION_SIZE - Math.floor(scrollPercentage * PIXELATION_SIZE * 2)
        );

        setPixelSize(newPixelSize);
        if (newPixelSize === 1) setIsUnpixelated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const img = new Image();
    img.src = Hero;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      resizeCanvas();
    };

    const resizeCanvas = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const windowRatio = windowWidth / windowHeight;
      const imageRatio = img.width / img.height;

      let drawWidth,
        drawHeight,
        offsetX = 0,
        offsetY = 0;

      if (windowRatio > imageRatio) {
        // Window is wider than the image
        drawWidth = windowWidth;
        drawHeight = drawWidth / imageRatio;
        offsetY = (windowHeight - drawHeight) / 2;
      } else {
        // Window is taller than the image
        drawHeight = windowHeight;
        drawWidth = drawHeight * imageRatio;
        offsetX = (windowWidth - drawWidth) / 2;
      }

      canvas.width = windowWidth;
      canvas.height = windowHeight;

      drawPixelated(
        ctx,
        img,
        pixelSize,
        drawWidth,
        drawHeight,
        offsetX,
        offsetY
      );
    };

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [pixelSize]);

  const drawPixelated = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    pixelSize: number,
    drawWidth: number,
    drawHeight: number,
    offsetX: number,
    offsetY: number
  ) => {
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    if (pixelSize <= 1) {
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      return;
    }

    const smallCanvas = document.createElement("canvas");
    const smallCtx = smallCanvas.getContext("2d");
    if (!smallCtx) return;

    const scaleFactor = 1 / pixelSize;
    smallCanvas.width = Math.ceil(drawWidth * scaleFactor);
    smallCanvas.height = Math.ceil(drawHeight * scaleFactor);

    smallCtx.drawImage(img, 0, 0, smallCanvas.width, smallCanvas.height);

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(
      smallCanvas,
      0,
      0,
      smallCanvas.width,
      smallCanvas.height,
      offsetX,
      offsetY,
      drawWidth,
      drawHeight
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-stone-950">
        <div
          ref={ref}
          className="sticky top-0 flex items-center justify-center min-h-screen overflow-hidden"
          style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
        >
          <canvas ref={canvasRef} className="w-full h-full object-cover" />
          <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_40%_40%_at_50%_60%,#000_60%,transparent_100%)]" />

          <div className="absolute bottom-[150px] left-[300px] h-16 w-50 text-amber-50">
            <h1 className="font-sans font-bold text-7xl">DEV JERB</h1>
            <p className="font-sans">08.01.01 PH SF 2000</p>
          </div>
        </div>
        <div style={{ height: "140vh" }} />
      </div>
    </>
  );
}

/* eslint-disable no-unused-vars */
import { useState } from "react";

type AspectRatioOption = "1/1" | "3/2" | "5/4" | "16/9" | "9/16";

type AspectRatioMap = {
  [key in AspectRatioOption]: number;
};

function useFilePreviewer(): [
  string | ArrayBuffer | null,
  any,
  any,
  (event: {
    target: {
      files: string | any[];
    };
  }) => void
] {
  const aspectRatioMap: AspectRatioMap = {
    "1/1": 1,
    "3/2": 1.5,
    "5/4": 1.25,
    "16/9": 1.7778,
    "9/16": 0.5625,
  };
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [imageFile, setImageFile] = useState<any>("");
  const [aspectRatio, setAspectRatio] = useState<any>("");
  const aspect: AspectRatioOption = "1/1";
  const aspectRatioValue = aspectRatioMap[aspect];
  const calculateAspectRatio = (width: number, height: number) => {
    // @ts-ignore
    const gcd = (a: number, b: number) => {
      if (b === 0) {
        return a;
      } else {
        return gcd(b, a % b);
      }
    };
    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
  };

  const onSelectFile = (
    event: { target: { files: string | any[] } },
    resetFn?: () => void
  ) => {
    if (event === null) {
      // setImage(null);
      // setImageFile(null);
      return;
    }
    if (event.target.files && event.target.files.length > 0) {
      setImageFile(event.target.files);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
      reader.addEventListener("load", () => {
        const img = new Image();
        img.onload = function () {
          const aspectRatio = calculateAspectRatio(img.width, img.height);
          setAspectRatio(aspectRatio);
        };
        img.src = reader.result as string;
        setImage(reader.result);
      });
    }
  };
  return [image, imageFile, aspectRatio, onSelectFile];
}

export default useFilePreviewer;

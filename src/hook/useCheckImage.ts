import { useState } from "react";

function useCheckImage() {
  const [dimensions, setDimensions] = useState<any>({ width: 0, height: 0 });

  const checkImage = (file?: any) => {
    const reader = new FileReader();

    reader.onload = function (event: any) {
      const img: any = new Image();

      img.onload = function () {
        const width = this.width;
        const height = this.height;
        setDimensions({ width, height });
      };

      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  return [dimensions, checkImage];
}

export default useCheckImage;

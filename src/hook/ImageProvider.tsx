import { createContext, useContext, useState } from "react";

export const ImageContext: any = createContext(null);

export function useImageContext() {
  return useContext(ImageContext);
}

export const ImageProvider = ({ children }: any) => {
  const [imageFile, setImageFile] = useState<any>();

  return (
    <ImageContext.Provider
      value={{
        imageFile,
        setImageFile,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

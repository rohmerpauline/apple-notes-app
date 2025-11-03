import { createContext, ReactNode, useContext, useState } from "react";

type HeaderTitleContextType = {
  title: string;
  setTitle: (_title: string) => void;
  previousTitle: string;
  setPreviousTitle: (_previousTitle: string) => void;
  titleVisible: boolean;
  setTitleVisible: (_titleVisible: boolean) => void;
};

const HeaderTitleContext = createContext<HeaderTitleContextType>({
  title: "",
  setTitle: () => {},
  previousTitle: "",
  setPreviousTitle: () => {},
  titleVisible: false,
  setTitleVisible: () => {},
});

export const HeaderTitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>("");
  const [previousTitle, setPreviousTitle] = useState<string>("");
  const [titleVisible, setTitleVisible] = useState<boolean>(false);
  const [canScrollFurther, setCanScrollFurther] = useState<boolean>(false);

  return (
    <HeaderTitleContext.Provider
      value={{
        title,
        previousTitle,
        setTitle,
        setPreviousTitle,
        titleVisible,
        setTitleVisible,
      }}
    >
      {children}
    </HeaderTitleContext.Provider>
  );
};

export const useHeaderTitle = () => useContext(HeaderTitleContext);

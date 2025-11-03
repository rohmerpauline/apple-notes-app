import { useHeaderTitle } from "@/context/HeaderTitleContext";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect } from "react";
import { useScrollState } from "./useScrollState";

export const useScreenHeaderTitle = (headerTitle: string) => {
  const { scrollProps, canScrollFurther, hasScrolledPastThreshold } =
    useScrollState();
  const { title, setTitle, setPreviousTitle, setTitleVisible } =
    useHeaderTitle();

  useFocusEffect(
    useCallback(() => {
      if (title !== headerTitle) {
        setPreviousTitle(title);
        setTitle(headerTitle);
      }
    }, [title]),
  );

  useEffect(() => {
    setTitleVisible(hasScrolledPastThreshold);
  }, [hasScrolledPastThreshold]);

  return { scrollProps, canScrollFurther, hasScrolledPastThreshold };
};

import { useBoundStore } from "@/store/useBoundStore";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect } from "react";
import { useScrollState } from "./useScrollState";

export const useScreenHeaderTitle = (headerTitle: string) => {
  const { scrollProps, canScrollFurther, hasScrolledPastThreshold } =
    useScrollState();
  const title = useBoundStore((state) => state.title);
  const setTitle = useBoundStore((state) => state.setTitle);
  const setPreviousTitle = useBoundStore((state) => state.setPreviousTitle);
  const setTitleVisible = useBoundStore((state) => state.setTitleVisible);

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

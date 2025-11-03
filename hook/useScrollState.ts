import { FOOTER_HEIGHT } from "@/theme/layout";
import { useCallback, useState } from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

export const useScrollState = () => {
  const [scrollViewHeight, setScrollViewHeight] = useState<number>(0);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] =
    useState(false);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setScrollViewHeight(e.nativeEvent.layout.height);
  }, []);

  const onContentSizeChange = useCallback(
    (_contentWidth: number, contentHeight: number) => {
      setContentHeight(contentHeight);
    },
    [],
  );

  const onScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y;
    setScrollOffset(y);
    setHasScrolledPastThreshold(y > 40);
  }, []);

  const isScrollable = contentHeight > scrollViewHeight - FOOTER_HEIGHT;

  const canScrollFurther =
    scrollOffset < 0 ||
    (isScrollable && scrollOffset + scrollViewHeight < contentHeight);

  const scrollProps = {
    onLayout,
    onScroll,
    onContentSizeChange,
    scrollEventThrottle: 16 as const,
  };

  return {
    canScrollFurther,
    scrollProps,
    hasScrolledPastThreshold,
  };
};

import { FOOTER_HEIGHT } from "@/theme/layout";
import { useCallback, useState } from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

export const useScrollableFooter = () => {
  const [scrollViewHeight, setScrollViewHeight] = useState<number>(0);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const [contentHeight, setContentHeight] = useState<number>(0);

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
    setScrollOffset(e.nativeEvent.contentOffset.y);
  }, []);

  const isScrollable = contentHeight > scrollViewHeight - FOOTER_HEIGHT;
  const footerActive =
    scrollOffset < 0 ||
    (isScrollable && scrollOffset + scrollViewHeight < contentHeight);

  const scrollProps = {
    onLayout,
    onScroll,
    onContentSizeChange,
    scrollEventThrottle: 16 as const,
  };

  return {
    footerActive,
    scrollProps,
  };
};

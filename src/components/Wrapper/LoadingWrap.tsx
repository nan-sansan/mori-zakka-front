import React, { ReactNode, isValidElement, cloneElement } from "react";
import useLoadingStore from "@/store/loading";

interface LoadingChildProps {
  className?: string;
  disabled?: boolean;
}

interface LoadingWrapProps {
  children: ReactNode;
  className?: string;
}

/**
 * LoadingWrap 組件
 *
 * 根據 loading 狀態為子組件動態添加 className 與 disabled 屬性。
 *
 * 功能：
 * - loading 狀態下，為所有子組件添加指定的 classNames。
 * - 自動更新每個子組件的 className 與 disabled 屬性。
 *
 * Props:
 * - children：需要被包裝的子組件。
 * - className：loading 狀態下需要添加的 CSS 類名（預設為 ""）。
 */
export default function LoadingWrap({
  children,
  className = "",
}: LoadingWrapProps) {
  const isLoading = useLoadingStore((state) => state.isLoading);

  const wrappedChildren = React.Children.map(children, (child) => {
    if (!isLoading || !isValidElement<LoadingChildProps>(child)) {
      return child;
    }

    const existingClassName = child.props.className ?? "";
    const newClassName = `${existingClassName} ${className}`.trim();

    return cloneElement(child, {
      className: newClassName,
      disabled: isLoading,
    });
  });

  return <>{wrappedChildren}</>;
}

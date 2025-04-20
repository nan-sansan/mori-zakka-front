import React, { ReactNode, isValidElement, cloneElement } from "react";
import useLoadingStore from "@/store/loading";

interface PropsWrapper {
  children: ReactNode;
  classNames?: string[];
}

const LoadingWrap: React.FC<PropsWrapper> = ({
  children,
  classNames = ["loading-class"],
}) => {
  const isLoading = useLoadingStore((state) => state.isLoading);
  const triggerClassSet = new Set(classNames);

  const wrappedChildren = React.Children.map(children, (child) => {
    if (isValidElement<{ className?: string }>(child)) {
      const childElement = child as React.ReactElement<{ className?: string }>;
      const childClassName = childElement.props.className || "";
      const childClassSet = new Set(childClassName.split(" "));

      if (isLoading) {
        triggerClassSet.forEach((c) => childClassSet.add(c));
      } else {
        triggerClassSet.forEach((c) => childClassSet.delete(c));
      }

      const newClassName = Array.from(childClassSet).join(" ");

      return cloneElement(child, {
        className: newClassName,
        ...{ disabled: isLoading },
      });
    }
    return child;
  });

  return <>{wrappedChildren}</>;
};

export default LoadingWrap;

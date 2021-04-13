import { useEffect, useState } from "react";

interface Props {
  onClick: (e: any) => void;
  outSideRefs?: ReadonlyArray<any>;
  onSubscribe?: boolean;
}

const useDocument = ({ onClick, outSideRefs, onSubscribe }: Props) => {
  const [dataEvent] = useState({
    handler: (event: any) => {
      const isOutClick = outSideRefs
        ? !outSideRefs.find((ref) =>
            event.path.find((e: any) => e === ref.current)
          )
        : false;

      if (isOutClick) {
        onClick(event);
      }
    },
  });

  document.removeEventListener("click", dataEvent.handler);

  useEffect(() => {
    if (onSubscribe) {
      document.addEventListener("click", dataEvent.handler);
    }
    return () => {
      document.removeEventListener("click", dataEvent.handler);
    };
  }, [onSubscribe, dataEvent.handler]);
};

export default useDocument;

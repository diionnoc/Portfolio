import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

//////////////////////// COMPONENT ////////////////////////
export default function ScrollToTop(props) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(`scroll`, handleVisible);
  }, []);

  const handleVisible = () => {
    if (window.pageYOffset > 256) setVisible(true);
    else setVisible(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <div className="scroll-to-top" onClick={handleScrollToTop}>
          <AiOutlineArrowUp />
        </div>
      )}
    </>
  );
}

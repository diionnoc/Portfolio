import { AiOutlineArrowUp } from "react-icons/ai";

//////////////////////// COMPONENT ////////////////////////
export default function CarouselBtn({ direction, action }) {
  return (
    <div className={`carousel-btn carousel-btn-${direction}`} onClick={action}>
      <AiOutlineArrowUp />
    </div>
  );
}

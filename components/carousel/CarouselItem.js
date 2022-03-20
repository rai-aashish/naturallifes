import Image from "next/image";
import style from "./carousel-item.module.scss";
import { useSelector } from "react-redux";

export default function CarouselItem({ description, imageUrl }) {
  const { isSqueeze } = useSelector((state) => state.appStatus);

  return (
    <div className={style["carousel-item"]}>
      <Image
        src={imageUrl}
        alt="slide"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
      />
      <div
        className={
          style["legend"] + " " + `${isSqueeze ? style["change-bg"] : ""}`
        }
      >
        {description}
      </div>
    </div>
  );
}

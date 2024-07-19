import s from "./ImageCard.module.css";

const ImageCard = ({ item }) => {
  return (
    <div className={s.card}>
      <img src={item.small} alt={item.description} />
    </div>
  );
};

export default ImageCard;

import cl from "./Book.module.css";
import mockImage from "../../images/mockBook.jpg";

export function Book({ book }) {
  const { volumeInfo } = book;
  const imageLinks = volumeInfo.imageLinks;

  return (
    <div className={cl["book-wrapper"]}>
      <img
        loading="lazy"
        src={imageLinks ? imageLinks.thumbnail : mockImage}
        alt={volumeInfo.title}
      />
      {volumeInfo.categories && (
        <p className={cl.book__category}>
          {volumeInfo.categories.map((item) => item + " ")}
        </p>
      )}
      <p className={cl.book__name}>{volumeInfo.title}</p>
      {volumeInfo.authors && (
        <p className={cl.book__author}>
          {volumeInfo.authors.map((item) => item + " ")}
        </p>
      )}
    </div>
  );
}

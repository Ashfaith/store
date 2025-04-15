const Tile = ({ product }) => {
  const imgSrc = product.image;
  console.log(imgSrc);

  return (
    <div className="tile">
      <div className="img-container">
        <img src={imgSrc} alt="loading.." />
      </div>
      <p>{product.title}</p>
    </div>
  );
};

export default Tile;

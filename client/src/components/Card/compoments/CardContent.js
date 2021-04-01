const CardContent = ({ alt, description, secondRow }) => {
  return (
    <div
      className={`card-content has-text-white card-content-ratio ${
        secondRow ? secondRow : ""
      }`}
    >
      <p className="is-size-6 has-text-danger" id="work-tittle">
        {alt}
      </p>
      <p className="is-size-7 has-text-white" id="work-description">
        {description}
      </p>
    </div>
  );
};
export default CardContent
import "./Board.css";

const PuzzlePiece = (props) => {
  return (
    <img
      className="Board-piece"
      onClick={props.click}
      src={props.img}
      alt={props.id}
    />
  );
};

export default PuzzlePiece;

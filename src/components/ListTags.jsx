import "../styles/listTags.css";

const ListTags = ({ formats, selected, handlerChangeFormat }) => {
  return (
    <div className="list-tags">
      {formats.map((format, index) => (
        <span
          className="tag"
          key={index}
          style={{
            textDecoration: format === selected ? "underline" : "none",
          }}
          onClick={handlerChangeFormat}
        >
          {format}
        </span>
      ))}
    </div>
  );
};

export default ListTags;

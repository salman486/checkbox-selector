import Checkbox from "./Checkbox";
import "./ListItem.css";

const ListItem = ({ text, checked, onChange }) => {
  return (
    <div className="list-item">
      <label className="list-item-text">{text}</label>
      <Checkbox checked={checked} onChange={onChange} />
    </div>
  );
};

export default ListItem;

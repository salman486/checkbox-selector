import { useState } from "react";
import ListItem from "./ListItem";
import Seprator from "./Seprator";

const pageNames = ["Page 1", "Page 2", "Page 3", "Page 4"];

const PageSelector = () => {
  const [selectedPages, setSelectedPages] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPages(pageNames.map((_, index) => index));
    } else {
      setSelectedPages([]);
    }
  };

  const handleSelectPage = (index) => (e) => {
    if (e.target.checked) {
      setSelectedPages([...selectedPages, index]);
    } else {
      setSelectedPages(selectedPages.filter((i) => i !== index));
    }
  };

  const isAllSelected = selectedPages.length === pageNames.length;

  return (
    <div className="page-selector">
      <ListItem
        text="All pages"
        checked={isAllSelected}
        onChange={handleSelectAll}
      />

      <Seprator />
      {pageNames.map((page, index) => (
        <ListItem
          key={index}
          text={page}
          checked={selectedPages.includes(index)}
          onChange={handleSelectPage(index)}
        />
      ))}
      <Seprator />
      <div className="btn_wrapper">
        <button
          className="done-button"
          onClick={() => alert(`${selectedPages.length} pages selected`)}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default PageSelector;

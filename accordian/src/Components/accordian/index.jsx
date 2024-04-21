//single selection
import { useState } from "react";
import data from "./data";
import styles from "./style.css";
export default function Accordian() {
  const [selectetd, setSelected] = useState(null);

  function handleSingleSeletion(getCurrentId) {
    setSelected(getCurrentId === selectetd ? null : getCurrentId);
    const [enableMulti, setEnableMulti] = useState(false);
    const [multi, setMulti] = useState([]);
  }
  console.log(selectetd);

  function handleMultiSelection(getCurrentId) {
    let cpyMulti = [...multi];
    const findIndexOfCurrentId = cpyMulti.indexof(getCurrentId);
    console.log(findIndexOfCurrentId);
  }

  return (
    <div className="container">
      <button onClick={() => seteEnableMulti(!enableMulti)}>
        Enable multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMulti
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSeletion(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selectetd === dataItem.id ? <div>{dataItem.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}

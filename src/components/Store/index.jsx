import React from "react";
import { Item } from "../";

const items = [
  { id: "h38ss-dtbl", img: "h38ss-dtbl-sel-201603.png" },
  { id: "h38ss-dtgr", img: "h38ss-dtgr-sel-201603.png" },
  { id: "h38ss-dtrd", img: "h38ss-dtrd-sel-201603.png" },
  { id: "h42ss-stbk", img: "h42ss-stbk-sel-201603.png" },
  { id: "s42gd-nsgb", img: "s42gd-nsgb-sel-201603.png" },
  { id: "s42rg-nsdb", img: "s42rg-nsdb-sel-201603.png" },
  { id: "s42sg-nsbk", img: "s42sg-nsbk-sel-201603.png" },
  { id: "s42si-nssb", img: "s42si-nssb-sel-201603.png" }
];

const styles = {
  container: {
    marginTop: 100
  },
  itemsList: {
    maxWidth: 1030,
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    justifyContent: "center"
  }
};

function Store({ reserveItem }) {
  const { container, itemsList } = styles;
  return (
    <div style={container}>
      <div style={itemsList}>
        {items.map((item, idx) => (
          <Item item={item} key={idx} idx={idx} reserveItem={reserveItem} />
        ))}
      </div>
    </div>
  );
}

export default Store;

import React from "react";
import { Item } from "../";

const items = [
  "h38ss-dtbl-sel-201603.png",
  "h38ss-dtgr-sel-201603.png",
  "h38ss-dtrd-sel-201603.png",
  "h42ss-stbk-sel-201603.png",
  "s42gd-nsgb-sel-201603.png",
  "s42rg-nsdb-sel-201603.png",
  "s42sg-nsbk-sel-201603.png",
  "s42si-nssb-sel-201603.png"
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

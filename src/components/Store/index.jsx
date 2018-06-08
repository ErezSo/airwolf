import React from "react";
import { ItemBox } from "../";

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
    display: "flex",
    height: "calc(100% - 100px)",
    justifyContent: "center",
    alignItems: "center"
  },
  itemsList: {
    display: "flex",
    width: "52%",
    flexWrap: "wrap",
    margin: "0 auto"
  }
};

const Store = () => {
  const { container, itemsList } = styles;
  return (
    <div style={container}>
      <div style={itemsList}>
        {items.map((item, idx) => <ItemBox item={item} key={idx} idx={idx} />)}
      </div>
    </div>
  );
};

export default Store;

import { Menu } from "antd";

function Menutree() {
  return (
    <Menu
      style={{
        color: "#343a40",
        borderRadius: "15px",
        width: "200px",
        height: "300px",
        boxShadow:
          "0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)",
      }}
      items={[
        {
          label: "iPhone",
          key: "iPhone",

          children: [
            { label: "iPhone14 ProMax", key: "ip14" },
            { label: "iPhone13 ProMax", key: "ip13" },
            { label: "iPhone12 ProMax", key: "ip12" },
          ],
        },
        {
          label: "SamSung",
          key: "SamSung",
          children: [
            { label: "Galaxy Z Fold5", key: "fold5" },
            { label: "Galaxy Z Flip5", key: "flip5" },
            { label: "Galaxy S23 Ultra", key: "s23" },
          ],
        },
        {
          label: "Xiaomi",
          key: "Xiaomi",
          children: [
            { label: "Xiaomi 12 Pro", key: "X12P" },
            { label: "Xiaomi Redmi Note 12", key: "Redmi Note12" },
          ],
        },
        {
          label: "OPPO",
          key: "oppo",
          children: [
            { label: "OPPO Reno10", key: "reno10" },
            { label: "OPPO Reno8", key: "reno8" },
          ],
        },
        {
          label: "Nokia",
          key: "Nokia",
          children: [
            { label: "Nokia T21", key: "t21" },
            { label: "Nokia G22", key: "g22" },
          ],
        },
        {
          label: "Vivo",
          key: "vivo",
          children: [
            { label: "Vivo Y36", key: "y36" },
            { label: "Vivo V27e", key: "v27e" },
          ],
        },
      ]}
    ></Menu>
  );
}

export default Menutree;

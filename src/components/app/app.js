import styles from "./app.module.css";

import { Card } from "../card/card";
import luxury from "../../assets/images/icon-luxury.svg";
import sedans from "../../assets/images/icon-sedans.svg";
import suvs from "../../assets/images/icon-suvs.svg";

const data = [
  {
    className: styles.sedans,
    icon: sedans,
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    className: styles.luxury,
    icon: luxury,
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
  },
  {
    className: styles.suvs,
    icon: suvs,
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
];

function App() {
  return (
    <div className={styles.cardsWrapper}>
      {data.map(({ icon, description, title, className }) => (
        <Card
          key={title}
          icon={<img src={icon} />}
          description={description}
          title={title}
          className={className}
        />
      ))}
    </div>
  );
}

export default App;

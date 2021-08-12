import "../styles/Features.scss";
import React, { useState, useEffect } from "react";

import { Card } from "semantic-ui-react";

import { getFeatures } from "../api/shopping";

/**
 * Lists the features of the shopping site.
 */
const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    getFeatures()
      .then(({ data }) => setFeatures(data))
      .catch((err) => {
        console.log("[ERROR]", err);
        setFeatures([]);
      });
  }, []);

  return (
    <div className="features">
      <Card.Group>
        {features.map((feature) => (
          <Card
            key={feature.title}
            header={feature.title}
            description={feature.desc}
          />
        ))}
      </Card.Group>
    </div>
  );
};

export default Features;

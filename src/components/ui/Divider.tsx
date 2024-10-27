import React, { useState, useEffect } from "react";
import {
  FilledBox,
  CrossedBox,
  CircledBox,
  FilledCircledBox,
  FilledCrossedBox,
  PartialFilledCircledBox,
} from "../shapes/boxes";

// Define the component type array
const components: JSX.Element[] = [
  <FilledBox />,
  <CrossedBox />,
  <CircledBox />,
  <FilledCircledBox />,
  <FilledCrossedBox />,
  <PartialFilledCircledBox />,
];

// Function to get a random array of components
const getRandomComponents = (): JSX.Element[] => {
  // Randomize the length between 1 and 10
  const count = Math.floor(Math.random() * 5) + 1;

  const randomComponents: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * components.length);
    // Assign a unique key using the index or a combination of values
    randomComponents.push(
      React.cloneElement(components[randomIndex], { key: i })
    );
  }
  return randomComponents;
};

const Divider: React.FC = () => {
  const [randomSequence, setRandomSequence] = useState<JSX.Element[]>(
    getRandomComponents()
  );

  useEffect(() => {
    const shuffleComponents = () => {
      setRandomSequence(getRandomComponents());

      const randomTime = Math.floor(Math.random() * 5000) + 1000;
      setTimeout(shuffleComponents, randomTime);

      return 0;
    };

    shuffleComponents();

    return () => clearTimeout(shuffleComponents());
  }, []);

  return <div className="flex space-x-2 ml-[-40px]">{randomSequence}</div>;
};

export default Divider;

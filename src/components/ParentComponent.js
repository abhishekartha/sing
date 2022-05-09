import React, { useEffect, useState } from "react";
import { componentLocation } from "../constants/componentLocation";

const ParentComponent = (props) => {
  const [module, setModule] = useState(null);

  const locationId = props.data.id;
  const location = componentLocation.get(locationId);

  useEffect(() => {
    import(`${location}`).then((c) => {
      setModule(c.default(props.data.data));
    });
  }, []);

  return <div>{module ? <div>{module}</div> : null}</div>;
};

export default ParentComponent;

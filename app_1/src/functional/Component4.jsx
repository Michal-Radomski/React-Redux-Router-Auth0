import React from "react";

const Component4 = (props) => {
  return (
    <div>
      Component4 Component {props.match.params.id}
      {/* {console.log(props)} */}
    </div>
  );
};

export default Component4;

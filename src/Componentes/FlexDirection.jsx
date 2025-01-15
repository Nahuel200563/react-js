function FlexContainer(props) {
  const styleFlex = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  };

  return <div style={styleFlex}>{props.children}</div>;
}

export default FlexContainer;

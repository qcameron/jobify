import PropTypes from "prop-types";
import Wrapper from "../assets/wrappers/StatItem";

const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};

StatItem.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  bcg: PropTypes.string
};

export default StatItem;

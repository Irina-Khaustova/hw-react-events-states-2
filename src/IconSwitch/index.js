import PropTypes from 'prop-types'

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;
  //console.log(props)
    return (
      <span className="icon material-icons" onClick={onSwitch} >{icon}</span>
    )
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
};
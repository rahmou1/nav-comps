import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const clickHandler = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={clickHandler}>
      {children}
    </a>
  );
};
export default Link;

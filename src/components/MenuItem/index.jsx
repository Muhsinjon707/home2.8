function MenuItem(props) {
    return (
      <li className="nav-item">
        <a href="#">{props.item[0].toUpperCase() + props.item.slice(1)}</a>
      </li>
    );
}

export default MenuItem;
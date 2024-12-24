import "./index.css"
import MenuItem from "../MenuItem";

function SimpleMenu() {
    return (
        <nav>
            <ul className="nav">
                <MenuItem item="home" />
                <MenuItem item="about us" />
                <MenuItem item="contact" />
                <MenuItem item="news" />
            </ul>
        </nav>
    );
}

export default SimpleMenu;
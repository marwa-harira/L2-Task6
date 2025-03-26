import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = ({ logo, navItems, btn }) => {
    return (
        <nav>
            <div className="items">
                <h1>{logo}</h1>
                <ul>
                    {navItems?.map((item, index) => {
                        return (
                            <li key={index}>

                                <Link to={item.href}>{item.content}</Link>
                            </li>

                        )
                    })}
                </ul>
            </div>



            <Link to="/sign-in">
                <button>{btn}</button>
            </Link>

        </nav>
    )
}

export default NavBar



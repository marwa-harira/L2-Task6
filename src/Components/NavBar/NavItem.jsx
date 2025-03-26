import { Link } from 'react-router-dom'

import './NavItem.css'

const NavItem = ({ href, content }) => {
    return (
        <Link to={href} >
            {content}
        </Link>

    )
}

export default NavItem

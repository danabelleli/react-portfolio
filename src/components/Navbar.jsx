import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const currentPage = useLocation().pathname;

    return (

        <ul className='nav flex justify-center justify-evenly py-5 bg-red-100 font-bold'>
            <li className='nav-item hover:text-slate-700'>
                <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About</Link>
            </li>
            <li className='nav-item hover:text-slate-700'>
                <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </li>
            <li className='nav-item hover:text-slate-700'>
                <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
            </li>
            <li className='nav-item hover:text-slate-700'>
                <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </li>
        </ul>
    )
}



export default Navbar;
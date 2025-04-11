import { NavLink } from 'react-router-dom';
// import { useContext } from 'react';
// import AuthContext from '../context/AuthContext';

const Sidebar = () => {

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
        display: 'block',
        borderRadius: '5px',
        backgroundColor: '#444',
        transition: 'background-color 0.3s, color 0.3s'
    };

    const linkHoverStyle = {
        backgroundColor: 'white',
        color: 'black'
    };

    return (
        <div style={{ height: '100vh', width: '250px', backgroundColor: '#333', color: 'white', display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Pendaftaran Siswa Baru</h5>
            <ul style={{ listStyle: 'none', padding: '0', flexGrow: 1 }}>
                <li style={{ marginBottom: '10px' }}>
                    <NavLink to="/dashboard" style={linkStyle} onMouseEnter={e => Object.assign(e.target.style, linkHoverStyle)} onMouseLeave={e => Object.assign(e.target.style, linkStyle)}>
                        Dashboard
                    </NavLink>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <NavLink to="/data" style={linkStyle} onMouseEnter={e => Object.assign(e.target.style, linkHoverStyle)} onMouseLeave={e => Object.assign(e.target.style, linkStyle)}>
                        Data Siswa
                    </NavLink>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <NavLink to="/about" style={linkStyle} onMouseEnter={e => Object.assign(e.target.style, linkHoverStyle)} onMouseLeave={e => Object.assign(e.target.style, linkStyle)}>
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

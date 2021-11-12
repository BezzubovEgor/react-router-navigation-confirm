
import { NavLink } from 'react-router-dom';

export const Brand = () => (
    <div className="brand">
        <NavLink to="/">
            <img className="logo" src={ `${process.env.PUBLIC_URL}/logo.png` }/>
            <div>RRNC</div>
        </NavLink>
    </div>
);

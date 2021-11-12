
import { Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
import { ROUTES } from 'src/routes';

import { getSecondInPath } from '../utils';

export const TopMenu = withRouter(({ location, match }) => (
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }} selectedKeys={ getSecondInPath(location.pathname) }>
        { ROUTES.map(route => <Menu.Item key={ route.path }><NavLink to={ route.path }>{ route.title }</NavLink></Menu.Item>) }
    </Menu>
));

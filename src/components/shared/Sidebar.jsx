import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-neutral-900 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcHome fontSize={24} />
        <span className="text-neutral-200 text-lg">Rapid Home Solution</span>
      </div>
      <div className="py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
    </div>
  );
};

const SidebarLink = ({ link }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
        'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
};

export default Sidebar;

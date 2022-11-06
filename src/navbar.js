import { useCallback } from 'react'
import './navbar.css'
import { Link, useRouter } from './router'

export default function Navbar() {
  const { path } = useRouter()

  const linkClassName = useCallback(
    (href) => {
      const active = path === href ? ' navbar__link--active' : ''
      return 'navbar__link' + active
    },
    [path]
  )

  return (
    <nav className="navbar" role="menu">
      <Link className={linkClassName('/')} role="menuitem" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M12.592 3.496a2.25 2.25 0 0 1 2.816 0l7.75 6.219A2.25 2.25 0 0 1 24 11.47v11.28A2.25 2.25 0 0 1 21.75 25h-3a2.25 2.25 0 0 1-2.25-2.25v-6a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v6A2.25 2.25 0 0 1 9.25 25h-3A2.25 2.25 0 0 1 4 22.75V11.47c0-.683.31-1.328.842-1.755l7.75-6.219Zm1.877 1.17a.75.75 0 0 0-.938 0l-7.75 6.219a.75.75 0 0 0-.281.585v11.28c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-6a2.25 2.25 0 0 1 2.25-2.25h3.5A2.25 2.25 0 0 1 18 16.75v6c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V11.47a.75.75 0 0 0-.28-.585l-7.75-6.219Z"
          />
        </svg>
      </Link>
      <Link className={linkClassName('/about')} role="menuitem" href="/about">
        About
      </Link>
      <Link
        className={linkClassName('/features')}
        role="menuitem"
        href="/features"
      >
        Features
      </Link>
      <Link
        className={linkClassName('/projects')}
        role="menuitem"
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className={linkClassName('/contacts')}
        role="menuitem"
        href="/contacts"
      >
        Contacts
      </Link>
    </nav>
  )
}

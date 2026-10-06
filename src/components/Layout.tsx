import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "../data/portfolio";
import { useTheme } from "../theme/context";
const navigation = [
  { to: "/", label: "Home" },
  { to: "/work", label: "My work" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
];
export function Layout() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header container">
        <Link to="/" className="brand" aria-label="Sofia Gusakova home">
          sofia<span>.</span>
        </Link>
        <nav
          id="navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              to={item.to}
              end={item.to === "/"}
              key={item.to}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <Link className="header-contact" to="/contact">
            Get in touch <ArrowUpRight size={15} />
          </Link>
          <button
            className="icon-button menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
      <main id="main" className="container">
        <Outlet />
      </main>
      <footer className="footer container">
        <Link className="footer-name" to="/">
          Sofia Gusakova<span>Good conversations. New possibilities.</span>
        </Link>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href={profile.cv} download>
            Download CV <Download size={14} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} · Amsterdam</p>
      </footer>
    </>
  );
}

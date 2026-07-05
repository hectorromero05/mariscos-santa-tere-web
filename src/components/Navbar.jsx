import { WHATSAPP_URL } from '../data';
export default function Navbar() {
  return <nav className="navbar"><a className="brand" href="#inicio"><span>🦐</span>Mariscos Santa Tere</a><div className="nav-links"><a href="#menu">Menú</a><a href="#cocteles">Cocteles</a><a href="#ceviches">Ceviches</a><a href="#ubicacion">Ubicación</a><a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a></div></nav>;
}

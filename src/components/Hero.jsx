import { MAPS_URL, WHATSAPP_URL } from '../data';
import { ChefBadge, OctopusMascot, ShrimpMascot } from './SeaCharacters';
export default function Hero() {
  return <header className="hero paper-panel burned" id="inicio"><div className="hero-copy"><p className="stamp">Marisquería local · Santa Teresita</p><h1>Cocteles, ceviches y mariscos al estilo Santa Tere.</h1><p className="hero-text">Ven por un coctel, una pata de mula, ceviche o tacos dorados preparados con el sabor sencillo y delicioso de Mariscos Santa Tere.</p><div className="hero-actions"><a href="#menu" className="btn primary">Ver menú</a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn coral">Pedir por WhatsApp</a><a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn ink">Cómo llegar</a></div></div><div className="hero-art"><ChefBadge /><ShrimpMascot /><OctopusMascot /><div className="price-burst">5.0 ★<small>3 opiniones</small></div></div></header>;
}

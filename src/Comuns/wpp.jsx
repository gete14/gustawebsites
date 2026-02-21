import { BsWhatsapp } from "react-icons/bs";
import '../styles/wpp.css'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511915079401"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fixo"
      aria-label="Falar no WhatsApp"
    >
      <BsWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default WhatsAppButton;

import "./css/form-localizer.css";
import FormLocalizer from "./form-localizer";

export const initializeFormLocalizer = () => {
  window.customElements.define('form-localizer', FormLocalizer);
};
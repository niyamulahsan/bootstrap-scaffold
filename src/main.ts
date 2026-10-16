import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./assets/scss/styles.scss";

declare global {
  interface Window {
    bootstrap: typeof import("bootstrap");
  }
}
window.bootstrap = bootstrap;

import { PageSelector } from "./PageSelector";

export function DetailPanels() {
    return (<div className="points">
    <h3>Light theme</h3>
    <div className="description">
      <p className="grade">Tackles 90% of most common accessibility issues</p>
      <ul>
        <li>Contrast</li>
        <li>CSS ready to implement</li>
        <li>Target Areas</li>
        <li>Clickable element states</li>
      </ul>
    <PageSelector />
    </div>
  </div>
);
}
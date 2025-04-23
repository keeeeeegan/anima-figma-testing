import { Children } from 'react';

export function Navigation({ children }) {
  return(
    <nav>
        <div className="logo"></div>
        {children && (
        <ul>
            {Children.map(children, child => (
                <li>{child}</li>
            ))}
        </ul>
        )}
    </nav>
  );
}
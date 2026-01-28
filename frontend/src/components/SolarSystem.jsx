import { useTheme } from '../context/ThemeContext';
import '../styles/solarsystem.css';

export default function SolarSystem() {
  const { isDark } = useTheme();

  return (
    <section className={`solar-system-section ${isDark ? 'dark' : 'light'}`}>
      <div className="solar-system-container">
        <h2 className="solar-title gradient-text">Exploring the Cosmos of Code</h2>
        <p className="solar-subtitle">Like planets orbiting the sun, technologies orbit around core concepts</p>
        
        <div className="solar-system">
          {/* Sun */}
          <div className="sun">
            <div className="sun-core"></div>
            <div className="sun-glow"></div>
          </div>

          {/* Orbit 1 - React */}
          <div className="orbit orbit-1">
            <div className="planet planet-react">
              <span className="planet-label">React</span>
            </div>
          </div>

          {/* Orbit 2 - Node.js */}
          <div className="orbit orbit-2">
            <div className="planet planet-node">
              <span className="planet-label">Node.js</span>
            </div>
          </div>

          {/* Orbit 3 - MongoDB */}
          <div className="orbit orbit-3">
            <div className="planet planet-mongo">
              <span className="planet-label">MongoDB</span>
            </div>
          </div>

          {/* Orbit 4 - Tailwind */}
          <div className="orbit orbit-4">
            <div className="planet planet-tailwind">
              <span className="planet-label">Tailwind</span>
            </div>
          </div>

          {/* Orbit 5 - Express */}
          <div className="orbit orbit-5">
            <div className="planet planet-express">
              <span className="planet-label">Express</span>
            </div>
          </div>

          {/* Stars background */}
          <div className="stars-bg">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}></div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="solar-legend">
          <div className="legend-item">
            <div className="legend-dot sun-dot"></div>
            <span>Core Technologies</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot planet-dot"></div>
            <span>MERN Stack Components</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useEffect, useState } from 'react';

function App() {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/MoritzJogi/tour-radar-data/main/races.json')
      .then((res) => res.json())
      .then((data) => {
        setRaces(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fehler beim Laden der Daten:', err);
        setLoading(false);
      });
  }, []);

  const today = new Date();
  const past = races.filter(r => new Date(r.date) < today);
  const upcoming = races.filter(r => new Date(r.date) >= today);

  const getPCSLink = (name) => {
    const formatted = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `https://www.procyclingstats.com/race/${formatted}`;
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🚴‍♂️ Tour Radar</h1>
      {loading ? <p>Lade Rennen...</p> : (
        <>
          <section>
            <h2 style={{ fontSize: '1.2rem' }}>✅ Kommende Rennen</h2>
            {upcoming.map((race, i) => (
              <div key={i} style={{ marginBottom: '1.5rem' }}>
                <strong>{race.name}</strong><br />
                📅 {race.date} – {race.location}<br />
                🏔️ {race.profile}<br />
                🔗 <a href={getPCSLink(race.name)} target="_blank" rel="noopener noreferrer">Infos bei PCS ansehen</a>
              </div>
            ))}
          </section>

          <section style={{ marginTop: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem' }}>🏁 Vergangene Rennen & Podium</h2>
            {past.map((race, i) => (
              <div key={i} style={{ marginBottom: '1.5rem' }}>
                <strong>{race.name}</strong><br />
                📅 {race.date} – {race.location}<br />
                🏔️ {race.profile}<br />
                <em>Podium:</em><br />
                🥇 {race.podium?.[0] || '-'}<br />
                🥈 {race.podium?.[1] || '-'}<br />
                🥉 {race.podium?.[2] || '-'}<br />
                🔗 <a href={getPCSLink(race.name)} target="_blank" rel="noopener noreferrer">Ergebnis bei PCS</a>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export default App;

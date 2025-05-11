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

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Tour Radar</h1>
      {loading ? <p>Lade Rennen...</p> : (
        <>
          <section>
            <h2>✅ Kommende Rennen</h2>
            {upcoming.map((race, i) => (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <strong>{race.name}</strong><br />
                {race.date} – {race.location} ({race.profile})
              </div>
            ))}
          </section>

          <section style={{ marginTop: '2rem' }}>
            <h2>🏁 Vergangene Rennen & Podium</h2>
            {past.map((race, i) => (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <strong>{race.name}</strong><br />
                {race.date} – {race.location} ({race.profile})<br />
                <em>Podium:</em><br />
                🥇 {race.podium?.[0] || '-'}<br />
                🥈 {race.podium?.[1] || '-'}<br />
                🥉 {race.podium?.[2] || '-'}
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export default App;

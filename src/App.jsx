import React from 'react';

const race = {
  name: "Lüttich–Bastogne–Lüttich",
  date: "21. April 2025",
  location: "Belgien",
  type: "Eintagesrennen",
  profile: "Hügelig",
  favorites: ["Tadej Pogačar", "Remco Evenepoel", "Tom Pidcock"],
  teams: [
    "UAE Team Emirates",
    "Soudal-Quick Step",
    "INEOS Grenadiers",
    "Red Bull-BORA-hansgrohe"
  ],
  equipment: {
    "Red Bull-BORA-hansgrohe": "Specialized Tarmac SL8, Roval Wheels, Shimano Dura-Ace Di2"
  },
  stream: "Live ab 12:00 Uhr auf Eurosport & GCN+"
};

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Tour Radar</h1>
      <h2>{race.name}</h2>
      <p><strong>Datum:</strong> {race.date}</p>
      <p><strong>Ort:</strong> {race.location}</p>
      <p><strong>Typ:</strong> {race.type} ({race.profile})</p>
      <p><strong>Favoriten:</strong> {race.favorites.join(', ')}</p>
      <p><strong>Teams:</strong> {race.teams.join(', ')}</p>
      <p><strong>Ausrüstung (BORA):</strong> {race.equipment["Red Bull-BORA-hansgrohe"]}</p>
      <p><strong>Stream:</strong> {race.stream}</p>
    </div>
  );
}
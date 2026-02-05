'use client';

import { useEffect, useState } from 'react';

export default function LiveScoreNotifier() {
  const [notification, setNotification] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const KEY = 'c56525a302b283561295aba8f804c48d';

  // Fetch real teams from API
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const [l1Res, l2Res] = await Promise.all([
          fetch('https://v3.football.api-sports.io/standings?league=41&season=2025', {
            headers: { 'x-apisports-key': KEY }
          }),
          fetch('https://v3.football.api-sports.io/standings?league=42&season=2025', {
            headers: { 'x-apisports-key': KEY }
          })
        ]);

        const l1Data = await l1Res.json();
        const l2Data = await l2Res.json();

        const l1Teams = l1Data.response[0]?.league?.standings?.[0]?.map(t => t.team.name) || [];
        const l2Teams = l2Data.response[0]?.league?.standings?.[0]?.map(t => t.team.name) || [];

        const teams = [...l1Teams, ...l2Teams].sort();
        setAllTeams(teams);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teams:', error);
        setLoading(false);
      }
    };

    fetchTeams();

    // Load saved selections
    const saved = localStorage.getItem('followedTeams');
    if (saved) {
      setSelectedTeams(JSON.parse(saved));
    }
  }, []);

  const toggleTeam = (team) => {
    const newTeams = selectedTeams.includes(team)
      ? selectedTeams.filter(t => t !== team)
      : [...selectedTeams, team];
    
    setSelectedTeams(newTeams);
    localStorage.setItem('followedTeams', JSON.stringify(newTeams));
  };

  const selectAll = () => {
    setSelectedTeams(allTeams);
    localStorage.setItem('followedTeams', JSON.stringify(allTeams));
  };

  const clearAll = () => {
    setSelectedTeams([]);
    localStorage.setItem('followedTeams', JSON.stringify([]));
  };

  const testNotification = () => {
    if (selectedTeams.length === 0) {
      alert('Please select at least one team first!');
      return;
    }
    setNotification({
      team: selectedTeams[0],
      homeTeam: selectedTeams[0],
      awayTeam: 'Test Opponent',
      homeScore: 2,
      awayScore: 1
    });
    setTimeout(() => setNotification(null), 10000);
  };

  return (
    <>
      {/* Floating Football Button */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#10b981',
          border: 'none',
          fontSize: '30px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        ⚽
      </button>

      {/* Settings Panel */}
      {showSettings && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '350px',
          maxHeight: '500px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          zIndex: 9998,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Header */}
          <div style={{
            padding: '20px',
            borderBottom: '1px solid #e5e7eb',
            background: '#10b981',
            color: 'white'
          }}>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
              ⚽ Goal Notifications
            </h3>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
              {loading ? 'Loading teams...' : `${selectedTeams.length} teams selected`}
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{
            padding: '12px 20px',
            display: 'flex',
            gap: '8px',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <button
              onClick={selectAll}
              disabled={loading}
              style={{
                flex: 1,
                padding: '8px',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '13px',
                opacity: loading ? 0.5 : 1
              }}
            >
              Select All
            </button>
            <button
              onClick={clearAll}
              disabled={loading}
              style={{
                flex: 1,
                padding: '8px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '13px',
                opacity: loading ? 0.5 : 1
              }}
            >
              Clear All
            </button>
            <button
              onClick={testNotification}
              disabled={loading}
              style={{
                flex: 1,
                padding: '8px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '13px',
                opacity: loading ? 0.5 : 1
              }}
            >
              🧪 Test
            </button>
          </div>

          {/* Team List */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '12px 20px'
          }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280' }}>
                Loading teams...
              </div>
            ) : allTeams.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280' }}>
                No teams found
              </div>
            ) : (
              allTeams.map(team => (
                <label
                  key={team}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 0',
                    cursor: 'pointer',
                    borderBottom: '1px solid #f3f4f6'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedTeams.includes(team)}
                    onChange={() => toggleTeam(team)}
                    style={{
                      width: '18px',
                      height: '18px',
                      marginRight: '12px',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ fontSize: '14px', color: '#1f2937' }}>
                    {team}
                  </span>
                </label>
              ))
            )}
          </div>
        </div>
      )}

      {/* Goal Notification */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: '#10b981',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 9999,
          maxWidth: '300px',
          animation: 'slideIn 0.3s ease-out'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px' }}>
            ⚽ GOAL! {notification.team}
          </div>
          <div style={{ fontSize: '14px' }}>
            {notification.homeTeam} {notification.homeScore} - {notification.awayScore} {notification.awayTeam}
          </div>
        </div>
      )}
    </>
  );
}// Force redeploy at Thu 02/05/2026 18:28:10.45 

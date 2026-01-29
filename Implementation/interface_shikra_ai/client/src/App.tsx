import "./App.css";

type Severity = "low" | "medium" | "high" | "critical";

type Anomaly = {
  id: number;
  timestamp: string;
  type: string;
  severity: Severity;
  sourceIp: string;
  destinationIp: string;
  description: string;
};

function severityColor(severity: Severity): string {
  switch (severity) {
    case "low":
      return "#16a34a";
    case "medium":
      return "#f97316";
    case "high":
      return "#dc2626";
    case "critical":
      return "#7f1d1d";
    default:
      return "#6b7280";
  }
}

const mockAnomalies: Anomaly[] = [
  {
    id: 1,
    timestamp: new Date().toISOString(),
    type: "DDoS",
    severity: "high",
    sourceIp: "192.168.1.10",
    destinationIp: "10.0.0.5",
    description: "Unusually high traffic volume detected",
  },
  {
    id: 2,
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    type: "Port Scan",
    severity: "medium",
    sourceIp: "203.0.113.42",
    destinationIp: "10.0.0.10",
    description: "Multiple ports probed from single external host",
  },
  {
    id: 3,
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    type: "Data Exfiltration",
    severity: "critical",
    sourceIp: "10.0.0.7",
    destinationIp: "198.51.100.80",
    description: "Large outbound data transfer to unknown external host",
  },
];

function App() {
  return (
    <div className="nm-root">
      <aside className="nm-sidebar">
        <div className="nm-logo">Shikra AI</div>
        <nav className="nm-nav">
          <button className="nm-nav-item nm-nav-item--active">
            Realtime Monitor
          </button>
          <button className="nm-nav-item">Historical Analysis</button>
          <button className="nm-nav-item">Model Insights</button>
          <button className="nm-nav-item">Settings</button>
        </nav>
      </aside>
      <main className="nm-main">
        <header className="nm-header">
          <div>
            <h1 className="nm-title">AI Network Anomaly Dashboard</h1>
            <p className="nm-subtitle">
              Live detection of anomalies and attacks across your network.
            </p>
          </div>
          <div className="nm-header-actions">
            <div className="nm-status nm-status--ok">
              <span className="nm-status-dot" />
              Model online
            </div>
            <button className="nm-button nm-button--primary">
              Start Capture
            </button>
          </div>
        </header>

        <section className="nm-grid">
          <section className="nm-card nm-card--wide">
            <header className="nm-card-header">
              <h2>Realtime Traffic & Anomaly Score</h2>
              <span className="nm-chip">Coming soon: charts</span>
            </header>
            <div className="nm-placeholder-chart">
              <p>
                This area will show live traffic volume and anomaly scores over
                time once the AI model is integrated.
              </p>
            </div>
          </section>

          <section className="nm-card">
            <header className="nm-card-header">
              <h2>Summary</h2>
            </header>
            <div className="nm-summary-grid">
              <div className="nm-summary-item">
                <span className="nm-summary-label">Active anomalies</span>
                <span className="nm-summary-value">
                  {mockAnomalies.length}
                </span>
              </div>
              <div className="nm-summary-item">
                <span className="nm-summary-label">Critical / High</span>
                <span className="nm-summary-value nm-summary-value--danger">
                  {
                    mockAnomalies.filter(
                      (a) => a.severity === "critical" || a.severity === "high"
                    ).length
                  }
                </span>
              </div>
              <div className="nm-summary-item">
                <span className="nm-summary-label">Last update</span>
                <span className="nm-summary-value">
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>
          </section>
        </section>

        <section className="nm-card nm-card--full">
          <header className="nm-card-header">
            <h2>Detected Anomalies</h2>
            <div className="nm-card-header-actions">
              <select className="nm-select">
                <option>All severities</option>
                <option>Critical & High</option>
                <option>Medium & Low</option>
              </select>
              <input
                className="nm-input"
                placeholder="Search by IP, type, or description..."
              />
            </div>
          </header>
          <div className="nm-table">
            <div className="nm-table-row nm-table-row--head">
              <div>Time</div>
              <div>Type</div>
              <div>Severity</div>
              <div>Source IP</div>
              <div>Destination IP</div>
              <div>Description</div>
            </div>
            {mockAnomalies.map((anomaly) => (
              <div key={anomaly.id} className="nm-table-row">
                <div>
                  {new Date(anomaly.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </div>
                <div>{anomaly.type}</div>
                <div>
                  <span
                    className="nm-badge"
                    style={{ backgroundColor: severityColor(anomaly.severity) }}
                  >
                    {anomaly.severity.toUpperCase()}
                  </span>
                </div>
                <div>{anomaly.sourceIp}</div>
                <div>{anomaly.destinationIp}</div>
                <div>{anomaly.description}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

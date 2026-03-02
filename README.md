# 🚌 Bus Buddy — Admin Dashboard

A responsive transportation management admin dashboard built with **React.js**, **Tailwind CSS**, and containerized with **Docker**.

## Screenshot

> *(Add a screenshot here after running the app)*

---

## Tech Stack

| Technology   | Purpose                          |
|-------------|----------------------------------|
| React 18    | Frontend framework               |
| Tailwind CSS | Utility-first styling           |
| Leaflet.js  | Interactive map with bus markers |
| Lucide React | Icon library                   |
| Docker + Nginx | Containerized production build |

---

## Project Structure

```
bus-buddy/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Dark nav sidebar with active states
│   │   ├── Header.jsx           # Top bar: search, notifications, user
│   │   ├── StatCard.jsx         # Reusable metric card component
│   │   ├── StatusBadge.jsx      # Reusable colored badge component
│   │   ├── ActivityFeed.jsx     # Timeline activity log widget
│   │   ├── MapOverview.jsx      # Leaflet map with custom bus markers
│   │   └── MainDashboard.jsx    # Main content layout
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── README.md
```

---

## 🐳 Running with Docker (Recommended)

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/bus-buddy-dashboard.git
cd bus-buddy-dashboard

# 2. Build and start the container
docker-compose up --build

# 3. Open in browser
# Visit: http://localhost:3000
```

To stop the container:
```bash
docker-compose down
```

---

## 🖥️ Running Locally (Development)

### Prerequisites
- Node.js 18+
- npm or yarn

```bash
# Install dependencies
npm install

# Start development server
npm start

# App runs at: http://localhost:3000
```

---

## Features

- ✅ **Dark Sidebar** with active state highlighting and system status indicator
- ✅ **Stats Cards** — Active Trips, Safety Alerts, Absent Students with badges
- ✅ **Interactive Map** — Leaflet with custom bus markers (teal = normal, red = alert)
- ✅ **Vehicle Maintenance Log** — Color-coded urgency indicators
- ✅ **Recent Activity Feed** — Timeline with timestamped trip logs
- ✅ **Responsive Design** — Adapts to different screen sizes
- ✅ **Component-based Architecture** — Clean, reusable React components

---

## Commit Convention

```
feat: added sidebar navigation
feat: integrated Leaflet map with custom markers
feat: built StatCard reusable component
feat: implemented ActivityFeed timeline
fix: adjusted card spacing for responsiveness
chore: added Dockerfile and docker-compose
docs: updated README with setup instructions
```

---

*Developed for AIL Technology Internship Task*

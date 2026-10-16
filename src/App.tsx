import { useMemo, useState, type ReactNode } from "react"

type Page = "home" | "dashboard" | "settings" | "profile"
type IconName = "home" | "dashboard" | "settings" | "user" | "wind" | "bell" | "sun" | "moon" | "chevron" | "map" | "wifi" | "refresh" | "download" | "alert" | "device" | "database" | "check" | "arrow" | "forecast" | "activity" | "search" | "lock" | "logout" | "menu" | "close" | "more" | "clock" | "spark" | "shield" | "sliders" | "eye" | "plus"

const iconPaths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21H9.6v-.1A1.7 1.7 0 0 0 8.5 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.6-1H3v-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6V3h4v.1A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.6 1h.1v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  wind: (
    <>
      <path d="M4 8h10a3 3 0 1 0-3-3" />
      <path d="M4 12h15a2 2 0 1 1-2 2" />
      <path d="M4 16h8a3 3 0 1 1-3 3" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
    </>
  ),
  moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  map: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.6a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0" />
      <circle cx="12" cy="20" r=".8" fill="currentColor" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 7v5h-5" />
      <path d="M19 12a7 7 0 1 0-1.2 5" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m-4-4 4 4 4-4" />
      <path d="M4 20h16" />
    </>
  ),
  alert: (
    <>
      <path d="M10.3 3.8 2.4 18a2 2 0 0 0 1.8 3h15.6a2 2 0 0 0 1.8-3L13.7 3.8a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  device: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M9 6h6M10 18h4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  forecast: (
    <>
      <path d="M3 17 8 12l4 3 8-9" />
      <path d="M14 6h6v6" />
    </>
  ),
  activity: <path d="M3 12h4l2.5-7 5 14 2.5-7h4" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  logout: (
    <>
      <path d="M10 17l5-5-5-5M15 12H3" />
      <path d="M14 3h6v18h-6" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  more: (
    <>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  spark: (
    <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Zm6 11 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="8" cy="6" r="2" fill="var(--surface)" />
      <circle cx="16" cy="12" r="2" fill="var(--surface)" />
      <circle cx="10" cy="18" r="2" fill="var(--surface)" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
}

function Icon({ name, size = 18 }: { name: IconName size?: number }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  )
}

function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  type = "button",
}: {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "danger"
  icon?: IconName
  onClick?: () => void
  type?: "button" | "submit"
}) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {icon && <Icon name={icon} size={16} />}
      <span>{children}</span>
    </button>
  )
}

function Badge({
  children,
  tone = "neutral",
  dot = true,
}: {
  children: ReactNode
  tone?: "good" | "warning" | "danger" | "info" | "neutral"
  dot?: boolean
}) {
  return (
    <span className={`badge badge-${tone}`}>
      {dot && <i />}
      {children}
    </span>
  )
}

function Card({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <section className={`card ${className}`}>{children}</section>
}

function SelectControl({
  label,
  value,
  options,
}: {
  label?: string
  value: string
  options: string[]
}) {
  return (
    <label className="field compact-field">
      {label && <span>{label}</span>}
      <select defaultValue={value}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <Icon name="chevron" size={14} />
    </label>
  )
}

function TextField({
  label,
  value,
  type = "text",
  hint,
}: {
  label: string
  value: string
  type?: string
  hint?: string
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type={type} defaultValue={value} />
      {hint && <small>{hint}</small>}
    </label>
  )
}

function Toggle({
  checked = false,
  label,
  onChange,
}: {
  checked?: boolean
  label: string
  onChange?: () => void
}) {
  return (
    <button className="toggle-row" onClick={onChange} type="button">
      <span>{label}</span>
      <span className={`toggle ${checked ? "on" : ""}`}>
        <i />
      </span>
    </button>
  )
}

function Segmented({
  options,
  active,
  onSelect,
}: {
  options: string[]
  active: string
  onSelect: (value: string) => void
}) {
  return (
    <div className="segmented">
      {options.map((option) => (
        <button
          key={option}
          className={active === option ? "active" : ""}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

const linePoints = {
  pm25: "0,72 42,66 84,70 126,54 168,59 210,42 252,47 294,29 336,35 378,22 420,27 462,17 504,24 546,15 588,20",
  pm10: "0,78 42,72 84,65 126,68 168,50 210,55 252,40 294,47 336,33 378,39 420,28 462,34 504,21 546,25 588,16",
  pm1: "0,88 42,84 84,86 126,76 168,80 210,68 252,72 294,60 336,65 378,56 420,60 462,49 504,55 546,46 588,50",
}

function TrendChart({
  variant = "pm25",
  forecast = false,
  height = 130,
}: {
  variant?: keyof typeof linePoints
  forecast?: boolean
  height?: number
}) {
  const points = linePoints[variant]
  return (
    <div className="chart-wrap" style={{ height }}>
      <svg
        viewBox="0 0 588 110"
        preserveAspectRatio="none"
        role="img"
        aria-label="Sample particulate trend chart"
      >
        <defs>
          <linearGradient id={`fill-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity=".22" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 50, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="588" y2={y} className="grid-line" />
        ))}
        <polygon
          points={`${points} 588,110 0,110`}
          fill={`url(#fill-${variant})`}
          className={`area-${variant}`}
        />
        <polyline points={points} className={`line line-${variant}`} />
        {forecast && (
          <>
            <rect
              x="420"
              y="0"
              width="168"
              height="110"
              className="forecast-zone"
            />
            <polyline
              points="420,27 462,31 504,22 546,38 588,32"
              className="line prediction-line"
            />
          </>
        )}
      </svg>
    </div>
  )
}

function MiniTrend({
  up = true,
  tone = "green",
}: {
  up?: boolean
  tone?: "green" | "cyan" | "orange" | "red"
}) {
  return (
    <svg
      className={`mini-trend ${tone}`}
      viewBox="0 0 76 28"
      preserveAspectRatio="none"
    >
      <polyline
        points={
          up
            ? "1,23 15,18 28,20 42,10 56,13 75,4"
            : "1,5 15,9 28,7 42,18 56,14 75,24"
        }
      />
    </svg>
  )
}

const sampleAlerts = [
  {
    type: "Threshold",
    title: "PM2.5 exceeded campus advisory level",
    location: "Engineering Block",
    time: "12 min ago",
    tone: "danger" as const,
  },
  {
    type: "Forecast",
    title: "Elevated particulate level predicted in 3h",
    location: "North Gate",
    time: "28 min ago",
    tone: "warning" as const,
  },
  {
    type: "Device",
    title: "Sensor sync restored successfully",
    location: "Library",
    time: "1 hr ago",
    tone: "info" as const,
  },
]

function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="section-title">
      <div>
        <div className="title-md">{title}</div>
        {subtitle && <div className="muted">{subtitle}</div>}
      </div>
      {action}
    </div>
  )
}

function Sidebar({
  page,
  setPage,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: {
  page: Page
  setPage: (page: Page) => void
  collapsed: boolean
  setCollapsed: (v: boolean) => void
  mobileOpen: boolean
  setMobileOpen: (v: boolean) => void
}) {
  const nav: { id: Page label: string icon: IconName }[] = [
    { id: "home", label: "Home", icon: "home" },
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "settings", label: "Settings", icon: "settings" },
    { id: "profile", label: "Profile", icon: "user" },
  ]
  return (
    <aside
      className={`sidebar ${collapsed ? "collapsed" : ""} ${
        mobileOpen ? "mobile-open" : ""
      }`}
    >
      <div className="brand">
        <div className="brand-mark">
          <Icon name="wind" size={22} />
        </div>
        <div className="brand-copy">
          <b>AeroSense</b>
          <span>AI intelligence</span>
        </div>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>
          <Icon name="close" />
        </button>
      </div>
      <nav className="side-nav">
        <div className="nav-label">Workspace</div>
        {nav.map((item) => (
          <button
            key={item.id}
            className={page === item.id ? "active" : ""}
            onClick={() => {
              setPage(item.id)
              setMobileOpen(false)
            }}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
            {page === item.id && <i />}
          </button>
        ))}
      </nav>
      <div className="side-status">
        <div className="status-orb">
          <span />
          <Icon name="wifi" />
        </div>
        <div>
          <b>System online</b>
          <span>4 sensors connected</span>
        </div>
      </div>
      <div className="side-user">
        <div className="avatar avatar-sm">AM</div>
        <div>
          <b>Alex Morgan</b>
          <span>System Administrator</span>
        </div>
        <Icon name="more" />
      </div>
      <button
        className="collapse-btn"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Collapse sidebar"
      >
        <Icon name="chevron" />
      </button>
    </aside>
  )
}

function Topbar({
  page,
  dark,
  setDark,
  onMenu,
}: {
  page: Page
  dark: boolean
  setDark: (value: boolean) => void
  onMenu: () => void
}) {
  const [notifications, setNotifications] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)
  return (
    <header className="topbar">
      <button className="icon-btn mobile-menu" onClick={onMenu}>
        <Icon name="menu" />
      </button>
      <div className="page-heading">
        <span>Overview / {page[0].toUpperCase() + page.slice(1)}</span>
        <b>{page[0].toUpperCase() + page.slice(1)}</b>
      </div>
      <div className="top-actions">
        <SelectControl
          value="Main Campus"
          options={["Main Campus", "North Campus", "Innovation Hub"]}
        />
        <Badge tone="good">All systems operational</Badge>
        <div className="popover-wrap">
          <button
            className="icon-btn"
            onClick={() => setNotifications(!notifications)}
            aria-label="Notifications"
          >
            <Icon name="bell" />
            <i className="notification-dot" />
          </button>
          {notifications && (
            <div className="popover notification-pop">
              <SectionTitle
                title="Notifications"
                action={
                  <Badge tone="danger" dot={false}>
                    2 new
                  </Badge>
                }
              />
              {sampleAlerts.slice(0, 2).map((a) => (
                <div className="notification-item" key={a.title}>
                  <span className={`alert-icon ${a.tone}`}>
                    <Icon name="alert" size={15} />
                  </span>
                  <div>
                    <b>{a.title}</b>
                    <span>
                      {a.time} · {a.location}
                    </span>
                  </div>
                </div>
              ))}
              <Button variant="ghost">View all notifications</Button>
            </div>
          )}
        </div>
        <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          <span className={!dark ? "active" : ""}>
            <Icon name="sun" size={15} />
          </span>
          <span className={dark ? "active" : ""}>
            <Icon name="moon" size={15} />
          </span>
        </button>
        <div className="popover-wrap">
          <button
            className="avatar-button"
            onClick={() => setProfileMenu(!profileMenu)}
          >
            <div className="avatar">AM</div>
            <Icon name="chevron" size={13} />
          </button>
          {profileMenu && (
            <div className="popover profile-pop">
              <b>Alex Morgan</b>
              <span>alex@aerosense.edu</span>
              <hr />
              <button>
                <Icon name="user" />
                View profile
              </button>
              <button>
                <Icon name="settings" />
                Preferences
              </button>
              <button className="danger-text">
                <Icon name="logout" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function AQIHero({ compact = false }: { compact?: boolean }) {
  return (
    <Card className={`aqi-hero ${compact ? "compact" : ""}`}>
      <div className="aqi-top">
        <div>
          <span className="eyebrow">Current air quality</span>
          <div className="aqi-number">42</div>
          <Badge tone="good">Good</Badge>
        </div>
        <div className="aqi-gauge">
          <svg viewBox="0 0 160 90">
            <path d="M15 80a65 65 0 0 1 130 0" className="gauge-bg" />
            <path d="M15 80a65 65 0 0 1 130 0" className="gauge-fill" />
            <line x1="80" y1="80" x2="48" y2="35" />
            <circle cx="80" cy="80" r="7" />
          </svg>
          <span>Limited AQ indicator*</span>
        </div>
      </div>
      <div className="aqi-meta">
        <span>
          <Icon name="map" size={14} />
          Engineering Block
        </span>
        <span>
          <Icon name="clock" size={14} />
          Updated 26 sec ago
        </span>
      </div>
      <div className="aqi-scale">
        <i />
        <i />
        <i />
        <i />
        <span style={{ left: "18%" }} />
      </div>
      <small>
        *Prototype indicator based on available particulate readings. Sample
        data.
      </small>
    </Card>
  )
}

function MetricCard({
  label,
  value,
  unit,
  trend,
  tone = "green",
  icon,
}: {
  label: string
  value: string
  unit: string
  trend: string
  tone?: "green" | "cyan" | "orange" | "red"
  icon?: IconName
}) {
  return (
    <Card className="metric-card">
      <div className="metric-head">
        <span>{label}</span>
        {icon ? (
          <span className={`metric-icon ${tone}`}>
            <Icon name={icon} />
          </span>
        ) : (
          <Badge tone="good">Normal</Badge>
        )}
      </div>
      <div className="metric-value">
        {value}
        <small>{unit}</small>
      </div>
      <div className="metric-foot">
        <span className={trend.startsWith("↑") ? "trend-up" : "trend-down"}>
          {trend}
        </span>
        <MiniTrend up={trend.startsWith("↑")} tone={tone} />
      </div>
    </Card>
  )
}

function AlertsList({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="alert-list">
      {sampleAlerts.map((alert) => (
        <div className="alert-row" key={alert.title}>
          <span className={`alert-icon ${alert.tone}`}>
            <Icon
              name={alert.type === "Device" ? "device" : "alert"}
              size={17}
            />
          </span>
          <div className="alert-copy">
            <div>
              <Badge tone={alert.tone} dot={false}>
                {alert.type}
              </Badge>
              <b>{alert.title}</b>
            </div>
            <span>
              {alert.location} · {alert.time}
            </span>
          </div>
          {detailed && (
            <Badge tone={alert.type === "Device" ? "good" : "warning"}>
              {alert.type === "Device" ? "Resolved" : "Monitoring"}
            </Badge>
          )}
          <button className="more-btn">
            <Icon name="more" size={17} />
          </button>
        </div>
      ))}
    </div>
  )
}

function HomePage({ goDashboard }: { goDashboard: () => void }) {
  return (
    <div className="page home-page">
      <div className="welcome-row">
        <div>
          <Badge tone="info">AI-powered environmental intelligence</Badge>
          <div className="title-xl">Campus Air Quality Intelligence</div>
          <p>Monitor pollution. Predict trends. Make informed decisions.</p>
          <div className="hero-actions">
            <Button icon="dashboard" onClick={goDashboard}>
              Open Dashboard
            </Button>
            <Button variant="secondary" icon="forecast">
              View Forecast
            </Button>
          </div>
        </div>
        <div className="system-time">
          <span>Tuesday, 24 June</span>
          <b>10:42 AM</b>
        </div>
      </div>
      <div className="home-overview">
        <AQIHero />
        <div className="pm-grid">
          <MetricCard label="PM1.0" value="8.4" unit="µg/m³" trend="↓ 3.2%" />
          <MetricCard
            label="PM2.5"
            value="12.8"
            unit="µg/m³"
            trend="↑ 2.4%"
            tone="cyan"
          />
          <MetricCard
            label="PM10"
            value="24.6"
            unit="µg/m³"
            trend="↓ 1.8%"
            tone="orange"
          />
          <Card className="sensor-summary">
            <div className="sensor-visual">
              <Icon name="device" size={24} />
              <i />
            </div>
            <div>
              <span>ESP32 sensor hub</span>
              <b>Online & collecting</b>
              <small>
                <Icon name="refresh" size={12} /> Synced 26 sec ago
              </small>
            </div>
          </Card>
        </div>
      </div>
      <div className="two-col home-charts">
        <Card>
          <SectionTitle
            title="Air quality trend"
            subtitle="Particulate measurements · Last 6 hours"
            action={
              <button className="text-btn">
                View details <Icon name="arrow" size={14} />
              </button>
            }
          />
          <TrendChart forecast />
          <div className="chart-axis">
            <span>05:00</span>
            <span>07:00</span>
            <span>09:00</span>
            <span>Now</span>
          </div>
          <div className="legend">
            <span>
              <i className="solid cyan" />
              PM2.5 measured
            </span>
            <span>
              <i className="dashed" />
              Predicted
            </span>
          </div>
        </Card>
        <Card>
          <SectionTitle
            title="Next 6-hour forecast"
            subtitle="1D-CNN–BiGRU · Generated 10:40 AM"
            action={<Badge tone="good">Stable</Badge>}
          />
          <div className="forecast-bars">
            {[
              ["11 AM", 38],
              ["12 PM", 42],
              ["1 PM", 47],
              ["2 PM", 44],
              ["3 PM", 39],
              ["4 PM", 36],
            ].map(([time, value], i) => (
              <div key={time as string}>
                <span>{value}</span>
                <i
                  style={{ height: `${Number(value)}%` }}
                  className={i === 2 ? "warm" : ""}
                />
                <small>{time}</small>
              </div>
            ))}
          </div>
          <div className="forecast-note">
            <Icon name="spark" />
            <div>
              <b>Conditions expected to remain stable</b>
              <span>Peak particulate level forecast around 1:00 PM</span>
            </div>
          </div>
        </Card>
      </div>
      <div className="two-col bottom-grid">
        <Card>
          <SectionTitle
            title="Recent alerts"
            subtitle="Latest campus notifications"
            action={<button className="text-btn">View all</button>}
          />
          <AlertsList />
        </Card>
        <Card>
          <SectionTitle
            title="Monitoring locations"
            subtitle="4 active locations"
            action={
              <Button variant="ghost" icon="plus">
                Add location
              </Button>
            }
          />
          <div className="location-list">
            {[
              "Engineering Block",
              "Central Library",
              "North Gate",
              "Innovation Hub",
            ].map((loc, i) => (
              <div key={loc}>
                <span className="location-pin">
                  <Icon name="map" size={15} />
                </span>
                <div>
                  <b>{loc}</b>
                  <span>
                    ESP32-{String(i + 1).padStart(3, "0")} · Updated{" "}
                    {i ? `${i + 1}m` : "26s"} ago
                  </span>
                </div>
                <Badge tone={i === 2 ? "warning" : "good"}>
                  {i === 2 ? "Elevated" : "Good"}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

function ChartCard({
  title,
  subtitle,
  variant = "pm25",
  forecast = false,
  tall = false,
}: {
  title: string
  subtitle: string
  variant?: keyof typeof linePoints
  forecast?: boolean
  tall?: boolean
}) {
  return (
    <Card className="chart-card">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        action={
          <button className="icon-btn">
            <Icon name="more" />
          </button>
        }
      />
      <TrendChart
        variant={variant}
        forecast={forecast}
        height={tall ? 190 : 125}
      />
      <div className="chart-axis">
        <span>06:00</span>
        <span>10:00</span>
        <span>14:00</span>
        <span>18:00</span>
        <span>Now</span>
      </div>
    </Card>
  )
}

function DashboardPage() {
  const [range, setRange] = useState("6 hours")
  const [horizon, setHorizon] = useState("6h forecast")
  const kpis = [
    {
      label: "Limited AQ indicator",
      value: "42",
      unit: "Good",
      trend: "↓ 4.2%",
      tone: "green" as const,
    },
    {
      label: "PM1.0",
      value: "8.4",
      unit: "µg/m³",
      trend: "↓ 3.2%",
      tone: "green" as const,
    },
    {
      label: "PM2.5",
      value: "12.8",
      unit: "µg/m³",
      trend: "↑ 2.4%",
      tone: "cyan" as const,
    },
    {
      label: "PM10",
      value: "24.6",
      unit: "µg/m³",
      trend: "↓ 1.8%",
      tone: "orange" as const,
    },
    {
      label: "ESP32 devices",
      value: "4",
      unit: "4 online",
      trend: "All synced",
      tone: "cyan" as const,
      icon: "device" as const,
    },
    {
      label: "Active alerts",
      value: "2",
      unit: "1 forecast",
      trend: "Requires review",
      tone: "red" as const,
      icon: "alert" as const,
    },
  ]
  return (
    <div className="page dashboard-page">
      <div className="page-intro">
        <div>
          <div className="title-lg">Live monitoring dashboard</div>
          <p>
            Real-time particulate measurements and AI-powered forecasting across
            campus.
          </p>
        </div>
        <div className="last-updated">
          <i />
          Live · Updated 26 sec ago
        </div>
      </div>
      <div className="filter-bar">
        <SelectControl
          label="Location"
          value="All locations"
          options={[
            "All locations",
            "Engineering Block",
            "Central Library",
            "North Gate",
          ]}
        />
        <div className="filter-group">
          <span>Time range</span>
          <Segmented
            options={["1 hour", "6 hours", "24 hours", "7 days"]}
            active={range}
            onSelect={setRange}
          />
        </div>
        <SelectControl
          label="Forecast horizon"
          value={horizon}
          options={["1h forecast", "3h forecast", "6h forecast"]}
        />
        <div className="filter-actions">
          <Button variant="secondary" icon="refresh">
            Refresh
          </Button>
          <Button icon="download">Export data</Button>
        </div>
      </div>
      <div className="kpi-grid">
        {kpis.map((item) => (
          <MetricCard key={item.label} {...item} />
        ))}
      </div>
      <div className="dash-grid">
        <ChartCard
          title="PM2.5 historical trend"
          subtitle="Measured concentration (µg/m³) · Sample data"
          tall
        />
        <ChartCard
          title="PM10 historical trend"
          subtitle="Measured concentration (µg/m³) · Sample data"
          variant="pm10"
          tall
        />
        <Card className="wide-chart">
          <SectionTitle
            title="Actual vs predicted pollution indicator"
            subtitle="Measured values and 1D-CNN–BiGRU forecast · Sample data"
            action={<Badge tone="info">Model v1.4.2</Badge>}
          />
          <TrendChart forecast height={190} />
          <div className="chart-axis">
            <span>6 AM</span>
            <span>9 AM</span>
            <span>12 PM</span>
            <span>3 PM</span>
            <span>6 PM</span>
            <span>9 PM</span>
          </div>
          <div className="legend">
            <span>
              <i className="solid cyan" />
              Actual measurement
            </span>
            <span>
              <i className="dashed" />
              Predicted · 1–6h
            </span>
            <span>
              <i className="zone" />
              Future region
            </span>
          </div>
        </Card>
        <Card>
          <SectionTitle
            title="Location comparison"
            subtitle="Current PM2.5 · µg/m³"
          />
          <div className="comparison">
            {[
              ["Engineering", 12.8],
              ["Library", 9.4],
              ["North Gate", 18.6],
              ["Innovation", 7.8],
            ].map(([name, val]) => (
              <div key={name as string}>
                <span>{name}</span>
                <div>
                  <i
                    style={{ width: `${Number(val) * 4}%` }}
                    className={Number(val) > 15 ? "warn" : ""}
                  />
                </div>
                <b>{val}</b>
              </div>
            ))}
          </div>
          <div className="model-info">
            <span className="metric-icon cyan">
              <Icon name="spark" />
            </span>
            <div>
              <b>1D-CNN–BiGRU forecast</b>
              <span>Generated at 10:40 AM · Horizons: 1–6 hours</span>
            </div>
          </div>
        </Card>
      </div>
      <div className="two-col device-alert-grid">
        <Card>
          <SectionTitle
            title="IoT device status"
            subtitle="ESP32 + PMS5003 sensor network"
            action={<Button variant="ghost">Manage devices</Button>}
          />
          <div className="device-table">
            <div className="table-head">
              <span>Device</span>
              <span>Location</span>
              <span>Sensor</span>
              <span>Database</span>
              <span>Last seen</span>
            </div>
            {[
              ["ESP32-001", "Engineering Block", "Online", "Synced", "26 sec"],
              ["ESP32-002", "Central Library", "Online", "Synced", "1 min"],
              ["ESP32-003", "North Gate", "Online", "Delayed", "3 min"],
            ].map((row, i) => (
              <div className="table-row" key={row[0]}>
                <span>
                  <i className="device-dot" />
                  <b>{row[0]}</b>
                </span>
                <span>{row[1]}</span>
                <Badge tone="good">{row[2]}</Badge>
                <Badge tone={i === 2 ? "warning" : "info"}>{row[3]}</Badge>
                <span>{row[4]} ago</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionTitle
            title="Active alerts"
            subtitle="Threshold and forecast warnings"
            action={<button className="text-btn">View all</button>}
          />
          <AlertsList detailed />
        </Card>
      </div>
    </div>
  )
}

const settingsTabs = [
  { id: "General", icon: "sliders" as IconName },
  { id: "Appearance", icon: "sun" as IconName },
  { id: "Monitoring", icon: "activity" as IconName },
  { id: "IoT & database", icon: "database" as IconName },
  { id: "Notifications", icon: "bell" as IconName },
]

function SettingRow({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="setting-row">
      <div>
        <b>{title}</b>
        <span>{description}</span>
      </div>
      {children}
    </div>
  )
}

function SettingsPage({
  dark,
  setDark,
}: {
  dark: boolean
  setDark: (v: boolean) => void
}) {
  const [tab, setTab] = useState("General")
  const [saved, setSaved] = useState(false)
  const content = useMemo(() => {
    if (tab === "General")
      return (
        <>
          <SectionTitle
            title="General settings"
            subtitle="Manage core application and campus preferences."
          />
          <div className="form-grid">
            <TextField label="Application name" value="AeroSense AI" />
            <TextField label="Campus / institution" value="Main Campus" />
            <SelectControl
              label="Time zone"
              value="UTC +05:30 · Asia/Colombo"
              options={[
                "UTC +05:30 · Asia/Colombo",
                "UTC +00:00 · London",
                "UTC -05:00 · New York",
              ]}
            />
            <SelectControl
              label="Date & time format"
              value="24 Jun 2025 · 10:42"
              options={["24 Jun 2025 · 10:42", "Jun 24, 2025 · 10:42 AM"]}
            />
            <SelectControl
              label="Default monitoring location"
              value="Engineering Block"
              options={["Engineering Block", "Central Library", "North Gate"]}
            />
          </div>
        </>
      )
    if (tab === "Appearance")
      return (
        <>
          <SectionTitle
            title="Appearance"
            subtitle="Customize how AeroSense looks and feels."
          />
          <div className="theme-options">
            <button
              className={!dark ? "selected" : ""}
              onClick={() => setDark(false)}
            >
              <span className="theme-preview light-preview">
                <i />
                <i />
                <i />
              </span>
              <span>
                <b>Light</b>
                <small>Bright and clean</small>
              </span>
              {!dark && <Icon name="check" />}
            </button>
            <button
              className={dark ? "selected" : ""}
              onClick={() => setDark(true)}
            >
              <span className="theme-preview dark-preview">
                <i />
                <i />
                <i />
              </span>
              <span>
                <b>Dark</b>
                <small>Easy on the eyes</small>
              </span>
              {dark && <Icon name="check" />}
            </button>
            <button>
              <span className="theme-preview system-preview">
                <i />
                <i />
                <i />
              </span>
              <span>
                <b>System</b>
                <small>Match your device</small>
              </span>
            </button>
          </div>
          <SettingRow
            title="Interface density"
            description="Choose how much information fits on the screen."
          >
            <Segmented
              options={["Comfortable", "Compact"]}
              active="Comfortable"
              onSelect={() => {}}
            />
          </SettingRow>
          <SettingRow
            title="Reduce motion"
            description="Minimize non-essential interface animations."
          >
            <Toggle label="" checked={false} />
          </SettingRow>
        </>
      )
    if (tab === "Monitoring")
      return (
        <>
          <SectionTitle
            title="Monitoring preferences"
            subtitle="Control dashboard defaults and data freshness."
          />
          <div className="form-grid">
            <SelectControl
              label="Default pollutant"
              value="PM2.5"
              options={["PM1.0", "PM2.5", "PM10"]}
            />
            <SelectControl
              label="Dashboard refresh interval"
              value="30 seconds"
              options={["10 seconds", "30 seconds", "1 minute", "5 minutes"]}
            />
            <SelectControl
              label="Default forecast horizon"
              value="6 hours"
              options={["1 hour", "3 hours", "6 hours"]}
            />
            <SelectControl
              label="Default chart range"
              value="24 hours"
              options={["1 hour", "6 hours", "24 hours", "7 days"]}
            />
          </div>
          <SettingRow
            title="Stale-data warning"
            description="Alert when a device has not sent data for 5 minutes."
          >
            <Toggle label="" checked />
          </SettingRow>
          <SettingRow
            title="Show prediction confidence band"
            description="Display model uncertainty around future forecasts."
          >
            <Toggle label="" checked />
          </SettingRow>
        </>
      )
    if (tab === "IoT & database")
      return (
        <>
          <SectionTitle
            title="IoT & database integration"
            subtitle="Review hardware and backend connection health."
          />
          <div className="integration-grid">
            {[
              ["ESP32 connection", "Connected", "device"],
              ["PMS5003 communication", "Receiving data", "wind"],
              ["Backend API", "Operational", "activity"],
              ["Database integration", "Synchronized", "database"],
            ].map(([name, status, icon]) => (
              <div key={name}>
                <span className="metric-icon green">
                  <Icon name={icon as IconName} />
                </span>
                <div>
                  <b>{name}</b>
                  <Badge tone="good">{status}</Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="form-grid">
            <TextField label="Device ID" value="ESP32-001" />
            <SelectControl
              label="Assigned location"
              value="Engineering Block"
              options={["Engineering Block", "Central Library", "North Gate"]}
            />
            <TextField
              label="API endpoint"
              value="https://api.aerosense.example/v1"
              hint="Credentials are securely managed and never displayed."
            />
          </div>
          <div className="sync-banner">
            <Icon name="check" />
            <div>
              <b>Last successful synchronization</b>
              <span>Today at 10:41:34 AM · 26 seconds ago</span>
            </div>
            <Button variant="secondary" icon="refresh">
              Test connections
            </Button>
          </div>
        </>
      )
    return (
      <>
        <SectionTitle
          title="Notification preferences"
          subtitle="Choose which system events should notify you."
        />
        <SettingRow
          title="In-app notifications"
          description="Receive alerts while using AeroSense."
        >
          <Toggle label="" checked />
        </SettingRow>
        <SettingRow
          title="AQI threshold alerts"
          description="Notify when particulate readings exceed configured limits."
        >
          <Toggle label="" checked />
        </SettingRow>
        <SettingRow
          title="Forecast-based warnings"
          description="Receive 1–6 hour advance pollution warnings."
        >
          <Toggle label="" checked />
        </SettingRow>
        <SettingRow
          title="Sensor offline alerts"
          description="Notify when an ESP32 device stops reporting."
        >
          <Toggle label="" checked />
        </SettingRow>
        <div className="form-grid single">
          <SelectControl
            label="Minimum notification severity"
            value="Warning and critical"
            options={[
              "All notifications",
              "Warning and critical",
              "Critical only",
            ]}
          />
        </div>
      </>
    )
  }, [tab, dark, setDark])
  return (
    <div className="page settings-page">
      <div className="page-intro">
        <div>
          <div className="title-lg">Settings</div>
          <p>
            Configure your AeroSense workspace, monitoring and integrations.
          </p>
        </div>
      </div>
      <div className="settings-layout">
        <Card className="settings-nav">
          {settingsTabs.map((item) => (
            <button
              key={item.id}
              className={tab === item.id ? "active" : ""}
              onClick={() => setTab(item.id)}
            >
              <Icon name={item.icon} />
              <span>{item.id}</span>
              <Icon name="chevron" size={14} />
            </button>
          ))}
        </Card>
        <Card className="settings-content">
          {content}
          <div className="settings-actions">
            <Button variant="ghost">Reset to defaults</Button>
            <div>
              <Button variant="secondary">Cancel</Button>
              <Button
                onClick={() => {
                  setSaved(true)
                  setTimeout(() => setSaved(false), 2200)
                }}
              >
                {saved ? "Changes saved" : "Save changes"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function ProfilePage({ dark }: { dark: boolean }) {
  const [saved, setSaved] = useState(false)
  return (
    <div className="page profile-page">
      <div className="page-intro">
        <div>
          <div className="title-lg">Profile & account</div>
          <p>Manage your personal information and account preferences.</p>
        </div>
      </div>
      <div className="profile-layout">
        <div>
          <Card className="profile-summary">
            <div className="profile-avatar">
              AM
              <span>
                <Icon name="plus" size={15} />
              </span>
            </div>
            <div className="title-md">Alex Morgan</div>
            <span>alex.morgan@aerosense.edu</span>
            <Badge tone="info">System Administrator</Badge>
            <div className="profile-stats">
              <div>
                <b>4</b>
                <span>Locations</span>
              </div>
              <div>
                <b>128</b>
                <span>Reports</span>
              </div>
            </div>
            <Button variant="secondary" icon="logout">
              Sign out
            </Button>
          </Card>
          <Card className="account-health">
            <SectionTitle title="Account security" />
            <div>
              <Icon name="shield" />
              <div>
                <b>Account protected</b>
                <span>Password updated 34 days ago</span>
              </div>
            </div>
            <Button variant="ghost" icon="lock">
              Change password
            </Button>
          </Card>
        </div>
        <Card className="profile-form">
          <SectionTitle
            title="Personal information"
            subtitle="Update your profile details and workspace defaults."
          />
          <div className="form-grid">
            <TextField label="Full name" value="Alex Morgan" />
            <TextField
              label="Email address"
              value="alex.morgan@aerosense.edu"
              type="email"
            />
            <TextField label="Role" value="System Administrator" />
            <TextField label="Department" value="AI & Data Science" />
            <SelectControl
              label="Preferred theme"
              value={dark ? "Dark" : "Light"}
              options={["Light", "Dark", "System"]}
            />
            <SelectControl
              label="Default monitoring location"
              value="Engineering Block"
              options={["Engineering Block", "Central Library", "North Gate"]}
            />
          </div>
          <div className="subsection">
            <div className="title-sm">Notification preferences</div>
            <SettingRow
              title="Important air-quality alerts"
              description="Threshold events and high-severity forecasts."
            >
              <Toggle label="" checked />
            </SettingRow>
            <SettingRow
              title="Weekly monitoring summary"
              description="A concise email report every Monday."
            >
              <Toggle label="" checked />
            </SettingRow>
            <SettingRow
              title="Device health updates"
              description="Connectivity and synchronization notices."
            >
              <Toggle label="" checked={false} />
            </SettingRow>
          </div>
          <div className="settings-actions profile-actions">
            <span />
            <div>
              <Button variant="secondary">Cancel</Button>
              <Button
                onClick={() => {
                  setSaved(true)
                  setTimeout(() => setSaved(false), 2200)
                }}
              >
                {saved ? "Profile saved" : "Save changes"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("home")
  const [dark, setDark] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className={`app-shell ${dark ? "dark" : ""}`}>
      <Sidebar
        page={page}
        setPage={setPage}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}
      <div className="main-shell">
        <Topbar
          page={page}
          dark={dark}
          setDark={setDark}
          onMenu={() => setMobileOpen(true)}
        />
        <main>
          {page === "home" && (
            <HomePage goDashboard={() => setPage("dashboard")} />
          )}
          {page === "dashboard" && <DashboardPage />}
          {page === "settings" && (
            <SettingsPage dark={dark} setDark={setDark} />
          )}
          {page === "profile" && <ProfilePage dark={dark} />}
        </main>
        <footer>
          <span>AeroSense AI · Environmental Intelligence Platform</span>
          <span>
            Prototype data for demonstration · Model: 1D-CNN–BiGRU v1.4.2
          </span>
        </footer>
      </div>
    </div>
  )
}

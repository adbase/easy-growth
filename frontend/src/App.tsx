import { useEffect, useState } from 'react'
import './App.css'

type HealthResponse = {
  status: string
  service: string
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
        return res.json() as Promise<HealthResponse>
      })
      .then(setHealth)
      .catch(() =>
        setError('无法连接后端，请先启动 backend（端口 8080）'),
      )
  }, [])

  return (
    <main className="shell">
      <header className="header">
        <h1>Easy Growth OS</h1>
        <p className="muted">React 前端 · Spring Boot API</p>
      </header>

      <section className="card">
        <h2>后端状态</h2>
        {error && <p className="error">{error}</p>}
        {health && (
          <dl className="kv">
            <div>
              <dt>status</dt>
              <dd>{health.status}</dd>
            </div>
            <div>
              <dt>service</dt>
              <dd>{health.service}</dd>
            </div>
          </dl>
        )}
        {!error && !health && <p className="muted">加载中…</p>}
      </section>
    </main>
  )
}

export default App

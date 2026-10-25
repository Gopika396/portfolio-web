import { useState, useEffect } from 'react'
import { me, words, training, education, cats, projects, featured, skills } from './data.js'

const PAGES = [['home', 'Home'], ['projects', 'Projects'], ['about', 'About'], ['contact', 'Contact']]
const COL = ['g', 'p', 'b', 'o']
const Card = ({ p, i, n }) => (
  <a className={'card ' + COL[i % 4]} href={p.url} target="_blank" rel="noreferrer" style={{ '--d': i * 70 + 'ms' }}>
    <span className="num">{String(n).padStart(2, '0')}</span><span className="arr">↗</span>
    <h3>{p.title}</h3>
    {p.d && <p>{p.d}</p>}
    <div className="tags"><em>{p.cat}</em>{p.tech.map((t) => <em key={t}>{t}</em>)}{p.month && <em>{p.month}</em>}</div>
  </a>
)

function Home({ go }) {
  const [w, setW] = useState(0)
  useEffect(() => { const t = setInterval(() => setW((x) => (x + 1) % words.length), 1800); return () => clearInterval(t) }, [])
  const f = featured.map((r) => projects.find((p) => p.repo === r))
  const names = projects.map((p) => p.title)
  return (
    <>
      <section className="wrap hero">
        <div>
          <p className="eyebrow">BCA graduate and MCA student | Web developer</p>
          <h1>Hi, I'm {me.first}.<br />I build websites for <span className="word" key={w}>{words[w]}</span></h1>
          <p className="lead">BCA graduate from SSMRV College, Bengaluru, now pursuing MCA at Dayananda Sagar University. I love turning ideas into clean, responsive websites with HTML, CSS and JavaScript, and I am training in Python Full Stack.</p>
          <div className="cta"><a className="btn" href="#/projects">See my work</a><a className="btn ghost" href="#/contact">Contact me</a></div>
        </div>
        <div className="hero-art">
          <img src={me.photo} alt={me.name} />
          <svg className="sticker" viewBox="0 0 128 128" aria-hidden="true"><circle cx="64" cy="64" r="64" fill="#ff5b2e" />
            <defs><path id="cc" d="M64,64 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
            <text><textPath href="#cc" textLength="284" lengthAdjust="spacing">IN TRAINING · PYTHON FULL STACK · </textPath></text></svg>
        </div>
      </section>
      <div className="marquee" aria-hidden="true"><div className="track">{[...names, ...names].map((n, i) => <span key={i}>{n}<b>✦</b></span>)}</div></div>
      <section className="wrap block">
        <h2 className="title">Featured work</h2>
        <div className="grid2">{f.map((p, i) => <Card key={p.repo} p={p} i={i} n={i + 1} />)}</div>
        <a className="btn ghost more" href="#/projects">See all {projects.length} projects →</a>
      </section>
    </>
  )
}

function Projects() {
  const [cat, setCat] = useState('All')
  const list = projects.filter((p) => cat === 'All' || p.cat === cat)
  return (
    <section className="wrap block">
      <h2 className="title big">All projects <sup>{projects.length}</sup></h2>
      <p className="muted">Latest first. Tap a card to open the live site.</p>
      <div className="chips">{['All', ...cats].map((c) => <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
      <div className="grid4" key={cat}>{list.map((p, i) => <Card key={p.repo} p={{ ...p, d: '' }} i={i} n={projects.indexOf(p) + 1} />)}</div>
    </section>
  )
}

const About = () => (
  <section className="wrap block">
    <div className="grid2 about">
      <div>
        <h2 className="title big">About me</h2>
        <p className="lead">BCA graduate from SSMRV College, now pursuing MCA at Dayananda Sagar University. I love turning ideas into clean, responsive websites with HTML, CSS and JavaScript.</p>
        <p className="lead">I have built {projects.length} projects, from shops and cafes to banks and clinics, and I improve a little with every one.</p>
        <div className="info"><b>Education</b>{education.map((e) => <p key={e.degree}>{e.degree}<br /><span className="muted">{e.place} · {e.status}</span></p>)}</div>
        <div className="info train"><b>Training</b><p>{training.course}</p><span className="muted">{training.company}</span></div>
      </div>
      <div>
        <h2 className="title">Skills</h2>
        {skills.map(([k, v], gi) => (
          <div key={k} className="sk"><h3>{k}</h3><div>{v.map((s) => <span key={s} className={'pill ' + COL[gi % 4]}>{s}</span>)}</div></div>))}
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section className="wrap block contact">
    <p className="eyebrow">Email is the fastest way to reach me.</p>
    <h2 className="title big talk">Let's talk <span>↗</span></h2>
    <p><a className="mail" href={`mailto:${me.email}`}>{me.email}</a></p>
    <div className="cta c"><a className="btn ghost" href={me.github} target="_blank" rel="noreferrer">GitHub</a><a className="btn ghost" href={me.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
  </section>
)

export default function App() {
  const get = () => { const r = location.hash.replace('#/', ''); return PAGES.some((p) => p[0] === r) ? r : 'home' }
  const [route, setRoute] = useState(get)
  useEffect(() => { const f = () => { setRoute(get()); scrollTo(0, 0) }; addEventListener('hashchange', f); return () => removeEventListener('hashchange', f) }, [])
  const View = { home: Home, projects: Projects, about: About, contact: Contact }[route]
  return (
    <>
      <header className="top">
        <a className="logo" href="#/home">{me.name}<i>.</i></a>
        <nav>{PAGES.map(([k, l]) => <a key={k} href={`#/${k}`} className={route === k ? 'active' : ''}>{l}</a>)}</nav>
      </header>
      <main className="page" key={route}><View /></main>
      <footer className="foot wrap"><span className="muted">© 2026 {me.name}</span>
        <span><a href={me.github} target="_blank" rel="noreferrer">GitHub</a><a href={me.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${me.email}`}>Email</a></span></footer>
    </>
  )
}
'use client'

import { useState } from 'react'
import {
  ArrowDown, ArrowRight, BrainCircuit, Check, ChevronDown, Clapperboard,
  Cpu, Database, DoorOpen, ExternalLink, Film, GitBranch, Layers3, Menu,
  Network, Play, ScrollText, Sparkles, Users, X, Zap,
} from 'lucide-react'

const mapping = [
  ['Cerro Kallami', 'Recurso Protegido', 'El entorno que concentra el valor y el riesgo del sistema.', Database],
  ['Músicos', 'Actores Concurrentes', 'Usuarios que operan sobre un recurso compartido.', Users],
  ['Morenada', 'Señal / Input', 'El estímulo sonoro que activa la secuencia.', Play],
  ["Q'oancha", 'Condición de Autorización', 'El protocolo cultural que habilita el acceso.', Sparkles],
  ['Puerta', 'Control de Acceso', 'La frontera que valida identidad, intención y permiso.', DoorOpen],
] as const

const timeline = [
  ['Mundo ordinario', 'La banda llega desafinada al anochecer.'],
  ['Llamado', 'La montaña responde con una melodía lejana.'],
  ['Umbral', 'Los jóvenes encuentran una puerta en la roca.'],
  ['Guardián', 'El cerro exige respeto antes de abrirse.'],
  ['Prueba', 'La música convoca fuerzas que no comprenden.'],
  ['Descenso', 'El grupo queda atrapado en un espacio suspendido.'],
  ['Revelación', 'La Q’oancha aparece como llave de reciprocidad.'],
  ['Reparación', 'La ofrenda ordena el vínculo entre comunidad y cerro.'],
  ['Retorno', 'La banda vuelve con una escucha nueva.'],
  ['Retorno armónico', 'El protocolo correcto devuelve la música a la comunidad.'],
]

const scenes = [
  ['E01', 'La banda se prepara', '“Afinemos antes de que caiga la noche.”'],
  ['E02', 'El sendero hacia Kallami', '“El camino conocía sus nombres.”'],
  ['E03', 'La primera nota', '“Una morenada se pierde entre las piedras.”'],
  ['E04', 'La puerta mineral', '“Donde termina el sendero, empieza el umbral.”'],
  ['E05', 'El ingreso', '“Entraron buscando sonido; hallaron silencio.”'],
  ['E06', 'El cerro despierta', '“La montaña también escucha.”'],
  ['E07', 'La banda devorada', '“Cada nota abría un pasaje distinto.”'],
  ['E08', 'La memoria oral', '“Los abuelos ya habían contado esta historia.”'],
  ['E09', 'La Q’oancha', '“Pedir permiso es reconocer el vínculo.”'],
  ['E10', 'La ofrenda', '“El intercambio vuelve a poner el mundo en orden.”'],
  ['E11', 'La puerta se abre', '“La salida no era fuerza: era reciprocidad.”'],
  ['E12', 'Retorno armónico', '“La comunidad recibe una música transformada.”'],
]

const flow = [
  ['Necesidad', 'La banda necesita afinar y cruzar el territorio.', BrainCircuit],
  ['Actores', 'Músicos, comunidad y cerro participan del sistema.', Users],
  ['Intercambio de información', 'La morenada comunica intención y presencia.', Network],
  ['Decisión', 'El acceso depende de respetar la condición ritual.', GitBranch],
  ['Acción', 'La Q’oancha habilita la entrada segura.', Zap],
  ['Resultado', 'El sistema recupera estabilidad y armonía.', Check],
] as const

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{copy}</p></div>
}

function FlowDiagram() {
  const [open, setOpen] = useState(0)
  return <div className="flow-wrap">
    <div className="flow-row">{flow.map(([label, , Icon], i) => <div className="flow-node" key={label}>
      <button className={open === i ? 'flow-node-button active' : 'flow-node-button'} onClick={() => setOpen(i)} aria-expanded={open === i}>
        <span className="flow-icon"><Icon /></span><span>{label}</span>
      </button>{i < flow.length - 1 && <ArrowRight className="flow-arrow" aria-hidden="true" />}
    </div>)}</div>
    <div className="flow-detail"><p className="eyebrow">Paso seleccionado · {String(open + 1).padStart(2, '0')}</p><h3>{flow[open][0]}</h3><p>{flow[open][1]}</p></div>
  </div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main>
    <nav className="site-nav"><a className="brand" href="#inicio"><span className="brand-mark">K</span><span>KALLAMI <small>/ SISTEMAS</small></span></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</button><div className={menuOpen ? 'nav-links open' : 'nav-links'}>{['Relato', 'Sistemas', 'Storyboard', 'Bitácora'].map((item, i) => <a key={item} href={['#relato', '#sistemas', '#storyboard', '#ia'][i]} onClick={() => setMenuOpen(false)}>{item}</a>)}<a className="nav-cta" href="#presentacion">Ver presentación <ArrowRight /></a></div></nav>

    <section id="inicio" className="hero"><div className="hero-inner"><p className="kicker">Proyecto académico · Ingeniería de Sistemas · 2024</p><h1>El Cerro Kallami<br /><em>y la Banda Devorada</em></h1><p className="hero-subtitle">Modelado de Sistemas y Tradición Oral</p><div className="hero-meta"><span>Camila Ayelen Cordova Vasquez</span><span>Universidad Mayor de San Andrés <b>·</b> UMSA</span></div><a className="scroll-cue" href="#relato">Explorar el relato <ArrowDown /></a></div><div className="hero-stamp">ARCHIVO<br /><strong>ORAL</strong><br />UMSA</div></section>

    <section id="relato" className="section context-section"><SectionHeading eyebrow="01 · Contexto cultural" title="Cuando la música cruza el umbral" copy="Una tradición oral convertida en un mapa para leer sistemas complejos."/><div className="context-grid"><div className="story-copy"><p className="lead">En el relato de Alejandro Mamani, un grupo de jóvenes músicos asciende al Cerro Kallami buscando la afinación perfecta. La banda entra en la montaña siguiendo el eco de una morenada, pero el cerro los retiene: no han pedido permiso.</p><p>La historia no habla solamente de una desaparición. Habla de un sistema vivo, con reglas, actores y fronteras. Cuando la comunidad recupera la memoria de la <em>Q'oancha</em>, la salida aparece como resultado de un vínculo reparado.</p><div className="pull-quote">“Pedir permiso no es detener el camino: es hacerlo posible.”</div></div><aside className="q-card"><div className="q-symbol">Q</div><p className="eyebrow">La clave del relato</p><h3>Q&apos;oancha</h3><p>Ofrenda de reciprocidad y permiso. Un gesto que reconoce que ningún actor accede a un recurso protegido sin declarar su intención y asumir responsabilidad.</p><div className="q-line"><span>Entrada</span><ArrowRight /><span>Vínculo</span><ArrowRight /><span>Permiso</span></div></aside></div></section>

    <section id="sistemas" className="section mapping-section"><SectionHeading eyebrow="02 · Reinterpretación" title="Una leyenda, cinco componentes" copy="El relato permite traducir una tensión cultural a un modelo de interacción entre actores, recursos y controles."/><div className="mapping-grid">{mapping.map(([name, role, desc, Icon]) => <article className="mapping-card" key={name}><div className="card-icon"><Icon /></div><p className="eyebrow">{role}</p><h3>{name}</h3><p>{desc}</p><span className="card-index">0{mapping.indexOf(mapping.find((m) => m[0] === name)!) + 1}</span></article>)}</div></section>

    <section className="section timeline-section"><SectionHeading eyebrow="03 · Estructura narrativa" title="El camino del héroe" copy="Diez estaciones para observar cómo un sistema entra en crisis, aprende y recupera su equilibrio."/><div className="timeline">{timeline.map(([title, desc], i) => <div className="timeline-item" key={title}><div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></section>

    <section className="media-section"><div className="media-shell"><div className="media-top"><p className="eyebrow">04 · Pieza audiovisual</p><span>ARCHIVO / 01:55</span></div><div className="video-frame"><iframe src="https://www.youtube.com/embed/taV_quoWXjs" title="El Cerro Kallami y la Banda Devorada" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div><div className="media-caption"><h2>La banda devorada</h2><div className="badges"><span>Duración: 01:55</span><span>Full HD</span><span>Estilo: 2D Pergamino Andino</span></div></div></div></section>

   <section id="storyboard" className="section storyboard-section">
  <SectionHeading 
    eyebrow="05 · Storyboard" 
    title="Doce escenas, una sola puerta" 
    copy="La progresión visual del relato: del ruido inicial a la escucha compartida."
  />
  <div className="scene-grid">
    {scenes.map(([id, desc, voice]) => (
      <article className="scene-card overflow-hidden" key={id}>
        <div className="scene-art relative overflow-hidden aspect-video w-full">
          <img 
            src={`/escenas/${id}.jpg`} 
            alt={desc} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
        <p className="eyebrow">{id}</p>
        <h3>{desc}</h3>
        <p className="voice">{voice}</p>
      </article>
    ))}
  </div>
</section>

    <section className="section flow-section"><SectionHeading eyebrow="06 · Secuencia formal" title="Del conflicto al resultado" copy="Una lectura sistémica de la leyenda, expresada como flujo de información y decisiones."/><FlowDiagram /></section>

    <section id="ia" className="section ai-section"><SectionHeading eyebrow="07 · Bitácora de inteligencia artificial" title="Herramientas para construir el mundo" copy="Una cadena de producción donde cada herramienta sostiene una parte del lenguaje visual y sonoro."/><div className="tools-grid">{[['Leonardo AI', 'Diseño de personajes y atmósferas', Sparkles], ['Google Flow', 'Movimiento y composición de escenas', Clapperboard], ['ElevenLabs', 'Locución con memoria oral', ScrollText], ['CapCut', 'Montaje, ritmo y subtítulos', Layers3]].map(([name, desc, Icon]) => <div className="tool-card" key={name}><Icon /><h3>{name}</h3><p>{desc}</p><ArrowRight /></div>)}</div><div className="prompt-card"><div className="prompt-head"><span>MASTER PROMPT</span><span>STYLE / KALLAMI-02</span></div><code>“Cinematic 2D illustration inspired by Andean parchment, Cerro Kallami at dusk, deep indigo shadows, terracotta textile accents, ochre light, respectful oral tradition, academic visual language, textured paper grain, wide composition, no text.”</code></div></section>

    <section id="presentacion" className="section presentation-section"><SectionHeading eyebrow="08 · Presentación académica" title="La historia también se expone" copy="Un espacio preparado para proyectar el análisis completo frente a la comunidad universitaria."/><div className="projector"><div className="projector-screen"><div className="slide-placeholder"><p className="eyebrow">Google Slides / Presentación</p><h3>El Cerro Kallami<br /><em>y la Banda Devorada</em></h3><p>Inserta aquí el iframe de tu presentación académica.</p><button className="outline-button">Abrir presentación <ExternalLink /></button></div></div><div className="projector-base"><span /><span /><span /></div></div></section>

    <footer><div className="footer-inner"><div><p className="eyebrow">Conclusión</p><h2>La estabilidad de un sistema<br />empieza por respetar sus protocolos.</h2><p className="footer-copy">Kallami nos recuerda que todo acceso transforma el entorno. Diseñar sistemas sostenibles es aprender a escuchar antes de intervenir.</p></div><div className="credits"><p className="eyebrow">Créditos</p><p>Archivo Oral de la UMSA</p><p>Camila Ayelen Cordova Vasquez</p><p>Ingeniería de Sistemas · 2024</p><span className="footer-mark">K</span></div></div><div className="footer-bottom"><span>UMSA / LA PAZ / BOLIVIA</span><span>FIN DEL RECORRIDO</span></div></footer>
  </main>
}

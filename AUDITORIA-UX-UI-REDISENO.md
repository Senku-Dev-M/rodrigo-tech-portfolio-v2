# Auditoría UX/UI y Plan Integral de Rediseño
### Portafolio Profesional — Beimar Rodrigo Machaca Aruquipa

> Documento estratégico elaborado desde la perspectiva de un Diseñador UX/UI Senior, Product Designer y Brand Designer. Cada recomendación está fundamentada en el análisis del **código real** del proyecto (Vite + React 19, React Router, Framer Motion, Three.js/OGL, i18n ES/EN) y orientada a elevar percepción profesional, usabilidad, branding y conversión hacia los estándares de 2026.

**Stack auditado:** React 19 · Vite 7 · React Router 7 · Framer Motion 12 · Three.js + OGL (WebGL) · lucide-react · i18n propio (ES/EN)
**Rutas detectadas:** `/` (Home) · `/mentorias` (plataforma de enseñanza con simulaciones interactivas) · `/portafolio` (proyectos filtrables)
**Tema base:** Fondo `#080808`, acento cian `#00d4ff`, tipografías Inter / Sora / JetBrains Mono.

---

## 1. Resumen Ejecutivo

### Diagnóstico general

Tu portafolio **está muy por encima del promedio**. No es una plantilla genérica: tiene fondos WebGL (Prism, Antigravity con partículas), microinteracciones con Framer Motion, internacionalización ES/EN real, una arquitectura de componentes limpia y —el mayor diferenciador— una **plataforma de mentorías con simulaciones interactivas de programación, redes y QA**. Eso es algo que el 99% de los portafolios de desarrollador no tiene.

El problema no es la falta de ambición técnica, sino que **la sofisticación visual no está acompañada por las bases fundamentales** que un reclutador, cliente o motor de búsqueda evalúan primero: SEO/metadatos, accesibilidad, jerarquía narrativa, diferenciación de marca (más allá del cian sobre negro que usan miles de devs) y una sección de contacto real. En resumen: tienes un motor de carreras con la matrícula sin poner.

### Principales problemas encontrados

- **SEO y metadatos rotos en la raíz:** `index.html` conserva el título por defecto `rodrigo-tech-portfolio`, el favicon `vite.svg` de Vite, no hay `meta description`, ni Open Graph, ni Twitter Cards. Al compartir el enlace en LinkedIn/WhatsApp no se genera previsualización profesional.
- **El activo más importante no es legible por máquinas:** tu nombre en el Hero se renderiza con `FuzzyText` sobre un `<canvas>`. Ni Google ni un lector de pantalla lo leen como `<h1>`. El elemento más valioso para SEO y accesibilidad es invisible para ambos.
- **Contraste insuficiente:** textos en `rgba(255,255,255,0.58)` y `rgba(226,232,240,0.72)` sobre `#080808` quedan en la frontera o por debajo de WCAG AA.
- **Marca poco diferenciada:** el cian sobre negro es el "uniforme" de los portafolios tech. Visualmente impactas, pero no eres *memorable* ni *único*.
- **No hay sección de Contacto ni Blog reales:** solo íconos sociales y un botón flotante de WhatsApp. Falta un cierre de conversión claro.
- **Peso y rendimiento:** tres motores WebGL distintos (Prism + Antigravity + Three/OGL) inflan el bundle y exigen GPU.

### Oportunidades más importantes

1. **Convertir el Hero en un activo SEO y accesible** sin perder el efecto visual.
2. **Construir una identidad de marca propia** (color secundario + acento cálido, logotipo con concepto, voz) que te separe del resto.
3. **Crear un sistema de diseño tokenizado** (espaciado, tipografía, radios, sombras) para consistencia y escalabilidad.
4. **Capitalizar las mentorías como tu gran diferenciador narrativo** — pocos developers enseñan; eso vende.
5. **Cerrar el embudo** con una sección de contacto con propósito y un caso de estudio por proyecto.

### Impacto esperado del rediseño

| Dimensión | Estado actual | Tras el rediseño |
|---|---|---|
| Percepción profesional | Alta visualmente, débil en fundamentos | Premium y coherente de extremo a extremo |
| SEO / compartibilidad | Deficiente (sin metadatos) | Previsualizaciones ricas, indexable |
| Accesibilidad | ~WCAG parcial | WCAG 2.2 AA |
| Diferenciación de marca | Media (cian genérico) | Alta (identidad propia + mentorías) |
| Conversión (contacto/CV) | Difusa | Embudo claro con CTA medibles |

---

## 2. Análisis de la Situación Actual

### Estado actual

**Evaluación visual.** El lenguaje es moderno, oscuro y "tech": gradientes cian, glassmorphism en chips (`backdrop-filter: blur`), efectos WebGL de fondo y texto con gradiente animado. Es atractivo y transmite dominio técnico. El riesgo es la **monotonía cromática**: todo gravita hacia el mismo cian, lo que aplana la jerarquía (cuando todo brilla, nada destaca) y reduce la diferenciación.

**Evaluación de UX.** La navegación principal es clara (About / Mentorías / Portafolio) y el manejo de scroll entre rutas y secciones está bien resuelto (`scrollToSelector` con fallback al navegar desde otra ruta). Sin embargo, la página Home concentra demasiado en un solo scroll (`Hero → Banner → About[Perfil + Experiencia + Skills + Educación + Proyectos destacados + Certificaciones]`), lo que genera una página larga y cognitivamente pesada.

**Evaluación de UI.** Componentización sólida y reutilizable (PageShell, Cards, Navbar, Footer). El detalle que resta puntos: **mezcla de tokens y valores crudos**. Los colores están en `:root`, pero el espaciado, los tamaños tipográficos y los radios se escriben a mano (`padding: 7rem 2rem 5rem`, `font-size: 1.04rem`), e incluso hay estilos inline (`style={{ border: 'none', cursor: 'pointer' }}` en About). Eso dificulta la consistencia.

**Evaluación de accesibilidad.** Puntos débiles concretos detectados en código:
- El nombre del Hero vive en `<canvas>` (no es `<h1>` semántico).
- Enlaces sociales usan `title` en lugar de `aria-label`; los íconos no tienen texto alternativo accesible.
- El botón hamburguesa tiene `aria-label` pero **no** `aria-expanded`/`aria-controls`.
- Contrastes por debajo de AA en textos secundarios (0.58 / 0.72 de opacidad sobre negro).
- No se observa gestión de `prefers-reduced-motion` para usuarios sensibles al movimiento (hay mucha animación).

**Evaluación de rendimiento percibido.** El Hero desactiva Prism en móvil (excelente decisión), pero Antigravity sigue ejecutando partículas en móvil (60). Tres librerías 3D/WebGL (`three`, `ogl`, `@react-three/fiber`) coexisten, lo que sugiere **bundle pesado** y posible duplicación de capacidades. El `scroll-behavior: smooth` nativo está bien; faltaría *lazy-loading* de rutas pesadas (Mentorías carga muchísimas simulaciones).

**Evaluación de arquitectura de información.** Tres pilares correctos. El problema es el **desequilibrio**: la Home hace de "todo en uno" mientras que el verdadero diferenciador (Mentorías) queda como una pestaña más. Falta un cierre (Contacto) y una capa editorial (Blog/Notas) que demuestre pensamiento, no solo ejecución.

### Fortalezas

- **Diferenciador real y escaso:** la plataforma de Mentorías con simulaciones interactivas (Java, redes, Scrum, QA, Arduino, Packet Tracer) es contenido propio de altísimo valor. Casi nadie tiene esto.
- **Calidad de motion:** uso correcto de `useInView`, `variants` con stagger, `AnimatePresence` y `layoutId` (el "glow" que se desplaza entre tabs del portafolio está muy bien).
- **Internacionalización real ES/EN** con proveedor propio — demuestra alcance profesional.
- **Arquitectura de componentes limpia** y separación por dominios.
- **Decisiones de rendimiento conscientes** (Prism off en móvil, conteo de partículas reducido en móvil, `suspendWhenOffscreen`).
- **Dos CVs descargables** (ES/EN) accesibles desde el Hero.

### Debilidades

**Navegación.** No hay indicador de sección activa al hacer scroll en la Home (scrollspy). El usuario no sabe "dónde está" dentro del largo About. El menú móvil no comunica su estado expandido a tecnologías asistivas.

**Jerarquía visual.** Monocromía cian: titulares, chips, bordes, scrollbar, sombras y CTAs comparten el mismo color, por lo que el ojo no encuentra un único punto focal. El CTA primario no "gana" sobre los secundarios.

**Consistencia.** Coexisten tokens (`--mentor-accent`) con literales repetidos del mismo color (`#00d4ff` escrito decenas de veces), valores de espaciado ad-hoc y estilos inline. Sin escala tipográfica ni de espaciado definida.

**Branding.** La identidad se apoya en un único color y un logotipo `<RM/>` correcto pero genérico (el patrón `<código/>` lo usan miles). No hay un concepto de marca articulado, ni paleta de apoyo, ni voz definida.

---

## 3. Auditoría de Branding

### ¿La identidad actual comunica lo correcto?

| Atributo | ¿Se comunica hoy? | Comentario |
|---|---|---|
| Profesionalismo | Parcial | Visualmente sí; se rompe por título/favicon por defecto y falta de contacto formal. |
| Credibilidad | Sí | Experiencia, certificaciones y mentorías la sostienen. |
| Modernidad | Alta | WebGL + motion la transmiten con fuerza. |
| Diferenciación | Baja | Cian-sobre-negro genérico; no hay marca propietaria. |
| Personalidad | Difusa | Se intuye un perfil técnico-docente, pero no está articulado en color, voz ni símbolo. |

**Conclusión:** tu marca proyecta "developer competente y moderno", pero no proyecta **"Rodrigo"**. La modernidad está prestada del estándar de la industria. Necesitas convertir un *look* en una *identidad*.

### Paleta de Colores

**Evaluación de la actual.** La paleta es monocromática cian sobre negro profundo. Es elegante pero **estratégicamente limitada**: no diferencia, fatiga visualmente en superficies grandes y deja sin lenguaje a los estados (éxito/error/advertencia) y a la jerarquía de acciones. Recomiendo **conservar el ADN oscuro+cian pero ampliarlo** con un acento cálido de contraste y una escala neutra real.

**Nueva paleta propuesta**

*Base / Neutros (tema oscuro):*

| Rol | HEX | Justificación | Impacto |
|---|---|---|---|
| Background base | `#0A0B0F` | Negro azulado, menos plano que `#080808`, más "profundidad". | Sensación premium, menos fatiga. |
| Surface 1 | `#12141A` | Tarjetas y paneles. | Separa contenido del fondo sin bordes duros. |
| Surface 2 | `#1B1E26` | Elementos elevados, hover de tarjetas. | Crea jerarquía por capas. |
| Border / Hairline | `#2A2E38` | Bordes sutiles. | Estructura sin ruido. |

*Marca:*

| Rol | HEX | Justificación | Impacto emocional |
|---|---|---|---|
| Primario | `#22D3EE` (cian) | Evoluciona tu cian actual: más vibrante y accesible. | Tecnología, claridad, confianza. |
| Secundario | `#7C5CFF` (violeta) | Aporta profundidad "producto/innovación"; combina con cian sin competir. | Creatividad, sofisticación. |
| Acento (cálido) | `#FF7A45` (coral/ámbar) | **El gran cambio:** un acento cálido reservado SOLO para el CTA principal y métricas clave. | Llama la acción, rompe la monotonía fría, te vuelve memorable. |

*Estados:*

| Rol | HEX |
|---|---|
| Éxito | `#34D399` |
| Error | `#F87171` |
| Advertencia | `#FBBF24` |
| Información | `#60A5FA` |

*Texto:*

| Rol | HEX / valor | Nota de accesibilidad |
|---|---|---|
| Texto primario | `#F4F6FB` | Contraste ~16:1 sobre base. |
| Texto secundario | `#B4BCCC` | **Sube** desde el 0.58/0.72 actual para cumplir AA. |
| Texto terciario / muted | `#7E8696` | Solo para metadatos, nunca para cuerpo. |

> **Regla de oro de marca:** el cálido (`#FF7A45`) es escaso por diseño. Si aparece en todos lados deja de funcionar. Resérvalo para *la* acción que quieres que el usuario haga.

### Tipografía

**Evaluación actual.** La combinación Inter (cuerpo) + Sora (display) + JetBrains Mono (código) es **acertada y moderna**; no la cambiaría. El problema no son las fuentes sino **la ausencia de un sistema de escala**: los tamaños se definen caso por caso (`0.82rem`, `1.04rem`, `clamp(3rem, 8vw, 7rem)`...).

**Sistema tipográfico recomendado** (escala modular 1.250 — Major Third):

| Token | Tamaño | Uso |
|---|---|---|
| `display` | `clamp(2.5rem, 6vw, 4.5rem)` / Sora 800 | Hero, títulos de página |
| `h1` | `2.5rem` / Sora 700 | Títulos de sección |
| `h2` | `2rem` / Sora 700 | Subsecciones |
| `h3` | `1.5rem` / Sora 600 | Tarjetas |
| `body-lg` | `1.125rem` / Inter 400 | Intro/bio |
| `body` | `1rem` / Inter 400, `line-height: 1.7` | Cuerpo |
| `caption` | `0.875rem` / Inter 500 | Metadatos, chips |
| `code` | JetBrains Mono | Snippets, etiquetas técnicas |

Mantén `letter-spacing` amplio (0.2–0.3em) solo en *eyebrows*/etiquetas en mayúsculas, como ya haces bien en `.hero-greeting`.

### Sistema Visual

- **Iconografía:** ya usas lucide-react (excelente, consistente). Estandariza tamaños (16/20/24) vía tokens y aplica `aria-label` cuando el ícono es el único contenido.
- **Ilustraciones:** introduce un estilo gráfico propio (line-art técnico con el dúo cian/violeta) para Mentorías y estados vacíos — refuerza marca mejor que más WebGL.
- **Fotografía:** tu foto de perfil está bien; trátala con un tratamiento consistente (duotono sutil cian/violeta o aro de gradiente, que ya tienes con `avatar-ring`).
- **Componentes visuales:** unifica el lenguaje de tarjetas (un solo sistema, ver §8). Hoy hay varias variantes (MinimalProjectCard, ProjectShowcaseCard, SubjectCard, LabCard...).
- **Estilo gráfico general:** "tech editorial con calidez" — oscuro, espacioso, tipografía protagonista, WebGL **dosificado** y un acento cálido que humaniza.

---

## 4. Nueva Dirección de Diseño

**Concepto visual principal:** *"El Ingeniero que Enseña"* — un portafolio que no solo muestra que sabes construir, sino que sabes **explicar y elevar a otros**. Eso es raro y vendible. El diseño debe equilibrar rigor (grids, mono, datos) con cercanía (acento cálido, voz en primera persona, narrativa).

**Personalidad de marca:** preciso, didáctico, confiable, ambicioso, accesible. No frío ni "hacker edgy", sino *mentor experto*.

**Estilo visual recomendado:** **Dark Editorial + Bento UI**, con glassmorphism dosificado y un acento cálido. Mucho espacio en blanco (negro), tipografía grande, contenido en módulos tipo bento que permiten escanear rápido.

**Tendencias 2026 aplicables:** Bento grids, *spatial/depth* sutil (capas de superficie), tipografía sobredimensionada, microinteracciones con propósito, *scrollytelling* en casos de estudio, modo claro opcional, y motion accesible (respetando `prefers-reduced-motion`).

**Diferenciadores frente a otros portafolios:**
1. Pilar de **mentorías con simulaciones interactivas** (único).
2. **Acento cálido** en un mar de portafolios fríos.
3. **Casos de estudio** reales con problema → decisión → resultado (no solo screenshots).
4. **Bilingüe** nativo ES/EN.

---

## 5. Arquitectura de Información

### Estructura actual

```
/ (Home)
 ├─ Hero (nombre, roles, bio, CV, redes)
 ├─ StadiumBanner (marquesina de logros)
 └─ About  ← sobrecargada
     ├─ Perfil
     ├─ Experiencia
     ├─ Skills
     ├─ Educación
     ├─ Proyectos destacados (2)
     └─ Certificaciones
/mentorias  (plataforma de cursos + simulaciones)
/portafolio (proyectos filtrables por categoría)
[Botón flotante de WhatsApp global]
```

### Nueva estructura recomendada

**Mantener:** los tres pilares (Home, Mentorías, Portafolio) y el conmutador de idioma.

**Dividir (la Home está sobrecargada):** separar el monolito `About` en secciones con respiración y *scrollspy*:

```
/ (Home) — recorrido narrativo
 ├─ Hero (con <h1> real + CTA cálido)
 ├─ Banner de logros (marquesina)
 ├─ Sobre mí (perfil + propuesta de valor, breve)
 ├─ Experiencia (timeline)
 ├─ Skills (agrupadas por dominio)
 ├─ Proyectos destacados (3, con enlace a /portafolio)
 ├─ Mentorías (teaser que enlaza a la plataforma) ← elevar
 ├─ Certificaciones + Educación (fusionadas)
 └─ Contacto (NUEVA)  ← cierre del embudo
```

**Fusionar:** *Educación* + *Certificaciones* en un bloque "Formación y credenciales" (reduce longitud y agrupa lo equivalente).

**Eliminar/Reubicar:** evita repetir proyectos destacados en Home y en /portafolio sin contexto distinto; en Home muestra *highlights*, en /portafolio el catálogo completo.

**Nuevas secciones recomendadas:**
- **Contacto** (formulario real + disponibilidad + redes) — hoy inexistente como sección.
- **Mentorías como teaser en Home** — tu mayor activo no debe esconderse en una pestaña.
- **(Opcional) Notas/Blog** — capa editorial para SEO y demostración de pensamiento; las mentorías ya te dan base de contenido.

**Motivo de cada cambio:** reducir carga cognitiva por scroll, crear un *embudo* (atención → interés → prueba → contacto), elevar el diferenciador y cerrar con conversión.

---

## 6. Rediseño de Cada Sección

> Para cada sección: **Problemas → UX → UI → Mejoras visuales → Componentes.**

### Hero Section
- **Problemas:** nombre en `<canvas>` (FuzzyText) → no es `<h1>`, invisible para SEO/lectores; tres CTAs compiten (Ver más + 2 CVs) sin jerarquía; todo cian.
- **UX:** un solo CTA primario claro ("Ver mi trabajo" o "Hablemos"), CVs como acción secundaria agrupada en un menú/desplegable; añadir scrollspy.
- **UI:** `<h1>` real con el nombre (puedes superponer el efecto FuzzyText sobre texto accesible con `aria-hidden` en el canvas y el `<h1>` visualmente oculto-pero-presente, o renderizar el texto y el efecto encima). CTA primario en acento cálido.
- **Mejoras visuales:** mantener Prism pero bajar intensidad; añadir profundidad por capas en vez de más brillo.
- **Componentes:** `<Hero>`, `<Button variant="primary|secondary">`, `<SocialBar aria-label>`, `<ScrollHint>`.

### Sobre mí
- **Problemas:** mezclado dentro de un About gigante; descripción puede leerse genérica.
- **UX:** convertirlo en una *propuesta de valor* de 2–3 frases ("Ayudo a equipos a… construyo… enseño…").
- **UI:** layout bento: foto + bio + 3 métricas clave (años, proyectos, estudiantes mentorizados).
- **Componentes:** `<ProfileCard>`, `<StatBadge>`.

### Experiencia
- **Problemas:** sin indicador de progreso/contexto temporal claro.
- **UX:** timeline vertical con hitos y resultados cuantificados (no tareas, sino impacto).
- **UI:** línea con nodos, fechas en mono, logros con verbo+métrica.
- **Componentes:** `<Timeline>`, `<TimelineItem>`.

### Proyectos
- **Problemas:** tarjetas muestran tech y nombre pero falta narrativa de impacto; varias variantes de tarjeta.
- **UX:** cada proyecto debe abrir un **caso de estudio**: problema → rol → decisiones → resultado → enlaces (demo/repo). El filtro por categoría (ya implementado con `layoutId`) es excelente, consérvalo.
- **UI:** un único `<ProjectCard>` con imagen/preview, stack como chips, y dos acciones (Caso de estudio / Código).
- **Componentes:** `<ProjectCard>`, `<ProjectCaseStudy>`, `<FilterTabs>` (ya casi listo).

### Skills
- **Problemas:** riesgo de "muro de logos" sin jerarquía.
- **UX:** agrupar por dominio (Frontend / Backend / DevOps / Datos / QA) y señalar nivel real.
- **UI:** bento por categoría; evitar barras de % arbitrarias (poco creíbles) — usa agrupación + énfasis en lo nuclear.
- **Componentes:** `<SkillGroup>`, `<SkillChip>`.

### Certificaciones
- **Problemas:** sección separada que alarga la página.
- **UX:** fusionar con Educación en "Formación y credenciales"; enlazar verificación.
- **UI:** grid compacto con logo emisor + año + enlace verificable.
- **Componentes:** `<CredentialCard>`.

### Blog / Notas (opcional pero recomendado)
- **Problemas:** no existe; pierdes SEO y demostración de pensamiento.
- **UX:** índice simple + lectura; reutiliza contenido de mentorías.
- **UI:** lista editorial, tiempo de lectura, tags.
- **Componentes:** `<ArticleCard>`, `<ArticleLayout>`.

### Contacto
- **Problemas:** **no existe** como sección; solo redes + WhatsApp flotante.
- **UX:** formulario real (nombre, email, mensaje) con validación y estados (enviando/éxito/error), + indicación de disponibilidad y tiempo de respuesta, + acceso directo a email/WhatsApp/LinkedIn.
- **UI:** dos columnas: invitación + formulario; estados con la nueva paleta de feedback.
- **Componentes:** `<ContactSection>`, `<Form>`, `<Input>`, `<Button loading>`, `<Toast>`.

### Footer
- **Problemas:** correcto y limpio, pero infrautilizado (solo redes + copy).
- **UX:** añadir mini-mapa del sitio, "volver arriba", y reforzar CTA de contacto.
- **UI:** tres columnas (navegación / contacto / redes) + fila legal.
- **Componentes:** `<Footer>` con `<FooterColumn>`.

### Mentorías (página dedicada)
- **Problemas:** es tu mayor diferenciador pero vive como pestaña; falta un "gancho" en Home.
- **UX:** teaser en Home → landing de Mentorías con prueba social (nº estudiantes, materias) → simulaciones. Considera *lazy-load* por la carga de simulaciones.
- **UI:** hero propio, tarjetas de materias (ya tienes `SubjectCard`), CTA de contacto/mentoría.
- **Componentes:** `<MentoringTeaser>`, `<SubjectCard>` (consolidar estilos).

### Navbar (global)
- **Problemas:** sin scrollspy; hamburguesa sin `aria-expanded`.
- **UX:** resaltar sección activa; cerrar menú con Esc; foco atrapado en menú móvil abierto.
- **UI:** navbar con blur al hacer scroll (ya lo tienes con `.scrolled`), añadir CTA "Contacto" persistente.
- **Componentes:** `<Navbar>`, `<MobileMenu>` accesible.

---

## 7. Mejoras de UX

- **Navegación:** scrollspy en Home (sección activa) + CTA "Contacto" persistente en navbar. *Beneficio:* orientación y conversión.
- **Escaneabilidad:** Bento UI y jerarquía con acento cálido. *Beneficio:* el usuario capta tu valor en <5 s.
- **Accesibilidad:** `<h1>` real, `aria-label` en íconos, `aria-expanded` en hamburguesa, foco visible, contraste AA, `prefers-reduced-motion`. *Beneficio:* inclusión + mejor SEO + profesionalismo.
- **Mobile First:** verificar que el bento colapsa a 1 columna; desactivar/aligerar WebGL en móvil (Antigravity también). *Beneficio:* rendimiento y batería.
- **Responsive Design:** breakpoints tokenizados, tipografía fluida con `clamp` (ya la usas). *Beneficio:* consistencia entre dispositivos.
- **Tiempo de carga percibido:** `lazy()` + `Suspense` por ruta (Mentorías es pesada), skeletons en tarjetas, imágenes con `loading="lazy"` y formatos modernos (AVIF/WebP). *Beneficio:* LCP más rápido.
- **Experiencia de interacción:** estados claros en todos los interactivos (hover/focus/active/disabled/loading). *Beneficio:* feedback y confianza.
- **Conversión:** un CTA primario por vista en acento cálido; embudo Home→Contacto. *Beneficio:* más mensajes/oportunidades.
- **Storytelling:** narrativa "construyo + enseño + escalo" con casos de estudio. *Beneficio:* memorabilidad y diferenciación.

---

## 8. Mejoras de UI — Sistema de Diseño

**Espaciado (escala 4px):** tokens `--space-1:4px … --space-16:64px`. Sustituye los valores ad-hoc (`7rem 2rem 5rem`, etc.).

**Grid System:** contenedor máx. `1200px`, gutters de 24px, 12 columnas en desktop / 4 en móvil. Bento construido sobre CSS Grid con `grid-template-areas`.

**Sistema de tarjetas:** una base `<Card>` con variantes (`project`, `subject`, `credential`, `stat`). Superficie `#12141A`, borde `#2A2E38`, radio `16px`, hover → elevación a `#1B1E26` + borde acento. Elimina la fragmentación actual de variantes.

**Botones:**
- `primary` → fondo acento cálido `#FF7A45`, texto oscuro.
- `secondary` → borde cian, fondo translúcido.
- `ghost` → solo texto.
- Estados: hover, focus-visible (anillo), active, disabled, loading (spinner).

**Formularios / Inputs:** label siempre visible, `:focus-visible` con anillo de 2px, mensajes de error con color de estado + ícono + texto (no solo color), validación en blur.

**Modales:** overlay con blur, foco atrapado, cierre con Esc y click fuera, `role="dialog"` + `aria-modal`.

**Menús / Navegación:** menú móvil con foco atrapado, `aria-expanded`, cierre con Esc, ítem activo destacado.

**Estados visuales:** definir y documentar default / hover / focus / active / disabled / loading / empty / error para cada componente.

**Componentes reutilizables (mínimo):** `Button`, `Card`, `Input`, `Textarea`, `Badge/Chip`, `Tabs`, `Modal`, `Toast`, `Tooltip`, `Avatar`, `Timeline`, `SectionTitle`. Centralízalos en `/components/ui`.

**Radios y sombras:** `--radius-sm:8px / -md:16px / -lg:24px / -full:9999px`; sombras suaves con tinte de marca en vez de glows cian uniformes.

---

## 9. Animaciones y Microinteracciones

> Ya tienes una base excelente con Framer Motion. El objetivo es **dosificar y dar propósito**, y respetar `prefers-reduced-motion`.

| Animación | Dónde | Cómo funciona | Objetivo UX | Impacto |
|---|---|---|---|---|
| Scroll Reveal | Secciones, tarjetas | `useInView` + fade/slide-up (ya lo usas) | Guiar la lectura | Sensación premium |
| Stagger | Listas (skills, proyectos, redes) | `variants` con delay incremental (ya implementado) | Ritmo visual | Pulcritud |
| Hover Effects | Tarjetas/botones | Elevación + borde acento | Affordance | Claridad de interacción |
| Cursor Interactions | Hero/proyectos | Cursor magnético sutil en CTA (opcional) | Deleite | Memorabilidad |
| Microinteracciones | Tabs, toggles, copiar | Transición de estado breve (150–250ms) | Feedback | Confianza |
| Loading | Rutas/imágenes | Skeletons + spinner en botón | Reducir incertidumbre | Carga percibida menor |
| Parallax | Hero/fondos | Movimiento leve por capa (dosificado) | Profundidad | Inmersión |
| Section Transitions | Entre bloques Home | Fades encadenados | Continuidad | Fluidez |
| Page Transitions | Cambio de ruta | `AnimatePresence` con fade/slide | Cohesión | Producto, no páginas sueltas |
| Feedback | Envío de formulario | Éxito/error animados (Toast) | Cierre de acción | Satisfacción |
| Motion Design (global) | Tokens de easing/duración | `--ease`, `--dur` consistentes | Coherencia | Sistema maduro |

**Principios:** duraciones 150–400ms, easing `[0.22, 1, 0.36, 1]` (ya lo usas), una sola animación "protagonista" por vista, y `@media (prefers-reduced-motion: reduce)` que reduzca a fades mínimos o las desactive.

---

## 10. Transiciones

- **Entre páginas:** `AnimatePresence` envolviendo `<Routes>` con fade + leve desplazamiento; mantener el scroll-to-top que ya implementas. *Mejora:* el sitio se siente como una app, no como recargas.
- **Entre secciones:** reveals encadenados al hacer scroll para un recorrido continuo. *Mejora:* narrativa fluida.
- **Cambio de estados:** transiciones de color/elevación en hover/focus de 150–200ms. *Mejora:* feedback inmediato.
- **Navegación:** subrayado/indicador animado del ítem activo (extiende tu patrón `layoutId` del filtro de portafolio al navbar). *Mejora:* orientación.
- **Carga de contenido:** skeleton → contenido con fade; evitar saltos de layout (reservar espacio). *Mejora:* estabilidad (CLS) y percepción de velocidad.

---

## 11. Benchmark y Referencias

| Tendencia | ¿Encaja? | Por qué |
|---|---|---|
| Minimalismo moderno | ✅ Sí | Da respiro a tu contenido denso y eleva percepción. |
| Apple-like Design | ✅ Sí (parcial) | Scrollytelling y tipografía protagonista para casos de estudio. |
| Bento UI | ✅✅ Núcleo | Ideal para skills, métricas y mentorías; escaneable y de moda. |
| Glassmorphism | ✅ Dosificado | Ya lo usas en chips; mantenerlo sutil, no en todo. |
| Neobrutalism | ⚠️ Parcial | Solo como guiño en acentos/bordes; a full chocaría con tu elegancia. |
| Editorial Design | ✅✅ Sí | Para Blog/casos de estudio y para "El ingeniero que enseña". |
| Premium Portfolio | ✅ Objetivo | El estándar al que apuntar: oscuro, espacioso, intencional. |

**Recomendación de mezcla:** **Dark Editorial + Bento UI**, con glassmorphism y micro-deleites dosificados, y un acento cálido como firma. Referencias para inspirarte (no copiar): portafolios premium en Awwwards/Godly, las landings de producto de Linear y Vercel (jerarquía y motion), y la densidad editorial de Stripe.

---

## 12. Stack Tecnológico Recomendado

> Tu stack actual (Vite + React 19) es totalmente válido. Abajo, qué mantener y qué considerar. **No** es obligatorio migrar a Next.js si no necesitas SSR; abajo el matiz.

| Tecnología | Recomendación | Justificación |
|---|---|---|
| **React 19** | Mantener | Ya lo usas; base sólida. |
| **Vite** | Mantener (o evaluar Next) | Vite es perfecto para SPA. Next.js solo si quieres **SSR/SSG para SEO** del Blog y mejores metadatos por ruta. Para un portafolio, Vite + `react-helmet`/meta estáticos + prerender puede bastar. |
| **Next.js** | Opcional | Vale la pena **si** añades Blog y quieres SEO/SSR de primera y OG dinámico. Si no, no migres por moda. |
| **Tailwind CSS** | Recomendado | Acelera el sistema de diseño con tokens; reemplaza CSS disperso y estilos inline. |
| **Shadcn/UI** | Recomendado | Componentes accesibles (Radix debajo) para Modal, Tabs, Form, Toast — resuelve tus huecos de accesibilidad. |
| **Framer Motion** | Mantener | Ya es tu motor de motion; perfecto. |
| **GSAP** | Opcional | Solo para scrollytelling avanzado en casos de estudio; si Framer cubre, no añadir peso. |
| **Lenis** | Recomendado | Smooth scroll de calidad superior al nativo; ligero, mejora la sensación premium. |
| **Three.js / OGL** | Consolidar | Tienes `three` + `ogl` + `@react-three/fiber`. **Elige uno** para reducir bundle; reserva WebGL solo para el Hero. |
| **Motion One** | Alternativa ligera | Si quieres reducir el peso de Framer en animaciones simples. |
| **react-helmet-async / vite-plugin-pwa** | Recomendado | Metadatos por ruta (SEO/OG) y opcional PWA. |
| **Zod + React Hook Form** | Recomendado | Validación robusta del formulario de contacto. |
| **Servicio de formulario** (Formspree/Resend/EmailJS) | Recomendado | Para que Contacto funcione sin backend propio. |

---

## 13. Roadmap de Implementación

| Fase | Entregable | Duración estimada |
|---|---|---|
| **1. Auditoría UX/UI** | Este documento + backlog priorizado | ✅ Hecho |
| **2. Redefinición de Branding** | Paleta, tipografía, logotipo, voz, tokens | 3–5 días |
| **3. Wireframes** | Lo-fi de Home (con nuevas secciones), Proyectos, Mentorías, Contacto | 3–4 días |
| **4. Diseño de Alta Fidelidad** | UI kit + pantallas finales (Figma) | 1 semana |
| **5. Prototipado** | Flujos clicables + especificación de motion | 2–3 días |
| **6. Desarrollo Frontend** | Sistema de diseño (tokens + componentes UI), refactor de secciones, Contacto, SEO/metadatos, accesibilidad | 2–3 semanas |
| **7. Testing** | A11y (axe/Lighthouse), responsive, cross-browser, formulario | 3–4 días |
| **8. Optimización** | Code-splitting, lazy WebGL, imágenes AVIF/WebP, Core Web Vitals | 2–3 días |
| **9. Lanzamiento** | Deploy (Vercel), metadatos OG verificados, sitemap/robots, analítica | 1–2 días |

**Quick wins (haz esto primero, 1 día):** corrige `<title>`, favicon, `meta description` + Open Graph en `index.html`; convierte el nombre del Hero en `<h1>` real; sube el contraste de textos secundarios; añade `aria-label`/`aria-expanded`. Impacto inmediato en SEO, accesibilidad y profesionalismo con esfuerzo mínimo.

---

## 14. Resultado Esperado

Tras el rediseño, tu portafolio pasará de "muy bueno técnicamente" a **referencia premium y memorable**:

- **Experiencia de usuario:** recorrido narrativo claro, escaneable en segundos, con un embudo que lleva a contacto. Navegación orientada (scrollspy) y carga percibida más rápida.
- **Percepción profesional:** coherencia de extremo a extremo — desde la previsualización al compartir el enlace hasta el último estado de un botón. Cero "restos de plantilla".
- **Branding:** identidad propia (cian + violeta + acento cálido, logotipo con concepto, voz "el ingeniero que enseña") que te separa del cian-genérico de la industria.
- **Conversión:** un CTA primario inequívoco por vista y una sección de Contacto funcional → más oportunidades laborales y de mentoría.
- **Engagement:** Bento UI, casos de estudio y motion con propósito que invitan a explorar (especialmente Mentorías).
- **Diferenciación:** la combinación de **mentorías interactivas + casos de estudio reales + bilingüe + acento cálido** te vuelve imposible de confundir con otro portafolio.

> **Conclusión estratégica:** No necesitas más efectos; necesitas más *intención*. Tienes el talento técnico demostrado en cada componente. El rediseño consiste en poner fundamentos (SEO, accesibilidad, sistema de diseño), articular una marca propia y dejar que tu mayor activo —que **construyes y enseñas**— sea el protagonista. Eso convierte un portafolio impresionante en uno *inolvidable*.

---

*Documento de auditoría y estrategia de rediseño · Basado en el análisis del código fuente real del proyecto `rodrigo-tech-portfolio`.*

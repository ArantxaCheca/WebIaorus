# PROPUESTA DE REDISEÑO WEB IAORUS

## 1. DIAGNÓSTICO DE LA SITUACIÓN ACTUAL

### Problemas identificados

| Aspecto | Problema | Impacto |
|---------|----------|---------|
| Propuesta de valor | Excesivo foco en IA como producto | El visitante no entende qué problema resuelve |
| Iconografía | Iconos emoji genéricos (⚡🏗️📄) | Poca profesionalidad, aspecto anticuado |
| Imágenes | Sin presencia humana | No genera conexión emocional |
| Colores | Solo azul corporativo | Falta contraste y personalidad |
| CTAs | Ocultas en navegación | Baja tasa de conversión |
| Mensaje IA | La IA aparece como foco principal | Debe ser el "cómo", no el "qué" |

### Referencias de diseño

- **Holded**: Beneficios primero, problemas del cliente, CTAs constantes, lenguaje sencillo.
- **Hubspot**: Orientación a negocio, casos prácticos, conversión continua.
- **A3 Software**: Profesionalidad, iconografía corporativa, estructura clara.

---

## 2. NUEVA IDENTIDAD VISUAL

### Paleta de color

```
Azul corporativo (primario):    #1C4E80
Azul oscuro:                    #0F2E4F
Azul claro:                     #E8F0FE

Naranja corporativo (acento):   #F47920
Naranja claro:                  #FFF0E5
Naranja hover:                  #D65F00

Gris texto:                     #4A5568
Gris fondo:                     #F7FAFC
Blanco:                         #FFFFFF
```

### Tipografía

- **Títulos**: Inter, Plus Jakarta Sans o system-ui
- **Cuerpo**: Inter, system-ui, -apple-system
- **Pesos**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Sistema de iconos

Sustituir todos los emoji por iconos SVG modulares:

- `icon-erp` → Cuadrícula / rompecabezas
- `icon-bp360` → Edificio / llave
- `icon-gestia` → Documento / orden
- `icon-iatask` → Check / reloj
- `icon-rrhh` → Personas / estrella
- `icon-accesos` → Escudo / llave
- `icon-web` → Monitor / código
- `icon-industrial` → Fábrica / engranaje
- `icon-retail` → Carrito / tienda
- `icon-servicios` → Maletín / handshake
- `icon-inmobiliario` → Casa / llave
- `icon-construccion` → Plano / edificio
- `icon-salud` → Cruz / corazón

### Forma de los iconos

- Línea fina (stroke-width: 1.5-2px)
- Esquinas redondeadas (round caps/joins)
- Consistencia visual (mismo viewBox 24x24)
- Color heredado (currentColor)

---

## 3. ESTRUCTURA DE MENSAJE POR PÁGINA

### Hero (index.html)

```
Antes:
"Software empresarial generado por IA en minutos"
→ Foco en tecnología, frío, poco concreto

Después:
"El software que se adapta a tu negocio, no al revés"
→ Foco en beneficio, cercano, orientado a cliente
```

### Sección de productos

```
Antes:
"Iconos + nombre + descripción técnica"

Después:
"Problema que resuelve + icono + nombre + beneficio principal"
```

### Páginas de solución

```
Antes:
"IAORUS utiliza modelos avanzados de IA para..."

Después:
| Quées | Para quién | Problema | Beneficios | Cómo funciona |
```

---

## 4. ESTRATEGIA DE IMÁGENES

### Tipo de imágenes necesarias

| Contexto | Descripción | Dónde usarla |
|----------|-------------|--------------|
| Hero | Equipo en reunión con dashboard en pantalla | Sección principal |
| Productos | Profesional usando tablet/portátil con software | cards de producto |
| Sectores | Personas en fábrica, oficina, tienda | páginas de sector |
| Confianza | Directivos en reunión, apretón de manos | sección de confianza |
| Transformación | Antes/después de digitalización | casos de uso |
| Equipo | Foto corporativa del equipo IAORUS | sobre nosotros |

### Dónde obtenerlas

- Unsplash (business, office, technology, meeting)
- Pexels (business people, teamwork, startup)
- Imágenes propias del equipo IAORUS

### Recomendación

Crear un banco de 10-15 imágenes clave con:

- Misma paleta de color (filtro azul/naranja)
- Mismo estilo (luz natural, entornos reales)
- Diversidad (roles, edades, género)

---

## 5. ESTRATEGIA DE CTAs

### Distribución por página

```
HOME:
├── Hero CTA principal: "Solicitar demo"
├── Hero CTA secundario: "Ver productos"
├── Después de productos: "¿Listo para transformar tu negocio?"
├── Después de beneficios: "Habla con un especialista"
├── Footer CTA: "Solicitar información"
└── Sticky / flotante en móvil: "Demo gratuita"

PRODUCTOS:
├── Hero CTA: "Solicitar demo"
├── Cada producto: "Ver documentación" + "Solicitar demo"
├── Después de lista: "¿No encuentras lo que buscas?"
└── Footer flotante

SOLUCIONES:
├── Hero CTA
├── Cada sector: "Ver solución" + "Solicitar demo"
├── Mitad de página: "Transforma tu sector"
└── Antes de footer: "Habla con un experto"

SERVICIOS:
├── Hero CTA
├── Pricing: "Elegir plan" + "Consultar"
├── Después de servicios: "¿Qué necesitas?"
└── Footer CTA

RECURSOS:
├── Hero CTA: "Descargar catálogo"
├── Cada documento: "Descargar"
├── Sección: "¿Buscas algo específico?"
└── Footer CTA

DEMO:
├── Formulario completo
├── Trust signals (respuesta en 24h, sin compromiso)
└── CTA secundario: "O llámanos"

CONTACTO:
├── Formulario
├── Datos de contacto
└── CTA: "O solicita una demo"
```

---

## 6. REESTRUCTURACIÓN DE PÁGINAS DE SOLUCIÓN

### Plantilla para cada solución

```
┌────────────────────────────────────────────────┐
│  HERO                                           │
│  Título: "Soluciones para [SECTOR]"            │
│  Subtítulo: "Beneficio principal"              │
│  CTA: Solicitar demo                           │
├────────────────────────────────────────────────┤
│  ¿QUÉ ES?                                       │
│  Explicación sencilla, 2-3 frases               │
│  Sin tecnicismos                               │
├────────────────────────────────────────────────┤
│  ¿PARA QUIÉN?                                   │
│  Lista de perfiles / empresas objetivo          │
├────────────────────────────────────────────────┤
│  ¿QUÉ PROBLEMA RESUELVE?                        │
│  Problemas concretos (3-4)                      │
│  Ejemplo: "¿Tus procesos son lentos?"           │
├────────────────────────────────────────────────┤
│  BENEFICIOS                                      │
│  Grid de 4-6 tarjetas con iconos                │
│  - Ahorro de costes                             │
│  - Incremento de productividad                  │
│  - Automatización                               │
│  - Reducción de errores                         │
│  - Escalabilidad                                │
│  - Toma de decisiones                           │
├────────────────────────────────────────────────┤
│  ¿CÓMO FUNCIONA? (3 pasos)                      │
│  1. Te escuchamos                               │
│  2. Configuramos                                │
│  3. Transformamos                               │
│  La IA aparece como ventaja, no como foco       │
├────────────────────────────────────────────────┤
│  CTA: "Transforma tu [sector]"                  │
│  "Habla con un especialista"                    │
└────────────────────────────────────────────────┘
```

---

## 7. TONO DE COMUNICACIÓN

### Guía de estilo editorial

| Situación | Antes (evitar) | Después (usar) |
|-----------|----------------|----------------|
| Presentación | "IAORUS es una plataforma AI-driven que genera..." | "IAORUS es el software que se adapta a tu forma de trabajar" |
| Beneficio | "Reducción del 70% en costes de desarrollo" | "Menos costes, más resultados" |
| IA | "Modelos LLMs con IA generativa..." | "El sistema aprende de tu negocio para hacerlo mejor cada día" |
| Producto | "ERP modular con control de accesos nativo" | "Todo lo que necesitas para gestionar tu empresa en un solo lugar" |
| CTA | "Solicitar demo" | "Descubre cómo puede ayudarte" |

### Reglas de tono

1. **Primero el problema, luego la solución**
2. **La IA es el motor, no el producto**
3. **Beneficios concretos, no características técnicas**
4. **Lenguaje de negocio, no de ingeniería**
5. **Cercano pero profesional**

---

## 8. JUSTIFICACIÓN DE CADA CAMBIO

| Cambio | Por qué | Referencia |
|--------|---------|------------|
| Naranja + azul | El naranja aporta calidez y acción. Azul = confianza. Naranja = energía. | Hubspot (naranja), Holded (azul+tono cálido) |
| Iconos SVG | Los emoji no son escalables ni profesionales. SVG es consistente y accesible. | A3 Software, Slack, todas las SaaS modernas |
| Imágenes humanas | Las personas generan confianza. La tecnología sola no vende. | Hubspot, Salesforce |
| CTAs distribuidos | Cada sección es una oportunidad de conversión. | Holded (cada 2-3 scrolls hay un CTA) |
| Lenguaje de negocio | El decisor de compra no es técnico. | Hubspot (inbound methodology) |
| IA como ventaja | El mercado está cansado de "IA por la IA". Venden resultados. | Gartner, tendencias 2025-2026 |
| Logo preparado | El logo actual puede evolucionar. El sistema visual debe ser independiente. | Mejores prácticas de design systems |

---

## 9. PLAN DE IMPLEMENTACIÓN

### Fase 1: Diseño visual (esta iteración)
- [x] Nueva paleta de color (azul + naranja)
- [x] Nuevo sistema de iconos SVG
- [x] CTAs redistribuidos
- [x] Mensajes actualizados

### Fase 2: Imágenes (externo)
- [ ] Seleccionar banco de imágenes (Unsplash/Pexels)
- [ ] Aplicar filtro de color corporativo
- [ ] Insertar en todas las páginas
- [ ] Foto corporativa del equipo

### Fase 3: Contenido (esta iteración)
- [x] Hero reescrito
- [x] Soluciones reestructuradas
- [ ] Casos de éxito (cuando existan)
- [ ] Blog / recursos descargables

### Fase 4: Conversión (continua)
- [ ] A/B testing de CTAs
- [ ] Heatmaps de navegación
- [ ] Optimización de formularios
- [ ] Chat de ventas en vivo

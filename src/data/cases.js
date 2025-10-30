/**
 * @fileoverview Case studies and success stories
 * @description Defines the portfolio of client cases, including challenges solved,
 * impact achieved, and implementation details.
 */

import { IoCash, IoAnalytics, IoScale } from "react-icons/io5";

export const cases = [
  {
    id: "alicorp-profit",
    title: "Optimización de rentabilidad en portafolio de productos",
    heroImage: "/cases/alicorp-hero.png",
    icon: IoCash,
    challenge: "Muchas veces, las estrategias de descuentos parecen funcionar... hasta que los números no cuadran. En esta oportunidad de negocio, buscamos entender a fondo la rentabilidad por producto y cliente. El objetivo era identificar ahorros que permitan lograr el presupuesto anual. Lo cuál nos llevó a plantearnos las siguientes preguntas clave:",
    keyChallenges: [
      "¿Los descuentos están generando retorno al margen operativo?",
      "¿Dónde realmente se está ganando o perdiendo dinero?",
      "¿Cómo construimos un modelo que dé visibilidad?"
    ],
    solutionDescription: "Utilizamos el método de Amazon: partimos de la definición de expectativas de visualización y profundidad de información. Luego, definimos las reglas de negocio necesarias para calcular \"el costo de servir\" un producto a un cliente, es decir, la utilidad operativa por producto a cliente. Aquello permitió descubrir los siguientes hallazgos y capturar ahorros de en PEN 85 millones al año:",
    solutionFramework: [
      "El 14% de productos contaban con la estrategia de descuentos desalineada, generando PEN 51 millones de pérdida al año por margen operativo",
      "El 88% de productos mostraban un margen bruto positivo, pero el 31% de ellos tenían un margen operativo negativo, impactando en PEN 27 millones de pérdida al año",
      "Para permanecer en 15% de clientes, se requería buscar ahorros de PEN 14 millones al año o 1.2% de margen operativo mediante ahorros en gastos de distribución",
    ],
    analysis: {
      image: "/cases/alicorp-demo.png",
      alt: "Análisis de rentabilidad y optimización del portafolio de producto por cliente"
    },
    learnings: [
      "Cuanto más amplio es el portafolio de productos y clientes, más necesaria es la granularidad de los análisis para acompañanar a la toma de decisiones",
      "A medida que se requiere mayor granularidad en los análisis, más necesarios son el gobierno y la calidad de datos de una empresa a todo nivel (líneas de negocio, departamentos, etc.)",
      "Cuanto más compleja la granularidad en la información, más necesaria la robustez en los procesos de transformación de datos (ETL) para limpiar y preparar la información para la toma de decisiones"
    ],
    technologies: ["Python", "PostgreSQL", "Power BI", "SAP Business Warehouse", "Oracle Hyperion"]
  },
  {
    id: "alicorp-churn",
    title: "Reducción de churn en clientes de consumo",
    heroImage: "/cases/gloria-hero.png",
    icon: IoAnalytics,
    challenge: "Cuando perdemos a un cliente, no solo perdemos una venta: perdemos la inversión de adquisición y la oportunidad de recompra. En este caso de negocio, buscamos entender a fondo las causas del churn para diseñar acciones de retención con impacto medible, lo cual nos llevó a plantearnos lo siguiente:",
    keyChallenges: [
      "¿Qué cohortes (canal, región, segmento, producto, etc.) explican la mayor parte del churn?",
      "¿Cuáles son los drivers principales (precio, stock-outs, entrega, atención, etc.) y cómo interactúan?",
      "¿Qué señales tempranas predicen la deserción y con cuánta anticipación podemos intervenir?"
  ],
    solutionDescription: "Enfocamos la implementación hacia métricas objetivo (churn mensual, LTV, NRR), diseñamos un diccionario de eventos de cliente, y consolidamos un data lake unificado. Sobre esa base, entrenamos un modelo de propensión a churn y orquestamos playbooks de retención (precio, bundle, cross-sell, win-back) con test A/B y seguimiento semanal. Lo cual permitió reducir el churn en un 12% y aumentar el LTV en un 15%, lo cual generó un ahorro de PEN 14 millones al año. Para ello, se desarrollaron las siguientes actividades:",
    solutionFramework: [
      "Integración de fuentes (ventas, logística, CRM, cobranzas, atención) con ETL gobernado y control de calidad",
      "Modelos de machine learning para probabilidad de churn por cliente y recomendación de siguiente mejor acción (bundle, cross-sell, win-back)",
      "Dashboards de cohorte y funnels de vida del cliente con alertas tempranas y monitoreo de NRR/LTV",
      "Operación de playbooks: segmentación, ofertas personalizadas y cadencias de contacto multicanal"
  ],
    analysis: {
      image: "/cases/gloria-demo.png",
      alt: "Cohortes, señales tempranas y propensión a churn con recomendaciones de siguiente mejor acción"
  },
    learnings: [
      "La estandarización de identificadores de cliente y el control de duplicados son condiciones de entrada para cualquier modelo de churn",
      "Los modelos mejoran al combinar señales operativas (stock, entregas) con comportamiento transaccional y de contacto",
      "Los playbooks solo capturan valor si se miden como experimentos (test vs. control) y se escalan gradualmente"
  ],
    technologies: ["Python", "k-means", "TensorFlow", "SQL", "dbt/Airflow", "MERN: React, Node.js, Express, MongoDB", "AWS"],
  },
  {
    id: "alicorp-packages",
    title: "Incremento de precisión en planta de envasado",
    heroImage: "/cases/alicorp-hero.png",
    icon: IoScale,
    challenge: "En planta, unos gramos de más o de menos parecen insignificantes… hasta que se traducen en mermas, reclamos y multas al año. En este caso de negocio, buscamos elevar la precisión de llenado de paquetes de detergente en polvo para reducir desperdicio, asegurar cumplimiento normativo y proteger el margen. Esto nos llevó a plantearnos las siguientes preguntas clave:",
    keyChallenges: [
      "¿Dónde se originan las desviaciones de peso (máquina, turno, formato, proveedor, etc.)?",
      "¿Cómo afectan la variabilidad de materia prima y el set-up de equipos a la precisión de llenado (OEE)?",
      "¿Qué señales tempranas (vibración, temperatura, back-pressure, microparadas) anticipan sobrellenado o subllenado?",
      "¿Cómo diseñamos un modelo y tableros que den visibilidad, alertas y acción en tiempo real?"
    ],
    solutionDescription: "Aplicamos un enfoque orientado a resultados: definimos métricas objetivo (ppm fuera de especificación, % sobrellenado, OEE, scrap) y estandarizamos el diccionario de eventos de línea. Integramos datos de PLC/SCADA y balanzas con un data layer de producción, entrenamos modelos de detección de drift y control estadístico en tiempo real, y activamos playbooks operativos (ajuste automático de set-points, mantenimiento preventivo, cambio de boquillas). Esto permitió reducir el sobrellenado en 28%, disminuir el scrap en 19% y elevar el OEE en 6 p.p., logrando un ahorro anual estimado de PEN 53 millones. Para ello, se desarrollaron las siguientes actividades:",
    solutionFramework: [
      "Integración de fuentes OT/IT: PLC/SCADA, balanzas dinámicas, MES y QA con ETL gobernado y trazabilidad lote-a-lote",
      "Control estadístico de procesos (SPC) y modelos de detección de desviaciones para ajuste proactivo de set-points",
      "Dashboards de línea y cohorte por formato/turno con alertas en tiempo real y escalamiento a mantenimiento/QA",
      "Playbooks operativos: estandarización de set-ups, cambio de boquillas, cadencias de calibración y mantenimiento predictivo"
    ],
    analysis: {
      "image": "/cases/alicorp-packages-demo.png",
      "alt": "SPC en tiempo real, detección de drift y tableros de precisión de llenado por línea y formato"
    },
    learnings: [
      "La estandarización de sensores, calibres y maestros de producto es condición de entrada para un control de precisión consistente",
      "Combinar señales de proceso (corriente, presión, temperatura, etc.) con calidad y peso en línea acelera la detección de causalidad",
      "Los beneficios se capturan cuando los ajustes se orquestan como experimentos (test vs. control) y se escalan por línea/formato/máquina"
    ],
    technologies: ["Python", "SQL Server", "dbt/Airflow", "Lean Six Sigma"]
  }
];

export const CASES_DATA = cases; 
/**
 * @fileoverview Case studies and success stories
 * @description Defines the portfolio of client cases, including challenges solved,
 * impact achieved, and implementation details.
 */

import { IoCash, IoAnalytics, IoScale } from "react-icons/io5";

export const cases = [
  {
    id: "alicorp-profitportfolio",
    title: "Optimización de rentabilidad en portafolio de productos",
    heroImage: "/cases/alicorp-hero.png",
    problem: "La toma de decisiones compleja estaba ralentizando las operaciones",
    solution: "Soluciones de machine learning de nivel empresarial que transforman los datos operativos en insights accionables.",
    icon: IoCash,
    challenge: "El desafío era revolucionar la forma en que se entregan los insights de datos, haciéndolos más accesibles y accionables para los stakeholders en toda la organización.",
    keyChallenges: [
      "Los procesos existentes eran manuales y consumían mucho tiempo",
      "Los silos de datos impedían la toma de decisiones holística",
      "La falta de insights en tiempo real impedía una respuesta rápida"
    ],
    solutionDescription: "Trabajando hacia atrás desde el resultado ideal, identificamos los requisitos clave y desarrollamos una estrategia de solución integral.",
    solutionFramework: [
      "Pipeline automatizado de recolección y procesamiento de datos",
      "Dashboard de analytics en tiempo real con vistas personalizables",
      "Modelos de machine learning para insights predictivos"
    ],
    analysis: {
      image: "/cases/alicorp-demo.png",
      alt: "Análisis de datos mostrando patrones de rentabilidad y optimización del portafolio de productos"
    },
    learnings: [
      "Los modelos de machine learning requieren monitoreo continuo y reentrenamiento para mantener la precisión",
      "La integración de datos en tiempo real es crucial para la toma de decisiones operativas",
      "El compromiso y entrenamiento de los stakeholders son esenciales para la adopción exitosa de ML"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Docker"]
  },
  {
    id: "alicorp-churn",
    title: "Reducción de churn en clientes de consumo",
    heroImage: "/cases/gloria-hero.png",
    problem: "Dificultad para predecir cambios en el mercado",
    solution: "Plataforma de analytics avanzada que ayuda a mantenerse por delante de las tendencias del mercado con decisiones basadas en datos.",
    icon: IoAnalytics,
    challenge: "El desafío era construir una plataforma de analytics integral que pudiera predecir tendencias de mercado y proporcionar insights accionables para la toma de decisiones estratégicas.",
    keyChallenges: [
      "Fuentes de datos fragmentadas en múltiples departamentos",
      "Procesos de reporte manuales que causaban retrasos",
      "Visibilidad limitada sobre tendencias y patrones de mercado"
    ],
    solutionDescription: "Desarrollamos una plataforma de analytics unificada que consolida datos de múltiples fuentes y proporciona inteligencia de mercado en tiempo real.",
    solutionFramework: [
      "Procesos avanzados de integración de datos y ETL",
      "Modelos de machine learning para predicción de tendencias",
      "Dashboards interactivos para insights en tiempo real"
    ],
    analysis: {
      image: "/cases/gloria-demo.png",
      alt: "Análisis predictivo de tendencias de mercado y comportamiento de churn de clientes"
    },
    learnings: [
      "La integración de datos de múltiples fuentes requiere planificación cuidadosa y estandarización",
      "Los modelos de analytics predictivos mejoran significativamente con más datos históricos",
      "Los dashboards amigables aumentan las tasas de adopción entre stakeholders no técnicos"
    ],
    technologies: ["R", "Python", "Power BI", "Azure"]
  },
  {
    id: "alicorp-packages",
    title: "Incremento de precisión en planta de envasado",
    heroImage: "/cases/vitapro-hero.png",
    problem: "Procesos manuales consumiendo recursos",
    solution: "Soluciones de automatización impulsadas por IA que optimizan las operaciones y reducen el esfuerzo manual.",
    icon: IoScale,
    challenge: "El desafío era automatizar procesos manuales complejos que estaban consumiendo recursos significativos y causando cuellos de botella operativos.",
    keyChallenges: [
      "Tareas manuales repetitivas consumiendo tiempo valioso",
      "Errores humanos en procesos críticos",
      "Ejecución inconsistente de procesos entre equipos"
    ],
    solutionDescription: "Implementamos un marco integral de automatización con IA que maneja inteligentemente workflows complejos mientras mantiene alta precisión y confiabilidad.",
    solutionFramework: [
      "Mapeo y optimización inteligente de procesos",
      "Motores de decisión impulsados por IA para workflows complejos",
      "Aseguramiento de calidad automatizado y manejo de errores"
    ],
    analysis: {
      image: "/cases/vitapro-demo.png",
      alt: "Análisis de procesos automatizados mostrando precisión en envasado y optimización de workflows"
    },
    learnings: [
      "La automatización incremental reduce el riesgo y permite una mejor adaptación de los stakeholders",
      "Los procesos de aseguramiento de calidad son críticos para mantener la confiabilidad de los sistemas automatizados",
      "El monitoreo continuo y los bucles de retroalimentación mejoran la precisión de la automatización con el tiempo"
    ],
    technologies: ["Python", "UiPath", "SQL Server", "Azure Functions"]
  }
];

export const CASES_DATA = cases; 
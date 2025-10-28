/**
 * @fileoverview Case studies and success stories
 * @description Defines the portfolio of client cases, including challenges solved,
 * impact achieved, and implementation details.
 */

import { IoRocket, IoTrendingUp, IoSpeedometer } from "react-icons/io5";

export const cases = [
  {
    id: "alicorp-optimization",
    title: "Alicorp's ML Optimization",
    shortDescription: "46% efficiency improvement through ML",
    heroImage: "/cases/alicorp-hero.png",
    problem: "Complex decision-making slowing operations",
    solution: "Enterprise-grade machine learning solutions that transform operational data into actionable insights.",
    icon: IoSpeedometer,
    challenge: "The challenge was to revolutionize how data insights are delivered, making them more accessible and actionable for stakeholders across the organization.",
    keyChallenges: [
      "Existing processes were manual and time-consuming",
      "Data silos prevented holistic decision-making",
      "Lack of real-time insights hindered rapid response"
    ],
    solutionDescription: "Working backwards from the ideal outcome, we identified key requirements and developed a comprehensive solution strategy.",
    solutionFramework: [
      "Automated data collection and processing pipeline",
      "Real-time analytics dashboard with customizable views",
      "Machine learning models for predictive insights"
    ],
    impact: {
      headline: "46% Efficiency Improvement",
      metrics: [
        { value: "46%", label: "Efficiency Gain" },
        { value: "28%", label: "Cost Reduction" },
        { value: "89%", label: "Prediction Accuracy" }
      ]
    },
    quote: {
      text: "The ML implementation has transformed how we make operational decisions. The impact on our efficiency has been remarkable.",
      author: "Operations Director",
      company: "Alicorp"
    },
    details: [
      "Automated model training and deployment",
      "Real-time predictions for operational decisions",
      "Custom algorithms for specific business needs",
      "Integrated monitoring and retraining pipeline"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Docker"],
    implementation: {
      approach: "Agile methodology with 2-week sprints",
      timeline: "4 months",
      team: "4 data scientists, 2 ML engineers"
    },
    demo: {
      description: "Experimenta la solución en acción a través de esta demostración interactiva.",
      image: "/cases/alicorp-demo.png",
      alt: "Dashboard de ML en tiempo real mostrando predicciones operativas y métricas de rendimiento"
    }
  },
  {
    id: "gloria-analytics",
    title: "Grupo Gloria's Predictive Analytics",
    shortDescription: "28% revenue growth through data",
    heroImage: "/cases/gloria-hero.png",
    problem: "Struggling to predict market changes",
    solution: "Advanced analytics platform that helps stay ahead of market trends with data-driven decisions.",
    icon: IoTrendingUp,
    challenge: "The challenge was to build a comprehensive analytics platform that could predict market trends and provide actionable insights for strategic decision-making.",
    keyChallenges: [
      "Fragmented data sources across multiple departments",
      "Manual reporting processes causing delays",
      "Limited visibility into market trends and patterns"
    ],
    solutionDescription: "We developed a unified analytics platform that consolidates data from multiple sources and provides real-time market intelligence.",
    solutionFramework: [
      "Advanced data integration and ETL processes",
      "Machine learning models for trend prediction",
      "Interactive dashboards for real-time insights"
    ],
    impact: {
      headline: "28% Revenue Growth",
      metrics: [
        { value: "28%", label: "Revenue Growth" },
        { value: "34%", label: "Forecast Accuracy" },
        { value: "65%", label: "Time Saved" }
      ]
    },
    quote: {
      text: "The predictive analytics platform has given us unprecedented visibility into market trends. We can now make proactive decisions with confidence.",
      author: "Chief Strategy Officer",
      company: "Grupo Gloria"
    },
    details: [
      "Market trend analysis engine",
      "Risk assessment framework",
      "Demand forecasting system",
      "Automated reporting dashboard"
    ],
    technologies: ["R", "Python", "Power BI", "Azure"],
    implementation: {
      approach: "Phased rollout with continuous feedback",
      timeline: "6 months",
      team: "3 data analysts, 2 BI developers"
    },
    demo: {
      description: "Explora la plataforma de analytics predictivos con visualizaciones interactivas de tendencias de mercado.",
      image: "/cases/gloria-demo.png",
      alt: "Dashboard de analytics con gráficos de tendencias, predicciones de demanda y análisis de riesgo en tiempo real"
    }
  },
  {
    id: "vitapro-automation",
    title: "Vitapro's AI Automation",
    shortDescription: "75% process automation achieved",
    heroImage: "/cases/vitapro-hero.png",
    problem: "Manual processes consuming resources",
    solution: "AI-powered automation solutions that streamline operations and reduce manual effort.",
    icon: IoRocket,
    challenge: "The challenge was to automate complex manual processes that were consuming significant resources and causing operational bottlenecks.",
    keyChallenges: [
      "Repetitive manual tasks consuming valuable time",
      "Human errors in critical processes",
      "Inconsistent process execution across teams"
    ],
    solutionDescription: "We implemented a comprehensive AI automation framework that intelligently handles complex workflows while maintaining high accuracy and reliability.",
    solutionFramework: [
      "Intelligent process mapping and optimization",
      "AI-powered decision engines for complex workflows",
      "Automated quality assurance and error handling"
    ],
    impact: {
      headline: "75% Time Saved",
      metrics: [
        { value: "75%", label: "Time Saved" },
        { value: "32%", label: "Cost Reduction" },
        { value: "94%", label: "Process Accuracy" }
      ]
    },
    quote: {
      text: "The automation solution has revolutionized our operations. What used to take days now happens in minutes with greater accuracy.",
      author: "Head of Operations",
      company: "Vitapro"
    },
    details: [
      "Process automation framework",
      "Intelligent workflow routing",
      "24/7 automated operations",
      "Error detection and correction"
    ],
    technologies: ["Python", "UiPath", "SQL Server", "Azure Functions"],
    implementation: {
      approach: "Iterative automation with priority queuing",
      timeline: "5 months",
      team: "3 automation engineers, 1 solution architect"
    },
    demo: {
      description: "Observa cómo los procesos automatizados funcionan en tiempo real con monitoreo inteligente.",
      image: "/cases/vitapro-demo.png",
      alt: "Sistema de automatización mostrando workflows en ejecución, métricas de rendimiento y detección automática de errores"
    }
  }
];

export const CASES_DATA = cases; 
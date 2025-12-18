"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

export function DeviceVisualization() {
  const [activeView, setActiveView] = useState<"overview" | "cross-section" | "exploded">("overview")

  return (
    <div className="relative w-full max-w-6xl mx-auto space-y-6">
      {/* View selector */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setActiveView("overview")}
          className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
            activeView === "overview"
              ? "bg-primary text-primary-foreground"
              : "bg-card hover:bg-card/80 text-muted-foreground"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveView("cross-section")}
          className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
            activeView === "cross-section"
              ? "bg-primary text-primary-foreground"
              : "bg-card hover:bg-card/80 text-muted-foreground"
          }`}
        >
          Cross-Section
        </button>
        <button
          onClick={() => setActiveView("exploded")}
          className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
            activeView === "exploded"
              ? "bg-primary text-primary-foreground"
              : "bg-card hover:bg-card/80 text-muted-foreground"
          }`}
        >
          Exploded View
        </button>
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-8 overflow-hidden">
        {/* Background grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,200,220,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,200,220,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

        {activeView === "overview" && <OverviewDiagram />}
        {activeView === "cross-section" && <CrossSectionDiagram />}
        {activeView === "exploded" && <ExplodedViewDiagram />}
      </Card>
    </div>
  )
}

function OverviewDiagram() {
  return (
    <>
      <svg viewBox="0 0 1000 700" className="w-full h-auto relative z-10" xmlns="http://www.w3.org/2000/svg">
        {/* Main device body */}
        <g id="device-body">
          {/* Outer casing with detail */}
          <defs>
            <linearGradient id="casingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.18 0 0)" />
              <stop offset="100%" stopColor="oklch(0.12 0 0)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main housing */}
          <rect
            x="150"
            y="100"
            width="600"
            height="480"
            rx="20"
            fill="url(#casingGrad)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="2"
          />

          {/* Left section: Display & Control Interface */}
          <g id="display-section">
            <text x="180" y="125" fill="oklch(0.65 0.12 260)" fontSize="12" fontFamily="monospace" fontWeight="bold">
              INTERFACE MODULE
            </text>

            {/* Display screen */}
            <rect
              x="180"
              y="140"
              width="260"
              height="180"
              rx="8"
              fill="oklch(0.08 0 0)"
              stroke="oklch(0.75 0.15 195)"
              strokeWidth="2"
            />

            {/* Screen bezel details */}
            <rect x="185" y="145" width="250" height="170" rx="6" fill="none" stroke="oklch(0.3 0 0)" strokeWidth="1" />

            {/* Real-time data visualization */}
            <text x="210" y="170" fill="oklch(0.75 0.15 195)" fontSize="10" fontFamily="monospace">
              FREE LIGHT CHAIN ANALYSIS
            </text>

            {/* Kappa/Lambda ratio graph */}
            <rect x="200" y="185" width="220" height="100" rx="4" fill="oklch(0.05 0 0)" />
            <path
              d="M 210 250 L 230 240 L 250 255 L 270 235 L 290 245 L 310 230 L 330 240 L 350 225 L 370 235 L 390 220 L 410 230"
              fill="none"
              stroke="oklch(0.75 0.15 195)"
              strokeWidth="2"
              filter="url(#glow)"
            >
              <animate
                attributeName="d"
                values="M 210 250 L 230 240 L 250 255 L 270 235 L 290 245 L 310 230 L 330 240 L 350 225 L 370 235 L 390 220 L 410 230;
                        M 210 250 L 230 235 L 250 250 L 270 240 L 290 250 L 310 235 L 330 245 L 350 230 L 370 240 L 390 225 L 410 235;
                        M 210 250 L 230 240 L 250 255 L 270 235 L 290 245 L 310 230 L 330 240 L 350 225 L 370 235 L 390 220 L 410 230"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>

            {/* Grid lines */}
            <line x1="200" y1="235" x2="420" y2="235" stroke="oklch(0.3 0 0)" strokeWidth="0.5" />
            <line x1="200" y1="260" x2="420" y2="260" stroke="oklch(0.3 0 0)" strokeWidth="0.5" />

            {/* Axis labels */}
            <text x="205" y="280" fill="oklch(0.5 0.05 195)" fontSize="8" fontFamily="monospace">
              Time
            </text>
            <text x="385" y="280" fill="oklch(0.5 0.05 195)" fontSize="8" fontFamily="monospace">
              κ/λ
            </text>

            {/* Status indicators */}
            <g id="status-indicators">
              <circle cx="210" cy="305" r="5" fill="oklch(0.75 0.15 195)">
                <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="220" y="309" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
                ACTIVE
              </text>

              <circle cx="270" cy="305" r="5" fill="oklch(0.7 0.15 140)" />
              <text x="280" y="309" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
                READY
              </text>

              <circle cx="330" cy="305" r="5" fill="oklch(0.6 0.1 60)" />
              <text x="340" y="309" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
                REAGENT: 87%
              </text>
            </g>

            {/* Control panel */}
            <rect
              x="180"
              y="340"
              width="260"
              height="80"
              rx="8"
              fill="oklch(0.1 0 0)"
              stroke="oklch(0.65 0.12 260)"
              strokeWidth="1.5"
            />

            <text x="190" y="360" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace" fontWeight="bold">
              CONTROL INTERFACE
            </text>

            {/* Control buttons with labels */}
            <g id="control-buttons">
              <rect
                x="200"
                y="370"
                width="50"
                height="30"
                rx="4"
                fill="oklch(0.15 0 0)"
                stroke="oklch(0.75 0.15 195)"
                strokeWidth="1.5"
              />
              <text x="213" y="390" fill="oklch(0.75 0.15 195)" fontSize="9" fontFamily="monospace">
                TEST
              </text>

              <rect
                x="260"
                y="370"
                width="50"
                height="30"
                rx="4"
                fill="oklch(0.15 0 0)"
                stroke="oklch(0.75 0.15 195)"
                strokeWidth="1.5"
              />
              <text x="268" y="390" fill="oklch(0.75 0.15 195)" fontSize="9" fontFamily="monospace">
                CLEAN
              </text>

              <rect
                x="320"
                y="370"
                width="50"
                height="30"
                rx="4"
                fill="oklch(0.15 0 0)"
                stroke="oklch(0.75 0.15 195)"
                strokeWidth="1.5"
              />
              <text x="328" y="390" fill="oklch(0.75 0.15 195)" fontSize="9" fontFamily="monospace">
                EJECT
              </text>

              <rect
                x="380"
                y="370"
                width="50"
                height="30"
                rx="4"
                fill="oklch(0.15 0 0)"
                stroke="oklch(0.7 0.15 0)"
                strokeWidth="1.5"
              />
              <text x="385" y="390" fill="oklch(0.7 0.15 0)" fontSize="9" fontFamily="monospace">
                POWER
              </text>
            </g>
          </g>

          {/* Right section: Microfluidic Processing Module */}
          <g id="processing-section">
            <text x="480" y="125" fill="oklch(0.65 0.12 260)" fontSize="12" fontFamily="monospace" fontWeight="bold">
              PROCESSING MODULE
            </text>

            {/* Cartridge housing */}
            <rect
              x="480"
              y="140"
              width="240"
              height="280"
              rx="10"
              fill="oklch(0.12 0 0)"
              stroke="oklch(0.65 0.12 260)"
              strokeWidth="2"
            />

            {/* Sample inlet port with animation */}
            <circle
              cx="600"
              cy="160"
              r="12"
              fill="oklch(0.65 0.12 260)"
              stroke="oklch(0.75 0.15 195)"
              strokeWidth="2"
            />
            <circle cx="600" cy="160" r="6" fill="oklch(0.75 0.15 195)">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="620" y="165" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
              SAMPLE INLET
            </text>

            {/* Microfluidic channels - detailed serpentine path */}
            <path
              d="M 600 180 L 600 200 L 510 200 L 510 220 L 690 220 L 690 240 L 510 240 L 510 260 L 690 260 L 690 280 L 510 280 L 510 300 L 690 300 L 690 320 L 600 320"
              fill="none"
              stroke="oklch(0.75 0.15 195)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
            />

            {/* Flow animation particles */}
            <circle r="3" fill="oklch(0.75 0.15 195)">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M 600 180 L 600 200 L 510 200 L 510 220 L 690 220 L 690 240 L 510 240 L 510 260 L 690 260 L 690 280 L 510 280 L 510 300 L 690 300 L 690 320 L 600 320"
              />
            </circle>
            <circle r="3" fill="oklch(0.75 0.15 195)">
              <animateMotion
                dur="6s"
                begin="2s"
                repeatCount="indefinite"
                path="M 600 180 L 600 200 L 510 200 L 510 220 L 690 220 L 690 240 L 510 240 L 510 260 L 690 260 L 690 280 L 510 280 L 510 300 L 690 300 L 690 320 L 600 320"
              />
            </circle>
            <circle r="3" fill="oklch(0.75 0.15 195)">
              <animateMotion
                dur="6s"
                begin="4s"
                repeatCount="indefinite"
                path="M 600 180 L 600 200 L 510 200 L 510 220 L 690 220 L 690 240 L 510 240 L 510 260 L 690 260 L 690 280 L 510 280 L 510 300 L 690 300 L 690 320 L 600 320"
              />
            </circle>

            {/* Channel labels */}
            <text x="520" y="215" fill="oklch(0.5 0.05 195)" fontSize="8" fontFamily="monospace">
              MIXING
            </text>
            <text x="520" y="255" fill="oklch(0.5 0.05 195)" fontSize="8" fontFamily="monospace">
              BINDING
            </text>
            <text x="520" y="295" fill="oklch(0.5 0.05 195)" fontSize="8" fontFamily="monospace">
              WASHING
            </text>

            {/* Detection chamber */}
            <rect
              x="540"
              y="340"
              width="120"
              height="70"
              rx="8"
              fill="oklch(0.08 0 0)"
              stroke="oklch(0.75 0.15 195)"
              strokeWidth="2"
              opacity="0.9"
            />
            <text x="555" y="365" fill="oklch(0.75 0.15 195)" fontSize="10" fontFamily="monospace" fontWeight="bold">
              DETECTION
            </text>
            <text x="560" y="380" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
              CCD Array
            </text>
            <text x="552" y="395" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
              Chemiluminescence
            </text>

            {/* Optical path indicator */}
            <path
              d="M 600 350 L 600 360"
              stroke="oklch(0.75 0.15 195)"
              strokeWidth="2"
              strokeDasharray="2,2"
              opacity="0.6"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="4" dur="0.5s" repeatCount="indefinite" />
            </path>

            {/* 3D printed layers visualization */}
            <g id="layer-structure">
              <text x="490" y="440" fill="oklch(0.5 0.05 195)" fontSize="9" fontFamily="monospace">
                3D-PRINTED LAYERS
              </text>
              {[450, 460, 470, 480, 490, 500, 510].map((y, i) => (
                <line
                  key={i}
                  x1="490"
                  y1={y}
                  x2="710"
                  y2={y}
                  stroke="oklch(0.75 0.15 195)"
                  strokeWidth="1"
                  strokeDasharray="6,3"
                  opacity={0.3 - i * 0.03}
                />
              ))}
            </g>
          </g>

          {/* Bottom section: Power & Connectivity */}
          <g id="power-section">
            <rect
              x="180"
              y="440"
              width="260"
              height="120"
              rx="8"
              fill="oklch(0.1 0 0)"
              stroke="oklch(0.65 0.12 260)"
              strokeWidth="1.5"
            />

            <text x="190" y="460" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace" fontWeight="bold">
              POWER & DATA
            </text>

            {/* Battery status */}
            <rect
              x="200"
              y="470"
              width="100"
              height="40"
              rx="4"
              fill="oklch(0.05 0 0)"
              stroke="oklch(0.65 0.12 260)"
              strokeWidth="1"
            />
            <rect x="205" y="475" width="75" height="30" rx="2" fill="oklch(0.75 0.15 195)" opacity="0.7" />
            <text x="215" y="495" fill="oklch(0.95 0 0)" fontSize="12" fontFamily="monospace" fontWeight="bold">
              87%
            </text>
            <text x="205" y="525" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
              Li-Ion 28VDC
            </text>

            {/* Data ports */}
            <rect
              x="320"
              y="475"
              width="40"
              height="20"
              rx="3"
              fill="oklch(0.15 0 0)"
              stroke="oklch(0.65 0.12 260)"
              strokeWidth="1.5"
            />
            <text x="328" y="489" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
              USB
            </text>

            <rect
              x="370"
              y="475"
              width="50"
              height="20"
              rx="3"
              fill="oklch(0.15 0 0)"
              stroke="oklch(0.65 0.12 260)"
              strokeWidth="1.5"
            />
            <text x="375" y="489" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
              RS-232
            </text>

            {/* Data transfer indicator */}
            <circle cx="330" cy="515" r="4" fill="oklch(0.75 0.15 195)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
            </circle>
            <text x="340" y="519" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
              Data Link Active
            </text>

            {/* Thermal management */}
            <text x="200" y="545" fill="oklch(0.5 0.05 195)" fontSize="9" fontFamily="monospace">
              THERMAL: 23°C
            </text>
          </g>

          {/* Waste collection */}
          <rect
            x="480"
            y="440"
            width="240"
            height="120"
            rx="8"
            fill="oklch(0.1 0 0)"
            stroke="oklch(0.65 0.12 260)"
            strokeWidth="1.5"
          />
          <text x="490" y="460" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace" fontWeight="bold">
            WASTE MANAGEMENT
          </text>

          <rect
            x="500"
            y="475"
            width="200"
            height="60"
            rx="6"
            fill="oklch(0.05 0 0)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="2"
          />
          <text x="550" y="510" fill="oklch(0.6 0.1 60)" fontSize="11" fontFamily="monospace" fontWeight="bold">
            CAPACITY: 43%
          </text>
          <rect x="510" y="520" width="86" height="8" rx="2" fill="oklch(0.6 0.1 60)" opacity="0.7" />

          <text x="520" y="550" fill="oklch(0.5 0.05 195)" fontSize="8" fontFamily="monospace">
            Sealed biocontainment
          </text>
        </g>

        {/* Technical callout lines and annotations */}
        <g id="annotations">
          {/* Sample inlet callout */}
          <line x1="600" y1="160" x2="780" y2="80" stroke="oklch(0.75 0.15 195)" strokeWidth="1" opacity="0.6" />
          <circle cx="600" cy="160" r="4" fill="oklch(0.75 0.15 195)" />
          <text x="785" y="75" fill="oklch(0.75 0.15 195)" fontSize="11" fontFamily="monospace" fontWeight="bold">
            Sample Inlet
          </text>
          <text x="785" y="88" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
            Blood/Saliva/Urine
          </text>
          <text x="785" y="100" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
            10-50μL volume
          </text>

          {/* Microfluidic callout */}
          <line x1="600" y1="260" x2="780" y2="200" stroke="oklch(0.75 0.15 195)" strokeWidth="1" opacity="0.6" />
          <circle cx="600" cy="260" r="4" fill="oklch(0.75 0.15 195)" />
          <text x="785" y="195" fill="oklch(0.75 0.15 195)" fontSize="11" fontFamily="monospace" fontWeight="bold">
            Microfluidic Array
          </text>
          <text x="785" y="208" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
            3D-Printed PEGDA
          </text>
          <text x="785" y="220" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
            15s binding time
          </text>

          {/* Detection callout */}
          <line x1="600" y1="375" x2="780" y2="320" stroke="oklch(0.75 0.15 195)" strokeWidth="1" opacity="0.6" />
          <circle cx="600" cy="375" r="4" fill="oklch(0.75 0.15 195)" />
          <text x="785" y="315" fill="oklch(0.75 0.15 195)" fontSize="11" fontFamily="monospace" fontWeight="bold">
            CCD Detection
          </text>
          <text x="785" y="328" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
            Chemiluminescence
          </text>
          <text x="785" y="340" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
            pg/mL sensitivity
          </text>

          {/* Power callout */}
          <line x1="240" y1="490" x2="80" y2="520" stroke="oklch(0.75 0.15 195)" strokeWidth="1" opacity="0.6" />
          <circle cx="240" cy="490" r="4" fill="oklch(0.75 0.15 195)" />
          <text
            x="30"
            y="515"
            fill="oklch(0.75 0.15 195)"
            fontSize="11"
            fontFamily="monospace"
            fontWeight="bold"
            textAnchor="end"
          >
            Power System
          </text>
          <text x="30" y="528" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace" textAnchor="end">
            12W nominal
          </text>
          <text x="30" y="540" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace" textAnchor="end">
            28VDC Li-Ion
          </text>
        </g>
      </svg>

      {/* Technical specifications grid */}
      <div className="mt-8 grid grid-cols-4 gap-6 text-center font-mono relative z-10">
        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">250mm</div>
          <div className="text-sm text-muted-foreground">Width</div>
          <div className="text-xs text-muted-foreground/60">±5mm tolerance</div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">290mm</div>
          <div className="text-sm text-muted-foreground">Height</div>
          <div className="text-xs text-muted-foreground/60">±5mm tolerance</div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">3.2kg</div>
          <div className="text-sm text-muted-foreground">Mass</div>
          <div className="text-xs text-muted-foreground/60">Without consumables</div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">500+</div>
          <div className="text-sm text-muted-foreground">Tests</div>
          <div className="text-xs text-muted-foreground/60">Mission capacity</div>
        </div>
      </div>
    </>
  )
}

function CrossSectionDiagram() {
  return (
    <>
      <svg viewBox="0 0 1000 700" className="w-full h-auto relative z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hatch" patternUnits="userSpaceOnUse" width="4" height="4">
            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="oklch(0.5 0.1 195)" strokeWidth="0.5" />
          </pattern>
        </defs>

        <text
          x="500"
          y="40"
          fill="oklch(0.75 0.15 195)"
          fontSize="20"
          fontFamily="monospace"
          fontWeight="bold"
          textAnchor="middle"
        >
          CROSS-SECTIONAL ARCHITECTURE
        </text>

        {/* Outer shell cutaway */}
        <path
          d="M 150 120 L 150 580 L 850 580 L 850 120 L 500 120"
          fill="url(#hatch)"
          stroke="oklch(0.75 0.15 195)"
          strokeWidth="3"
        />

        {/* Internal layers - front to back */}

        {/* Front panel assembly */}
        <rect
          x="160"
          y="130"
          width="30"
          height="440"
          fill="oklch(0.2 0 0)"
          stroke="oklch(0.65 0.12 260)"
          strokeWidth="2"
        />
        <text
          x="170"
          y="370"
          fill="oklch(0.65 0.12 260)"
          fontSize="10"
          fontFamily="monospace"
          transform="rotate(-90 170 370)"
        >
          FRONT PANEL
        </text>

        {/* Display module */}
        <g id="display-module">
          <rect
            x="210"
            y="150"
            width="200"
            height="180"
            fill="oklch(0.08 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="2"
          />
          <text x="220" y="175" fill="oklch(0.75 0.15 195)" fontSize="12" fontFamily="monospace" fontWeight="bold">
            LCD DISPLAY
          </text>

          {/* Display layers */}
          <rect x="220" y="190" width="180" height="5" fill="oklch(0.3 0.1 260)" />
          <text x="225" y="203" fill="oklch(0.6 0.1 195)" fontSize="8" fontFamily="monospace">
            Protective glass
          </text>

          <rect x="220" y="210" width="180" height="15" fill="oklch(0.15 0.1 195)" />
          <text x="225" y="223" fill="oklch(0.6 0.1 195)" fontSize="8" fontFamily="monospace">
            LCD matrix
          </text>

          <rect x="220" y="230" width="180" height="8" fill="oklch(0.25 0.05 195)" />
          <text x="225" y="241" fill="oklch(0.6 0.1 195)" fontSize="8" fontFamily="monospace">
            Backlight LED
          </text>

          {/* Electronics behind display */}
          <rect
            x="220"
            y="250"
            width="180"
            height="60"
            fill="oklch(0.12 0.05 140)"
            stroke="oklch(0.5 0.1 140)"
            strokeWidth="1"
          />
          <text x="240" y="285" fill="oklch(0.7 0.15 140)" fontSize="10" fontFamily="monospace" fontWeight="bold">
            CONTROL PCB
          </text>
          {/* Circuit traces */}
          <path
            d="M 230 260 L 390 260 M 230 270 L 350 270 M 270 280 L 390 280 M 230 290 L 380 290 M 250 300 L 390 300"
            stroke="oklch(0.6 0.15 140)"
            strokeWidth="1.5"
          />
        </g>

        {/* Microfluidic cartridge assembly - detailed cross section */}
        <g id="cartridge-cross-section">
          <text x="480" y="145" fill="oklch(0.75 0.15 195)" fontSize="12" fontFamily="monospace" fontWeight="bold">
            MICROFLUIDIC CARTRIDGE (3D-PRINTED)
          </text>

          {/* Cartridge housing */}
          <rect
            x="480"
            y="160"
            width="280"
            height="300"
            fill="oklch(0.1 0 0)"
            stroke="oklch(0.65 0.12 260)"
            strokeWidth="2"
          />

          {/* Layer structure from top to bottom */}
          {/* Top cover */}
          <rect
            x="490"
            y="170"
            width="260"
            height="12"
            fill="oklch(0.25 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="1"
          />
          <text x="500" y="180" fill="oklch(0.75 0.15 195)" fontSize="9" fontFamily="monospace">
            Sealing layer (PEGDA)
          </text>

          {/* Sample chamber */}
          <rect
            x="490"
            y="190"
            width="260"
            height="40"
            fill="oklch(0.15 0.1 195)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="1"
          />
          <text x="500" y="205" fill="oklch(0.75 0.15 195)" fontSize="10" fontFamily="monospace" fontWeight="bold">
            SAMPLE CHAMBER
          </text>
          <text x="500" y="218" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
            50μL capacity
          </text>
          {/* Fluid representation */}
          <ellipse cx="620" cy="210" rx="80" ry="15" fill="oklch(0.4 0.15 195)" opacity="0.5" />

          {/* Microchannel network */}
          <rect
            x="490"
            y="235"
            width="260"
            height="80"
            fill="oklch(0.12 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="1"
          />
          <text x="500" y="250" fill="oklch(0.75 0.15 195)" fontSize="10" fontFamily="monospace" fontWeight="bold">
            MIXING & BINDING CHANNELS
          </text>

          {/* Serpentine channels */}
          <path
            d="M 510 265 L 730 265 L 730 275 L 510 275 L 510 285 L 730 285 L 730 295 L 510 295"
            fill="none"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="3"
          />
          <text x="500" y="310" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
            Channel width: 200μm
          </text>

          {/* Antibody-coated membrane */}
          <rect
            x="490"
            y="320"
            width="260"
            height="25"
            fill="oklch(0.35 0.1 60)"
            stroke="oklch(0.7 0.15 60)"
            strokeWidth="2"
          />
          <text x="500" y="335" fill="oklch(0.95 0 0)" fontSize="10" fontFamily="monospace" fontWeight="bold">
            NITROCELLULOSE MEMBRANE (pre-coated)
          </text>
          {/* Antibody representation */}
          {[520, 560, 600, 640, 680, 720].map((x) => (
            <g key={x}>
              <circle cx={x} cy="332" r="4" fill="oklch(0.7 0.15 60)" />
              <path d={`M ${x} 328 L ${x - 2} 324 L ${x + 2} 324 Z`} fill="oklch(0.7 0.15 60)" />
            </g>
          ))}

          {/* Detection zone */}
          <rect
            x="490"
            y="350"
            width="260"
            height="60"
            fill="oklch(0.08 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="2"
          />
          <text x="500" y="368" fill="oklch(0.75 0.15 195)" fontSize="10" fontFamily="monospace" fontWeight="bold">
            OPTICAL DETECTION CHAMBER
          </text>

          {/* CCD sensor */}
          <rect
            x="570"
            y="375"
            width="100"
            height="25"
            fill="oklch(0.15 0.1 195)"
            stroke="oklch(0.65 0.12 260)"
            strokeWidth="1"
          />
          <text x="590" y="392" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
            CCD Array
          </text>

          {/* Light path */}
          <path d="M 620 350 L 620 375" stroke="oklch(0.75 0.15 195)" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="oklch(0.75 0.15 195)" />
            </marker>
          </defs>
          <text x="630" y="365" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
            Photon capture
          </text>

          {/* Waste outlet */}
          <rect
            x="490"
            y="415"
            width="260"
            height="35"
            fill="oklch(0.15 0.05 60)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="2"
          />
          <text x="500" y="435" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace" fontWeight="bold">
            WASTE COLLECTION PORT
          </text>
        </g>

        {/* Power and thermal management */}
        <g id="power-thermal">
          <rect
            x="210"
            y="350"
            width="200"
            height="120"
            fill="oklch(0.12 0.05 140)"
            stroke="oklch(0.5 0.1 140)"
            strokeWidth="2"
          />
          <text x="220" y="370" fill="oklch(0.7 0.15 140)" fontSize="12" fontFamily="monospace" fontWeight="bold">
            POWER MODULE
          </text>

          {/* Battery cells */}
          <rect
            x="225"
            y="380"
            width="35"
            height="70"
            fill="oklch(0.25 0.05 60)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="2"
          />
          <rect
            x="270"
            y="380"
            width="35"
            height="70"
            fill="oklch(0.25 0.05 60)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="2"
          />
          <rect
            x="315"
            y="380"
            width="35"
            height="70"
            fill="oklch(0.25 0.05 60)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="2"
          />
          <rect
            x="360"
            y="380"
            width="35"
            height="70"
            fill="oklch(0.25 0.05 60)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="2"
          />

          <text x="230" y="420" fill="oklch(0.8 0 0)" fontSize="20" fontFamily="monospace" fontWeight="bold">
            +
          </text>
          <text x="275" y="420" fill="oklch(0.8 0 0)" fontSize="20" fontFamily="monospace" fontWeight="bold">
            +
          </text>
          <text x="320" y="420" fill="oklch(0.8 0 0)" fontSize="20" fontFamily="monospace" fontWeight="bold">
            +
          </text>
          <text x="365" y="420" fill="oklch(0.8 0 0)" fontSize="20" fontFamily="monospace" fontWeight="bold">
            +
          </text>

          <text x="225" y="465" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
            Li-Ion 28VDC / 3.5Ah
          </text>

          {/* Thermal dissipation */}
          <rect
            x="210"
            y="480"
            width="200"
            height="80"
            fill="oklch(0.15 0 0)"
            stroke="oklch(0.65 0.12 260)"
            strokeWidth="1"
          />
          <text x="220" y="500" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace" fontWeight="bold">
            THERMAL MANAGEMENT
          </text>

          {/* Heat spreader */}
          <rect
            x="225"
            y="510"
            width="170"
            height="15"
            fill="oklch(0.35 0.05 60)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="1"
          />
          <text x="235" y="522" fill="oklch(0.8 0 0)" fontSize="8" fontFamily="monospace">
            Aluminum heat spreader
          </text>

          {/* Heat pipes */}
          <line x1="240" y1="530" x2="240" y2="550" stroke="oklch(0.5 0.1 195)" strokeWidth="4" />
          <line x1="280" y1="530" x2="280" y2="550" stroke="oklch(0.5 0.1 195)" strokeWidth="4" />
          <line x1="320" y1="530" x2="320" y2="550" stroke="oklch(0.5 0.1 195)" strokeWidth="4" />
          <line x1="360" y1="530" x2="360" y2="550" stroke="oklch(0.5 0.1 195)" strokeWidth="4" />
          <text x="225" y="565" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
            Passive heat pipes → radiator
          </text>
        </g>

        {/* Structural support */}
        <rect
          x="770"
          y="130"
          width="70"
          height="440"
          fill="oklch(0.2 0 0)"
          stroke="oklch(0.65 0.12 260)"
          strokeWidth="2"
        />
        <text
          x="785"
          y="370"
          fill="oklch(0.65 0.12 260)"
          fontSize="10"
          fontFamily="monospace"
          transform="rotate(-90 785 370)"
        >
          MOUNTING BRACKET
        </text>

        {/* Dimension lines */}
        <g id="dimensions" stroke="oklch(0.75 0.15 195)" strokeWidth="1">
          {/* Height dimension */}
          <line x1="870" y1="130" x2="870" y2="570" markerStart="url(#arrowhead)" markerEnd="url(#arrowhead)" />
          <text x="880" y="360" fill="oklch(0.75 0.15 195)" fontSize="12" fontFamily="monospace">
            290mm
          </text>

          {/* Cartridge height */}
          <line
            x1="770"
            y1="160"
            x2="770"
            y2="460"
            markerStart="url(#arrowhead)"
            markerEnd="url(#arrowhead)"
            strokeDasharray="3,3"
          />
          <text
            x="775"
            y="320"
            fill="oklch(0.65 0.12 260)"
            fontSize="10"
            fontFamily="monospace"
            transform="rotate(-90 775 320)"
          >
            Cartridge: 150mm
          </text>
        </g>

        {/* Material callouts */}
        <g id="material-annotations">
          <line x1="620" y1="180" x2="100" y2="100" stroke="oklch(0.75 0.15 195)" strokeWidth="1" opacity="0.6" />
          <text
            x="30"
            y="95"
            fill="oklch(0.75 0.15 195)"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
            textAnchor="end"
          >
            PEGDA Photopolymer
          </text>
          <text x="30" y="107" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace" textAnchor="end">
            Biocompatible, 50μm resolution
          </text>

          <line x1="620" y1="332" x2="100" y2="250" stroke="oklch(0.75 0.15 195)" strokeWidth="1" opacity="0.6" />
          <text
            x="30"
            y="245"
            fill="oklch(0.75 0.15 195)"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
            textAnchor="end"
          >
            Pre-coated Membrane
          </text>
          <text x="30" y="257" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace" textAnchor="end">
            Launched consumable insert
          </text>
        </g>
      </svg>

      <div className="mt-8 grid grid-cols-3 gap-6 font-mono relative z-10">
        <div className="p-4 bg-card/30 rounded-lg border border-primary/20">
          <div className="text-lg font-bold text-primary mb-2">Fluid Path</div>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>Sample inlet → Mixing chamber</div>
            <div>Serpentine channels (15s)</div>
            <div>Antibody binding zone</div>
            <div>Detection chamber → Waste</div>
          </div>
        </div>
        <div className="p-4 bg-card/30 rounded-lg border border-primary/20">
          <div className="text-lg font-bold text-primary mb-2">Optical System</div>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>Chemiluminescent substrate</div>
            <div>Dark chamber isolation</div>
            <div>CCD array: 1024×768px</div>
            <div>Sensitivity: pg/mL range</div>
          </div>
        </div>
        <div className="p-4 bg-card/30 rounded-lg border border-primary/20">
          <div className="text-lg font-bold text-primary mb-2">Thermal Design</div>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>Operating: 20-25°C</div>
            <div>Passive heat spreading</div>
            <div>Heat pipes to radiator</div>
            <div>±2°C stability required</div>
          </div>
        </div>
      </div>
    </>
  )
}

function ExplodedViewDiagram() {
  return (
    <>
      <svg viewBox="0 0 1000 900" className="w-full h-auto relative z-10" xmlns="http://www.w3.org/2000/svg">
        <text
          x="500"
          y="40"
          fill="oklch(0.75 0.15 195)"
          fontSize="20"
          fontFamily="monospace"
          fontWeight="bold"
          textAnchor="middle"
        >
          EXPLODED ASSEMBLY VIEW
        </text>

        {/* Assembly order indicators */}
        <defs>
          <marker id="assembly-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="oklch(0.65 0.12 260)" />
          </marker>
        </defs>

        {/* Component 1: Front housing */}
        <g id="front-housing">
          <rect
            x="300"
            y="80"
            width="400"
            height="80"
            rx="10"
            fill="oklch(0.15 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="2"
          />
          <text x="320" y="110" fill="oklch(0.75 0.15 195)" fontSize="14" fontFamily="monospace" fontWeight="bold">
            1. FRONT PANEL ASSEMBLY
          </text>
          <text x="320" y="130" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Material: Aluminum 6061-T6
          </text>
          <text x="320" y="145" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Display integration, control interface
          </text>

          {/* Mounting holes */}
          <circle cx="320" cy="95" r="5" fill="oklch(0.05 0 0)" stroke="oklch(0.65 0.12 260)" strokeWidth="1" />
          <circle cx="680" cy="95" r="5" fill="oklch(0.05 0 0)" stroke="oklch(0.65 0.12 260)" strokeWidth="1" />
          <circle cx="320" cy="145" r="5" fill="oklch(0.05 0 0)" stroke="oklch(0.65 0.12 260)" strokeWidth="1" />
          <circle cx="680" cy="145" r="5" fill="oklch(0.05 0 0)" stroke="oklch(0.65 0.12 260)" strokeWidth="1" />
        </g>

        {/* Assembly arrow */}
        <line
          x1="500"
          y1="165"
          x2="500"
          y2="185"
          stroke="oklch(0.65 0.12 260)"
          strokeWidth="2"
          markerEnd="url(#assembly-arrow)"
          strokeDasharray="5,5"
        />

        {/* Component 2: Display module */}
        <g id="display-module-exploded">
          <rect
            x="100"
            y="200"
            width="280"
            height="100"
            rx="8"
            fill="oklch(0.12 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="2"
          />
          <text x="120" y="225" fill="oklch(0.75 0.15 195)" fontSize="14" fontFamily="monospace" fontWeight="bold">
            2. LCD DISPLAY MODULE
          </text>
          <text x="120" y="245" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            5.7" LCD, 800×480px
          </text>
          <text x="120" y="260" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Capacitive touch interface
          </text>
          <text x="120" y="275" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Power: 2.5W @ 3.3VDC
          </text>

          {/* Display representation */}
          <rect
            x="120"
            y="235"
            width="100"
            height="55"
            rx="4"
            fill="oklch(0.08 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="1"
          />
          <path
            d="M 135 250 Q 150 240, 165 250 T 195 250"
            fill="none"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="1.5"
          />

          {/* Ribbon cable */}
          <rect
            x="230"
            y="260"
            width="60"
            height="8"
            fill="oklch(0.3 0.05 60)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="1"
          />
          <path
            d="M 240 264 L 280 264 M 245 264 L 245 268 M 255 264 L 255 268 M 265 264 L 265 268 M 275 264 L 275 268"
            stroke="oklch(0.2 0 0)"
            strokeWidth="0.5"
          />
          <text x="295" y="268" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
            20-pin FPC
          </text>
        </g>

        {/* Component 3: Control PCB */}
        <g id="control-pcb">
          <rect
            x="420"
            y="200"
            width="280"
            height="100"
            rx="8"
            fill="oklch(0.12 0.05 140)"
            stroke="oklch(0.5 0.1 140)"
            strokeWidth="2"
          />
          <text x="440" y="225" fill="oklch(0.7 0.15 140)" fontSize="14" fontFamily="monospace" fontWeight="bold">
            3. CONTROL PCB
          </text>
          <text x="440" y="245" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            STM32H7 MCU @ 480MHz
          </text>
          <text x="440" y="260" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            16MB Flash, 1MB SRAM
          </text>
          <text x="440" y="275" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            USB 2.0, RS-232 interfaces
          </text>

          {/* PCB representation */}
          <rect
            x="440"
            y="235"
            width="120"
            height="55"
            rx="3"
            fill="oklch(0.15 0.1 140)"
            stroke="oklch(0.6 0.15 140)"
            strokeWidth="1"
          />
          {/* Component outlines */}
          <rect x="450" y="245" width="20" height="15" fill="oklch(0.08 0 0)" />
          <rect x="480" y="245" width="25" height="25" fill="oklch(0.08 0 0)" />
          <rect x="515" y="250" width="15" height="10" fill="oklch(0.08 0 0)" />
          <rect x="540" y="245" width="10" height="10" fill="oklch(0.08 0 0)" />
          {/* Traces */}
          <path
            d="M 450 275 L 550 275 M 470 280 L 530 280 M 460 285 L 545 285"
            stroke="oklch(0.6 0.15 140)"
            strokeWidth="1"
          />

          {/* Connectors */}
          <rect
            x="570"
            y="245"
            width="15"
            height="35"
            fill="oklch(0.2 0 0)"
            stroke="oklch(0.65 0.12 260)"
            strokeWidth="1"
          />
          <text x="590" y="265" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
            GPIO
          </text>
        </g>

        <line
          x1="500"
          y1="305"
          x2="500"
          y2="325"
          stroke="oklch(0.65 0.12 260)"
          strokeWidth="2"
          markerEnd="url(#assembly-arrow)"
          strokeDasharray="5,5"
        />

        {/* Component 4: Microfluidic cartridge */}
        <g id="cartridge-exploded">
          <rect
            x="250"
            y="340"
            width="500"
            height="140"
            rx="10"
            fill="oklch(0.1 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="2"
          />
          <text x="270" y="365" fill="oklch(0.75 0.15 195)" fontSize="14" fontFamily="monospace" fontWeight="bold">
            4. MICROFLUIDIC CARTRIDGE (3D-PRINTED)
          </text>
          <text x="270" y="385" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Material: PEGDA photopolymer resin
          </text>
          <text x="270" y="400" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Print resolution: 50μm layer height
          </text>
          <text x="270" y="415" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Serpentine channel network, 200μm width
          </text>

          {/* Cartridge layers */}
          <g id="cartridge-layers">
            <rect
              x="280"
              y="430"
              width="150"
              height="8"
              fill="oklch(0.25 0 0)"
              stroke="oklch(0.75 0.15 195)"
              strokeWidth="1"
            />
            <text x="435" y="437" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
              Top seal layer
            </text>

            <rect
              x="280"
              y="442"
              width="150"
              height="20"
              fill="oklch(0.15 0.1 195)"
              stroke="oklch(0.75 0.15 195)"
              strokeWidth="1"
            />
            <path d="M 290 452 L 420 452" stroke="oklch(0.75 0.15 195)" strokeWidth="2" />
            <text x="435" y="455" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
              Mixing channels
            </text>

            <rect
              x="280"
              y="466"
              width="150"
              height="5"
              fill="oklch(0.35 0.1 60)"
              stroke="oklch(0.7 0.15 60)"
              strokeWidth="1"
            />
            <text x="435" y="471" fill="oklch(0.65 0.12 260)" fontSize="8" fontFamily="monospace">
              Nitrocellulose membrane
            </text>
          </g>

          {/* Sample ports */}
          <circle cx="600" cy="370" r="10" fill="oklch(0.65 0.12 260)" stroke="oklch(0.75 0.15 195)" strokeWidth="2" />
          <text x="615" y="375" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
            Sample inlet
          </text>

          <circle cx="600" cy="410" r="10" fill="oklch(0.6 0.1 60)" stroke="oklch(0.75 0.15 195)" strokeWidth="2" />
          <text x="615" y="415" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
            Reagent inlet
          </text>

          <circle cx="600" cy="450" r="10" fill="oklch(0.3 0.05 0)" stroke="oklch(0.6 0.1 60)" strokeWidth="2" />
          <text x="615" y="455" fill="oklch(0.65 0.12 260)" fontSize="9" fontFamily="monospace">
            Waste outlet
          </text>
        </g>

        <line
          x1="500"
          y1="485"
          x2="500"
          y2="505"
          stroke="oklch(0.65 0.12 260)"
          strokeWidth="2"
          markerEnd="url(#assembly-arrow)"
          strokeDasharray="5,5"
        />

        {/* Component 5: Detection module */}
        <g id="detection-module">
          <rect
            x="100"
            y="520"
            width="280"
            height="100"
            rx="8"
            fill="oklch(0.08 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="2"
          />
          <text x="120" y="545" fill="oklch(0.75 0.15 195)" fontSize="14" fontFamily="monospace" fontWeight="bold">
            5. CCD DETECTION MODULE
          </text>
          <text x="120" y="565" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Sensor: Sony ICX098BQ
          </text>
          <text x="120" y="580" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Resolution: 1024×768 px
          </text>
          <text x="120" y="595" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Sensitivity: 0.01 lux
          </text>

          {/* CCD representation */}
          <rect
            x="230"
            y="545"
            width="130"
            height="60"
            rx="4"
            fill="oklch(0.12 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="1"
          />
          <rect x="240" y="555" width="110" height="40" rx="2" fill="oklch(0.15 0.1 195)" />
          <g id="pixel-grid">
            {[...Array(8)].map((_, i) => (
              <line
                key={`v${i}`}
                x1={250 + i * 15}
                y1="560"
                x2={250 + i * 15}
                y2="590"
                stroke="oklch(0.3 0 0)"
                strokeWidth="0.5"
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <line
                key={`h${i}`}
                x1="250"
                y1={560 + i * 8}
                x2="340"
                y2={560 + i * 8}
                stroke="oklch(0.3 0 0)"
                strokeWidth="0.5"
              />
            ))}
          </g>
        </g>

        {/* Component 6: Power module */}
        <g id="power-module-exploded">
          <rect
            x="420"
            y="520"
            width="280"
            height="100"
            rx="8"
            fill="oklch(0.12 0.05 140)"
            stroke="oklch(0.5 0.1 140)"
            strokeWidth="2"
          />
          <text x="440" y="545" fill="oklch(0.7 0.15 140)" fontSize="14" fontFamily="monospace" fontWeight="bold">
            6. POWER MODULE
          </text>
          <text x="440" y="565" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Battery: 4S1P Li-Ion (28V)
          </text>
          <text x="440" y="580" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Capacity: 3500mAh (98Wh)
          </text>
          <text x="440" y="595" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Runtime: ~8 hours continuous
          </text>

          {/* Battery cells */}
          <rect
            x="590"
            y="540"
            width="25"
            height="60"
            rx="3"
            fill="oklch(0.25 0.05 60)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="2"
          />
          <rect
            x="620"
            y="540"
            width="25"
            height="60"
            rx="3"
            fill="oklch(0.25 0.05 60)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="2"
          />
          <rect
            x="650"
            y="540"
            width="25"
            height="60"
            rx="3"
            fill="oklch(0.25 0.05 60)"
            stroke="oklch(0.6 0.1 60)"
            strokeWidth="2"
          />

          <text x="598" y="575" fill="oklch(0.8 0 0)" fontSize="18" fontFamily="monospace" fontWeight="bold">
            +
          </text>
          <text x="628" y="575" fill="oklch(0.8 0 0)" fontSize="18" fontFamily="monospace" fontWeight="bold">
            +
          </text>
          <text x="658" y="575" fill="oklch(0.8 0 0)" fontSize="18" fontFamily="monospace" fontWeight="bold">
            +
          </text>
        </g>

        <line
          x1="500"
          y1="625"
          x2="500"
          y2="645"
          stroke="oklch(0.65 0.12 260)"
          strokeWidth="2"
          markerEnd="url(#assembly-arrow)"
          strokeDasharray="5,5"
        />

        {/* Component 7: Rear housing */}
        <g id="rear-housing">
          <rect
            x="300"
            y="660"
            width="400"
            height="80"
            rx="10"
            fill="oklch(0.15 0 0)"
            stroke="oklch(0.75 0.15 195)"
            strokeWidth="2"
          />
          <text x="320" y="690" fill="oklch(0.75 0.15 195)" fontSize="14" fontFamily="monospace" fontWeight="bold">
            7. REAR HOUSING & THERMAL MANAGEMENT
          </text>
          <text x="320" y="710" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Aluminum chassis with integrated heat pipes
          </text>
          <text x="320" y="725" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Passive cooling to external radiator
          </text>

          {/* Heat pipes */}
          <rect
            x="620"
            y="675"
            width="8"
            height="50"
            fill="oklch(0.5 0.1 195)"
            stroke="oklch(0.65 0.12 260)"
            strokeWidth="1"
          />
          <rect
            x="640"
            y="675"
            width="8"
            height="50"
            fill="oklch(0.5 0.1 195)"
            stroke="oklch(0.65 0.12 260)"
            strokeWidth="1"
          />
          <rect
            x="660"
            y="675"
            width="8"
            height="50"
            fill="oklch(0.5 0.1 195)"
            stroke="oklch(0.65 0.12 260)"
            strokeWidth="1"
          />

          {/* Mounting brackets */}
          <path d="M 310 670 L 310 650 L 325 650" stroke="oklch(0.65 0.12 260)" strokeWidth="2" />
          <path d="M 690 670 L 690 650 L 675 650" stroke="oklch(0.65 0.12 260)" strokeWidth="2" />
        </g>

        {/* Assembly notes */}
        <g id="assembly-notes">
          <text x="50" y="780" fill="oklch(0.75 0.15 195)" fontSize="12" fontFamily="monospace" fontWeight="bold">
            ASSEMBLY NOTES:
          </text>
          <text x="50" y="800" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            • All fasteners: M3 stainless steel
          </text>
          <text x="50" y="815" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            • Thermal paste required between PCB and housing
          </text>
          <text x="50" y="830" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            • ESD precautions during CCD module installation
          </text>
          <text x="50" y="845" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            • Cartridge must seal with {"<"}5psi pressure test
          </text>

          <text x="550" y="780" fill="oklch(0.75 0.15 195)" fontSize="12" fontFamily="monospace" fontWeight="bold">
            MASS BREAKDOWN:
          </text>
          <text x="550" y="800" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Housing: 850g | PCB: 120g | Display: 180g
          </text>
          <text x="550" y="815" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            CCD: 95g | Power: 420g | Cartridge: 65g
          </text>
          <text x="550" y="830" fill="oklch(0.65 0.12 260)" fontSize="10" fontFamily="monospace">
            Cables/misc: 220g
          </text>
          <text x="550" y="845" fill="oklch(0.75 0.15 195)" fontSize="11" fontFamily="monospace" fontWeight="bold">
            TOTAL: 1,950g (excl. consumables)
          </text>
        </g>
      </svg>

      <div className="mt-8 grid grid-cols-2 gap-6 font-mono relative z-10">
        <div className="p-6 bg-card/30 rounded-lg border border-primary/20">
          <div className="text-xl font-bold text-primary mb-4">3D Printable Components</div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <div className="text-primary mt-1">✓</div>
              <div>
                <span className="font-semibold">Microfluidic cartridge body</span>
                <div className="text-xs">PEGDA resin, 50μm layers, 4hr print time</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary mt-1">✓</div>
              <div>
                <span className="font-semibold">Sample collection devices</span>
                <div className="text-xs">Funnels, syringes, caps - ABS or PLA</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary mt-1">✓</div>
              <div>
                <span className="font-semibold">Optical alignment fixtures</span>
                <div className="text-xs">CCD mounting brackets, light baffles</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-muted-foreground/50 mt-1">✗</div>
              <div className="text-muted-foreground/70">
                <span className="font-semibold">Pre-coated membranes</span>
                <div className="text-xs">Requires Earth-based manufacturing</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-muted-foreground/50 mt-1">✗</div>
              <div className="text-muted-foreground/70">
                <span className="font-semibold">CCD sensors & electronics</span>
                <div className="text-xs">Must be launched as pre-manufactured</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-card/30 rounded-lg border border-primary/20">
          <div className="text-xl font-bold text-primary mb-4">Manufacturing Timeline</div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center pb-2 border-b border-primary/20">
              <span className="text-muted-foreground">Component</span>
              <span className="text-muted-foreground">Time</span>
            </div>
            <div className="flex justify-between items-center">
              <span>PCB fabrication & assembly</span>
              <span className="font-mono text-primary">2 weeks</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Housing machining</span>
              <span className="font-mono text-primary">1 week</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Cartridge 3D printing (×10)</span>
              <span className="font-mono text-primary">40 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span>CCD module procurement</span>
              <span className="font-mono text-primary">6 weeks</span>
            </div>
            <div className="flex justify-between items-center">
              <span>System integration & testing</span>
              <span className="font-mono text-primary">3 weeks</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-primary/20 font-bold">
              <span className="text-primary">Total lead time</span>
              <span className="font-mono text-primary">12 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

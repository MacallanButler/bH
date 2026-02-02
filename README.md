# Blue Horizon 🌊
**A Premium Scuba Diving Booking Platform & Dive Intelligence System**

![Blue Horizon Banner](https://images.unsplash.com/photo-1682687220208-22d7a2543e88?q=80&w=2670&auto=format&fit=crop)

> **Live Demo**: `http://localhost:3000` (Locally) | **Status**: Prototype Complete  
> **Role**: Lead Frontend Engineer  

Blue Horizon is a modern, conservation-first platform designed to revolutionize how divers explore and book underwater expeditions. It combines rich data visualization (marine life heatmaps, 3D typography) with a transparent, seamless booking experience.

## 🚀 Key Features

### 🔹 Dive Site Intelligence
- **Interactive Dive Exploration**: Browse curated sites with difficulty ratings and real-time conditions.
- **Marine Life Likelihood Calendar**: A heatmap visualization predicting wildlife sightings based on seasonal data.
- **Crowd Forecast**: Intelligence tool helping divers avoid peak congestion times.
- **Underwater Topography**: Stylized depth map visualizations.

### 🔹 Booking & Logistics
- **Smart Booking Wizard**: Multi-step flow for selecting dates, sites, and diving qualifications.
- **Transparent Pricing**: Real-time cost calculator with itemized gear rental and mandatory conservation fees.
- **Dynamic Equipment Selection**: Toggle gear needs (BCD, Regs, etc.) and see the price update instantly.

### 🔹 Premium "Ocean" Design Service
- **Custom Design System**: Built on a tailored "Ocean Gradient" palette (Deep Navy → Turquoise → Seafoam).
- **Fluid Animations**: Smooth page transitions and micro-interactions using Framer Motion.
- **Responsive Layout**: Fully optimized for mobile dive planning on the go.

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v3 + Shadcn UI (Customized)
- **Animation**: Framer Motion
- **State Management**: React Hooks + Local State
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 🏗️ Project Structure

```bash
src/
├── components/
│   ├── features/       # Specialized components (MarineCalendar, PricingSummary)
│   ├── layout/         # App shell (Navigation, Footer)
│   └── ui/             # Reusable Shadcn primitives
├── data/               # Mock data for dive sites and prices
├── pages/              # Route views (Home, DiveSites, Booking)
└── lib/                # Utilities and helpers
```

## 🏁 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

---

*Designed with 💙 for the Ocean.*

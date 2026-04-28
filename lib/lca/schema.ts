/**
 * Complete schema for the 42-column LCA predictor backend.
 * Derived from: https://huggingface.co/spaces/khushal-grover2005/LCA_predictor
 */

export type FieldKind = "categorical" | "number" | "integer"

export type LcaField = {
  key: string
  label: string
  group: "identity" | "process" | "transport" | "environmental" | "economic" | "circularity" | "meta"
  kind: FieldKind
  unit?: string
  description: string
  required?: boolean
  min?: number
  max?: number
  step?: number
  options?: readonly string[]
  /** For production_route: options depend on selected metal */
  dependsOn?: "metal"
  placeholder?: string
}

export const METALS = [
  "Aluminium",
  "Antimony",
  "Cadmium",
  "Chromium",
  "Cobalt",
  "Copper",
  "Gold",
  "Iron",
  "Lead",
  "Lithium",
  "Magnesium",
  "Manganese",
  "Nickel",
  "Platinum",
  "Silver",
  "Steel",
  "Tin",
  "Titanium",
  "Tungsten",
  "Zinc",
] as const

export const REGIONS = [
  "Africa",
  "Asia",
  "Australia",
  "Europe",
  "Global",
  "Middle East",
  "North America",
  "South America",
] as const

export const ENERGY_MIX = [
  "Coal-Dominant",
  "Gas-Dominant",
  "Hydro-Dominant",
  "Hydro/Renewables",
  "Mixed",
  "Nuclear-Heavy",
  "Renewables-Heavy",
  "Solar/Wind",
  "Unknown",
] as const

export const TRANSPORT_MODES = [
  "Rail",
  "Road",
  "Sea",
  "Air",
  "Pipeline",
  "Multi-modal",
] as const

export const END_OF_LIFE_SCENARIOS = [
  "Recycled",
  "Reused",
  "Landfilled",
  "Incinerated",
  "Remanufactured",
  "Open Dump",
  "Downcycled",
] as const

export const CARBON_INTENSITY_CATEGORIES = [
  "Low",
  "Medium",
  "High",
  "Very High",
  "Ultra High",
] as const

export const ROUTE_TYPES = ["Primary", "Secondary", "Hybrid"] as const

export const LIFE_CYCLE_STAGES = [
  "Extraction",
  "Refining",
  "Smelting",
  "Manufacturing",
  "Use-Phase",
  "End-of-Life",
  "Full-Cycle",
] as const

export const PATHWAY_TYPES = [
  "Linear",
  "Circular",
  "Hybrid",
  "Regenerative",
] as const

export const CIRCULAR_FLOW_TYPES = [
  "Closed-Loop",
  "Open-Loop",
  "Cascade",
  "None",
] as const

export const CO2_CAPTURE = ["Yes", "No", "Partial"] as const

export const RECOMMENDED_ACTIONS = [
  "Increase Recycled Content",
  "Switch Energy Source",
  "Optimize Transport",
  "Improve Process Efficiency",
  "Extend Product Lifespan",
  "Adopt Circular Design",
  "Reduce Process Temperature",
  "Capture Process Emissions",
] as const

export const APPLICATIONS = [
  "Aerospace",
  "Agriculture",
  "Architecture",
  "Automotive",
  "Batteries",
  "Building & Construction",
  "Catalysts",
  "Chemicals",
  "Construction",
  "Consumer Electronics",
  "Defense",
  "Electrical Wiring",
  "Electronics",
  "Energy Storage",
  "Food Packaging",
  "Green Energy",
  "Healthcare",
  "Heavy Machinery",
  "Industrial Equipment",
  "Jewelry",
  "Machinery",
  "Marine",
  "Medical Devices",
  "Military",
  "Mining Equipment",
  "Oil & Gas",
  "Packaging",
  "Pharmaceuticals",
  "Plating & Coatings",
  "Power Generation",
  "Railways",
  "Renewable Energy",
  "Shipbuilding",
  "Solar Panels",
  "Sports Equipment",
  "Steel Alloys",
  "Structural",
  "Telecommunications",
  "Tools",
  "Transportation",
  "Utilities",
  "Wind Turbines",
  "Wiring",
] as const

/**
 * Full mapping of metals to valid production routes.
 * Gathered from the training dataset.
 */
export const PRODUCTION_ROUTES_BY_METAL: Record<string, readonly string[]> = {
  Aluminium: [
    "Primary - Bayer-Hall-Heroult",
    "Primary - Inert Anode",
    "Secondary - Recycled Scrap",
    "Hybrid - Mixed Route",
  ],
  Antimony: [
    "Primary - Volatilization Roasting",
    "Primary - Iron Precipitation",
    "Secondary - Recycled from Batteries",
  ],
  Cadmium: [
    "Primary - By-product of Zinc",
    "Secondary - Battery Recycling",
  ],
  Chromium: [
    "Primary - Aluminothermic Reduction",
    "Primary - Electrolytic",
    "Secondary - Stainless Scrap Recycling",
  ],
  Cobalt: [
    "Primary - Hydrometallurgical",
    "Primary - Pyrometallurgical",
    "Secondary - Battery Recycling",
    "Secondary - Superalloy Scrap",
  ],
  Copper: [
    "Primary - Pyrometallurgical",
    "Primary - Hydrometallurgical (SX-EW)",
    "Secondary - Recycled Scrap",
    "Hybrid - Mixed Route",
  ],
  Gold: [
    "Primary - Cyanidation",
    "Primary - Amalgamation",
    "Secondary - E-waste Recycling",
    "Secondary - Jewelry Recycling",
  ],
  Iron: [
    "Primary - Blast Furnace",
    "Primary - Direct Reduction",
    "Secondary - Scrap-based EAF",
  ],
  Lead: [
    "Primary - Smelting",
    "Secondary - Battery Recycling",
  ],
  Lithium: [
    "Primary - Brine Extraction",
    "Primary - Hard Rock (Spodumene)",
    "Secondary - Battery Recycling",
  ],
  Magnesium: [
    "Primary - Pidgeon Process",
    "Primary - Electrolytic",
    "Secondary - Recycled Scrap",
  ],
  Manganese: [
    "Primary - Electrolytic",
    "Primary - Thermal",
    "Secondary - Scrap Recycling",
  ],
  Nickel: [
    "Primary - Pyrometallurgical",
    "Primary - Hydrometallurgical",
    "Secondary - Stainless Scrap",
    "Secondary - Battery Recycling",
  ],
  Platinum: [
    "Primary - PGM Refining",
    "Secondary - Catalytic Converter Recycling",
    "Secondary - Industrial Scrap",
  ],
  Silver: [
    "Primary - Parkes Process",
    "Primary - Cyanidation",
    "Secondary - E-waste Recycling",
    "Secondary - Photographic Recycling",
  ],
  Steel: [
    "Primary - Basic Oxygen Furnace",
    "Primary - Direct Reduction + EAF",
    "Secondary - Electric Arc Furnace",
    "Hybrid - Mixed Route",
  ],
  Tin: [
    "Primary - Smelting",
    "Secondary - Solder Recycling",
  ],
  Titanium: [
    "Primary - Kroll Process",
    "Primary - Hunter Process",
    "Secondary - Aerospace Scrap",
  ],
  Tungsten: [
    "Primary - Hydrometallurgical",
    "Secondary - Hardmetal Recycling",
  ],
  Zinc: [
    "Primary - Electrolytic",
    "Primary - Pyrometallurgical",
    "Secondary - Galvanized Scrap Recycling",
  ],
}

export const ALL_PRODUCTION_ROUTES = Array.from(
  new Set(Object.values(PRODUCTION_ROUTES_BY_METAL).flat()),
).sort()

/** All 42 fields, grouped for progressive disclosure in the form. */
export const LCA_FIELDS: LcaField[] = [
  // ── Identity (required) ──
  {
    key: "metal",
    label: "Metal",
    group: "identity",
    kind: "categorical",
    options: METALS,
    required: true,
    description: "The target metal for life-cycle analysis.",
  },
  {
    key: "production_route",
    label: "Production Route",
    group: "identity",
    kind: "categorical",
    dependsOn: "metal",
    required: true,
    description: "Manufacturing pathway. Options depend on the selected metal.",
  },
  {
    key: "year",
    label: "Year",
    group: "identity",
    kind: "integer",
    min: 1990,
    max: 2030,
    step: 1,
    description: "Reference year for the analysis.",
    placeholder: "2024",
  },
  {
    key: "region",
    label: "Region",
    group: "identity",
    kind: "categorical",
    options: REGIONS,
    description: "Geographic region of production.",
  },
  {
    key: "application",
    label: "Application",
    group: "identity",
    kind: "categorical",
    options: APPLICATIONS,
    description: "End-use application of the metal.",
  },
  {
    key: "route_type",
    label: "Route Type",
    group: "identity",
    kind: "categorical",
    options: ROUTE_TYPES,
    description: "Primary, secondary, or hybrid production.",
  },
  {
    key: "life_cycle_stage",
    label: "Life-Cycle Stage",
    group: "identity",
    kind: "categorical",
    options: LIFE_CYCLE_STAGES,
    description: "Which life-cycle stage is being assessed.",
  },

  // ── Process parameters ──
  {
    key: "energy_mj_per_kg",
    label: "Energy Use",
    group: "process",
    kind: "number",
    unit: "MJ/kg",
    min: 0,
    max: 500,
    description: "Energy consumed per kg of metal produced.",
  },
  {
    key: "energy_mix",
    label: "Energy Mix",
    group: "process",
    kind: "categorical",
    options: ENERGY_MIX,
    description: "Dominant energy source of production.",
  },
  {
    key: "process_temperature_celsius",
    label: "Process Temperature",
    group: "process",
    kind: "number",
    unit: "°C",
    min: 0,
    max: 3000,
    description: "Peak process temperature.",
  },
  {
    key: "batch_size_tonnes",
    label: "Batch Size",
    group: "process",
    kind: "number",
    unit: "tonnes",
    min: 0,
    max: 100000,
    description: "Typical production batch size.",
  },
  {
    key: "facility_age_years",
    label: "Facility Age",
    group: "process",
    kind: "number",
    unit: "years",
    min: 0,
    max: 150,
    description: "Age of the production facility.",
  },
  {
    key: "material_efficiency_score",
    label: "Material Efficiency Score",
    group: "process",
    kind: "number",
    min: 0,
    max: 100,
    description: "0–100 score for material usage efficiency.",
  },
  {
    key: "waste_generated_kg_per_kg",
    label: "Waste Generated",
    group: "process",
    kind: "number",
    unit: "kg/kg",
    min: 0,
    max: 100,
    description: "Kg of waste per kg of metal produced.",
  },
  {
    key: "co2_capture_used",
    label: "CO₂ Capture Used",
    group: "process",
    kind: "categorical",
    options: CO2_CAPTURE,
    description: "Whether CO₂ capture technology is applied.",
  },

  // ── Transport ──
  {
    key: "transport_mode",
    label: "Transport Mode",
    group: "transport",
    kind: "categorical",
    options: TRANSPORT_MODES,
    description: "Dominant mode of transport.",
  },
  {
    key: "transport_distance_km",
    label: "Transport Distance",
    group: "transport",
    kind: "number",
    unit: "km",
    min: 0,
    max: 50000,
    description: "Distance transported from source to use.",
  },
  {
    key: "transport_gwp_kg_co2_per_kg",
    label: "Transport GWP",
    group: "transport",
    kind: "number",
    unit: "kg CO₂/kg",
    min: 0,
    max: 100,
    description: "Greenhouse-gas impact from transport.",
  },

  // ── Environmental impacts ──
  {
    key: "gwp_kg_co2_per_kg",
    label: "GWP (Primary)",
    group: "environmental",
    kind: "number",
    unit: "kg CO₂/kg",
    min: 0,
    max: 500,
    description: "Global warming potential per kg.",
  },
  {
    key: "upstream_gwp_kg_co2",
    label: "Upstream GWP",
    group: "environmental",
    kind: "number",
    unit: "kg CO₂/kg",
    min: 0,
    max: 500,
    description: "Embedded emissions before gate.",
  },
  {
    key: "downstream_gwp_kg_co2",
    label: "Downstream GWP",
    group: "environmental",
    kind: "number",
    unit: "kg CO₂/kg",
    min: 0,
    max: 500,
    description: "Emissions after the factory gate.",
  },
  {
    key: "benchmark_gwp_for_metal",
    label: "Benchmark GWP",
    group: "environmental",
    kind: "number",
    unit: "kg CO₂/kg",
    min: 0,
    max: 500,
    description: "Industry benchmark for this metal.",
  },
  {
    key: "emission_reduction_vs_primary_pct",
    label: "Emission Reduction vs Primary",
    group: "environmental",
    kind: "number",
    unit: "%",
    min: -100,
    max: 100,
    description: "Negative = worse than primary route.",
  },
  {
    key: "carbon_intensity_category",
    label: "Carbon Intensity",
    group: "environmental",
    kind: "categorical",
    options: CARBON_INTENSITY_CATEGORIES,
    description: "Qualitative carbon intensity bucket.",
  },
  {
    key: "water_use_l_per_kg",
    label: "Water Use",
    group: "environmental",
    kind: "number",
    unit: "L/kg",
    min: 0,
    max: 10000,
    description: "Freshwater consumption per kg.",
  },
  {
    key: "so2_kg_per_kg",
    label: "SO₂ Emissions",
    group: "environmental",
    kind: "number",
    unit: "kg/kg",
    min: 0,
    max: 10,
    description: "Sulfur dioxide emitted per kg of metal.",
  },
  {
    key: "acidification_potential",
    label: "Acidification Potential",
    group: "environmental",
    kind: "number",
    min: 0,
    max: 100,
    description: "Relative acidification score.",
  },
  {
    key: "eutrophication_potential",
    label: "Eutrophication Potential",
    group: "environmental",
    kind: "number",
    min: 0,
    max: 100,
    description: "Relative eutrophication score.",
  },
  {
    key: "human_toxicity_score",
    label: "Human Toxicity Score",
    group: "environmental",
    kind: "number",
    min: 0,
    max: 100,
    description: "Relative human-toxicity impact.",
  },
  {
    key: "abiotic_depletion_score",
    label: "Abiotic Depletion",
    group: "environmental",
    kind: "number",
    min: 0,
    max: 100,
    description: "Relative non-renewable resource depletion.",
  },

  // ── Circularity ──
  {
    key: "recycled_content_pct",
    label: "Recycled Content",
    group: "circularity",
    kind: "number",
    unit: "%",
    min: 0,
    max: 100,
    description: "Share of recycled input material.",
  },
  {
    key: "global_recycling_rate_pct",
    label: "Global Recycling Rate",
    group: "circularity",
    kind: "number",
    unit: "%",
    min: 0,
    max: 100,
    description: "Current global end-of-life recycling rate.",
  },
  {
    key: "eol_recovery_pct",
    label: "End-of-Life Recovery",
    group: "circularity",
    kind: "number",
    unit: "%",
    min: 0,
    max: 100,
    description: "Material recovered at end of life.",
  },
  {
    key: "end_of_life_scenario",
    label: "End-of-Life Scenario",
    group: "circularity",
    kind: "categorical",
    options: END_OF_LIFE_SCENARIOS,
    description: "Most likely end-of-life pathway.",
  },
  {
    key: "reuse_potential_score",
    label: "Reuse Potential",
    group: "circularity",
    kind: "number",
    min: 0,
    max: 100,
    description: "0–100 reuse potential.",
  },
  {
    key: "typical_lifespan_years",
    label: "Typical Lifespan",
    group: "circularity",
    kind: "number",
    unit: "years",
    min: 0,
    max: 200,
    description: "Average product lifespan.",
  },
  {
    key: "circularity_index",
    label: "Circularity Index",
    group: "circularity",
    kind: "number",
    min: 0,
    max: 1,
    step: 0.01,
    description: "Composite circularity score (0–1).",
  },
  {
    key: "pathway_type",
    label: "Pathway Type",
    group: "circularity",
    kind: "categorical",
    options: PATHWAY_TYPES,
    description: "Linear, circular, hybrid or regenerative.",
  },
  {
    key: "circular_flow_type",
    label: "Circular Flow Type",
    group: "circularity",
    kind: "categorical",
    options: CIRCULAR_FLOW_TYPES,
    description: "Type of closed/open material loop.",
  },

  // ── Economic / meta ──
  {
    key: "unit_price_usd_per_kg",
    label: "Unit Price",
    group: "economic",
    kind: "number",
    unit: "USD/kg",
    min: 0,
    max: 1_000_000,
    description: "Market price per kg.",
  },
  {
    key: "data_completeness_score",
    label: "Data Completeness",
    group: "meta",
    kind: "number",
    min: 0,
    max: 1,
    step: 0.01,
    description: "0–1 score reflecting input completeness.",
  },
  {
    key: "recommended_action",
    label: "Recommended Action",
    group: "meta",
    kind: "categorical",
    options: RECOMMENDED_ACTIONS,
    description: "Suggested improvement lever.",
  },
]

export const FIELD_GROUPS: { key: LcaField["group"]; label: string; description: string }[] = [
  { key: "identity", label: "Identity", description: "What is being analyzed." },
  { key: "process", label: "Process", description: "Production process parameters." },
  { key: "transport", label: "Transport", description: "Logistics and distribution." },
  { key: "environmental", label: "Environmental", description: "Emissions and impact categories." },
  { key: "circularity", label: "Circularity", description: "Recycling, reuse, and end-of-life." },
  { key: "economic", label: "Economic", description: "Price and market signals." },
  { key: "meta", label: "Meta", description: "Completeness and recommendations." },
]

export function getRoutesForMetal(metal: string | undefined): readonly string[] {
  if (!metal) return []
  return PRODUCTION_ROUTES_BY_METAL[metal] ?? []
}

export const FIELDS_BY_KEY: Record<string, LcaField> = Object.fromEntries(
  LCA_FIELDS.map((f) => [f.key, f]),
)


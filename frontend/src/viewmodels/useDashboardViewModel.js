export function useDashboardViewModel() {
  const header = {
    title: "Carrot Seed Planting Dashboard",
    operator: "John Doe",
    status: "Live",
  };

  const metrics = [
    { label: "Session Time", value: "01:12:30" },
    { label: "Total Seeds Detected", value: "18,750" },
    { label: "Average Rate", value: "6.2 seeds/sec" },
    { label: "Planter Speed", value: "2.0 MPH" },
  ];

  const seedRateData = [
    { t: "0s", rate: 4.8 },
    { t: "10s", rate: 5.6 },
    { t: "20s", rate: 6.1 },
    { t: "30s", rate: 6.9 },
    { t: "40s", rate: 6.2 },
    { t: "50s", rate: 5.8 },
    { t: "60s", rate: 6.4 },
  ];

  const tubePerfData = [
    { tube: "T1", seeds: 120 },
    { tube: "T2", seeds: 118 },
    { tube: "T3", seeds: 0 },
    { tube: "T4", seeds: 121 },
    { tube: "T5", seeds: 66 },
    { tube: "T6", seeds: 119 },
  ];

  const tubeStatuses = [
    { name: "Tube 1", status: "OK", tone: "green" },
    { name: "Tube 2", status: "OK", tone: "green" },
    { name: "Tube 3", status: "0 Seeds (Jam)", tone: "red" },
    { name: "Tube 4", status: "OK", tone: "green" },
    { name: "Tube 5", status: "Low Seed", tone: "yellow" },
    { name: "Tube 6", status: "OK", tone: "green" },
  ];

  const alerts = [
    { message: "Tube 3 Jam Detected", tone: "red", icon: "🚨" },
    { message: "Tube 5 Low Seed Rate", tone: "yellow", icon: "⚠" },
    { message: "All Other Tubes Normal", tone: "green", icon: "✓" },
  ];

  const analytics = [
    { label: "Total Acres", value: "145.3" },
    { label: "Precision Score", value: "92%" },
    { label: "Seed Distribution Accuracy", value: "88%" },
  ];

  return {
    header,
    metrics,
    seedRateData,
    tubePerfData,
    tubeStatuses,
    alerts,
    analytics,
  };
}
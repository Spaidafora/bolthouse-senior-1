export function useSessionDetailsViewModel() {
  const session = {
    session_id: "SESS-001",
    field_name: "Field A",
    date: "Apr 20, 2025",
    start_time: "6:00 AM",
    end_time: "7:12 AM",
    total_time: "01:12:30",
    crop_type: "Corn",
    seed_variety: "Golden Sweet",
    total_seeds_counted: "18,750",
    average_spacing: "6.2 in",
    average_speed: "2.0 MPH",
    total_distance_travelled: "3.4 mi",
    status: "Completed",
  };

  const equipment = {
    tractor_name: "John Deere 5075E",
    planter_name: "Precision Air Seeder",
    edge_device: "Edge Unit A1",
  };

  const operator = {
    name: "John Doe",
    employee_code: "EMP-1001",
  };

  const field = {
    name: "Field A",
    boundary: "Boundary loaded",
    area: "24.5 acres",
  };

  const rowMetrics = [
    { row: 1, seeds: 3120, spacing: "6.1 in", status: "OK" },
    { row: 2, seeds: 3050, spacing: "6.3 in", status: "OK" },
    { row: 3, seeds: 0, spacing: "-", status: "Jam" },
    { row: 4, seeds: 3180, spacing: "6.0 in", status: "OK" },
    { row: 5, seeds: 2890, spacing: "6.5 in", status: "Low Seed" },
    { row: 6, seeds: 3210, spacing: "6.2 in", status: "OK" },
  ];

  return {
    session,
    equipment,
    operator,
    field,
    rowMetrics,
  };
}
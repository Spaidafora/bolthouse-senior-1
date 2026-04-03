export function useSessionListViewModel() {
  const filters = {
    date: "",
    field: "",
    tractor: "",
  };

  const sessions = [
    {
      session_id: "SESS-001",
      field_name: "Field A",
      crop_type: "Corn",
      tractor_name: "John Deere 5075E",
      operator_name: "John Doe",
      started_at: "Apr 20, 2025 6:00 AM",
      duration: "01:12",
      seeds: "18,750",
      status: "Completed",
    },
    {
      session_id: "SESS-002",
      field_name: "Field B",
      crop_type: "Soybean",
      tractor_name: "Kubota M5",
      operator_name: "Jane Smith",
      started_at: "Apr 18, 2025 8:10 AM",
      duration: "00:45",
      seeds: "12,300",
      status: "Completed",
    },
    {
      session_id: "SESS-003",
      field_name: "Field C",
      crop_type: "Wheat",
      tractor_name: "John Deere 5075E",
      operator_name: "John Doe",
      started_at: "Apr 15, 2025 9:30 AM",
      duration: "01:05",
      seeds: "16,500",
      status: "Review",
    },
    {
      session_id: "SESS-004",
      field_name: "Field D",
      crop_type: "Corn",
      tractor_name: "Case IH Magnum",
      operator_name: "Mike Brown",
      started_at: "Apr 12, 2025 7:40 AM",
      duration: "00:32",
      seeds: "14,200",
      status: "Completed",
    },
    {
      session_id: "SESS-005",
      field_name: "Field E",
      crop_type: "Cotton",
      tractor_name: "New Holland T6",
      operator_name: "Emily Clark",
      started_at: "Apr 10, 2025 10:00 AM",
      duration: "01:20",
      seeds: "20,100",
      status: "Completed",
    },
  ];

  return {
    filters,
    sessions,
  };
}
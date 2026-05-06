function toTractor(row) {
  return {
    tractorId: row.tractor_id,
    name: row.name,
    model: row.model,
    serialNumber: row.serial_number,
    implementName: row.implement_name,
    createdAt: row.created_at,
  };
}

export { toTractor };

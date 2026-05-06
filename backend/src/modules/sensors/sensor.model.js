function toSensor(row) {
  return {
    sensorId: row.sensor_id,
    tractorId: row.tractor_id,
    edgeDeviceId: row.edge_device_id,
    rowNumber: row.row_number,
    sensorType: row.sensor_type,
    serialNumber: row.serial_number,
    installedAt: row.installed_at,
    retiredAt: row.retired_at,
    status: row.status,
  };
}

export { toSensor };

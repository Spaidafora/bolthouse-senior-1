function toEdgeDevice(row) {
  return {
    edgeDeviceId: row.edge_device_id,
    tractorId: row.tractor_id,
    deviceType: row.device_type,
    hostname: row.hostname,
    firmwareVersion: row.firmware_version,
    createdAt: row.created_at,
  };
}

export { toEdgeDevice };

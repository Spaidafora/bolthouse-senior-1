BEGIN;

-- =========================
-- Base reference data
-- =========================
INSERT INTO tractors (tractor_id, name, model, serial_number, created_at) VALUES
('11111111-1111-1111-1111-111111111111', 'Planter Tractor A', 'John Deere 8R 310', 'JD8R310-2024-001', '2026-03-01T08:00:00Z'),
('22222222-2222-2222-2222-222222222222', 'Planter Tractor B', 'Case IH Magnum 280', 'CIH280-2024-014', '2026-03-02T08:00:00Z'),
('33333333-3333-3333-3333-333333333333', 'Support Tractor C', 'John Deere 7R 250', 'JD7R250-2023-008', '2026-03-03T08:00:00Z');

INSERT INTO operators (operator_id, name, employee_code, created_at) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1', 'Miguel Herrera', 'EMP-1042', '2026-03-01T08:00:00Z'),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2', 'Sofia Ramirez', 'EMP-1057', '2026-03-01T08:05:00Z'),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa3', 'Daniel Kim', 'EMP-1098', '2026-03-01T08:10:00Z');

INSERT INTO fields (field_id, name, boundary, created_at) VALUES
(
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1',
  'North 40',
  '{"type":"Polygon","coordinates":[[[-119.10480,35.31220],[-119.10320,35.31220],[-119.10320,35.31360],[-119.10480,35.31360],[-119.10480,35.31220]]]}',
  '2026-03-01T08:00:00Z'
),
(
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb2',
  'East 12',
  '{"type":"Polygon","coordinates":[[[-119.09990,35.30880],[-119.09860,35.30880],[-119.09860,35.30990],[-119.09990,35.30990],[-119.09990,35.30880]]]}',
  '2026-03-01T08:00:00Z'
),
(
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb3',
  'South Trial Block',
  '{"type":"Polygon","coordinates":[[[-119.10780,35.30510],[-119.10670,35.30510],[-119.10670,35.30590],[-119.10780,35.30590],[-119.10780,35.30510]]]}',
  '2026-03-01T08:00:00Z'
);

INSERT INTO edge_devices (edge_device_id, tractor_id, device_type, hostname, firmware_version, created_at) VALUES
('cccccccc-cccc-cccc-cccc-ccccccccccc1', '11111111-1111-1111-1111-111111111111', 'raspberry_pi_5', 'edge-a-main', '1.3.2', '2026-03-01T09:00:00Z'),
('cccccccc-cccc-cccc-cccc-ccccccccccc2', '11111111-1111-1111-1111-111111111111', 'backup_logger', 'edge-a-backup', '1.1.0', '2026-03-05T09:00:00Z'),
('cccccccc-cccc-cccc-cccc-ccccccccccc3', '22222222-2222-2222-2222-222222222222', 'raspberry_pi_5', 'edge-b-main', '1.3.2', '2026-03-01T09:00:00Z'),
('cccccccc-cccc-cccc-cccc-ccccccccccc4', '33333333-3333-3333-3333-333333333333', 'raspberry_pi_4', 'edge-c-main', '1.0.9', '2026-03-01T09:00:00Z');

INSERT INTO sensors (sensor_id, tractor_id, edge_device_id, row_number, sensor_type, serial_number, installed_at, retired_at, status, created_at) VALUES
('dddddddd-dddd-dddd-dddd-dddddddddd01', '11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-ccccccccccc1', 1, 'wavevision', 'WV-A-ROW-01', '2026-03-10T07:00:00Z', NULL, 'active', '2026-03-10T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd02', '11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-ccccccccccc1', 2, 'wavevision', 'WV-A-ROW-02', '2026-03-10T07:00:00Z', NULL, 'active', '2026-03-10T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd03', '11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-ccccccccccc1', 3, 'wavevision', 'WV-A-ROW-03', '2026-03-10T07:00:00Z', NULL, 'active', '2026-03-10T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd04', '11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-ccccccccccc1', 4, 'wavevision', 'WV-A-ROW-04', '2026-03-10T07:00:00Z', NULL, 'active', '2026-03-10T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd05', '11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-ccccccccccc1', 5, 'wavevision', 'WV-A-ROW-05', '2026-03-10T07:00:00Z', NULL, 'active', '2026-03-10T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd06', '11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-ccccccccccc1', 6, 'wavevision', 'WV-A-ROW-06', '2026-03-10T07:00:00Z', NULL, 'active', '2026-03-10T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd07', '11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-ccccccccccc1', 7, 'wavevision', 'WV-A-ROW-07', '2026-03-10T07:00:00Z', NULL, 'active', '2026-03-10T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd08', '11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-ccccccccccc1', 8, 'wavevision', 'WV-A-ROW-08', '2026-03-10T07:00:00Z', NULL, 'active', '2026-03-10T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd09', '22222222-2222-2222-2222-222222222222', 'cccccccc-cccc-cccc-cccc-ccccccccccc3', 1, 'wavevision', 'WV-B-ROW-01', '2026-03-12T07:00:00Z', NULL, 'active', '2026-03-12T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd10', '22222222-2222-2222-2222-222222222222', 'cccccccc-cccc-cccc-cccc-ccccccccccc3', 2, 'wavevision', 'WV-B-ROW-02', '2026-03-12T07:00:00Z', NULL, 'active', '2026-03-12T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd11', '22222222-2222-2222-2222-222222222222', 'cccccccc-cccc-cccc-cccc-ccccccccccc3', 3, 'wavevision', 'WV-B-ROW-03', '2026-03-12T07:00:00Z', NULL, 'active', '2026-03-12T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd12', '22222222-2222-2222-2222-222222222222', 'cccccccc-cccc-cccc-cccc-ccccccccccc3', 4, 'wavevision', 'WV-B-ROW-04', '2026-03-12T07:00:00Z', NULL, 'active', '2026-03-12T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd13', '22222222-2222-2222-2222-222222222222', 'cccccccc-cccc-cccc-cccc-ccccccccccc3', 5, 'wavevision', 'WV-B-ROW-05', '2026-03-12T07:00:00Z', NULL, 'active', '2026-03-12T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd14', '22222222-2222-2222-2222-222222222222', 'cccccccc-cccc-cccc-cccc-ccccccccccc3', 6, 'wavevision', 'WV-B-ROW-06', '2026-03-12T07:00:00Z', NULL, 'active', '2026-03-12T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd15', '22222222-2222-2222-2222-222222222222', 'cccccccc-cccc-cccc-cccc-ccccccccccc3', 7, 'wavevision', 'WV-B-ROW-07', '2026-03-12T07:00:00Z', NULL, 'active', '2026-03-12T07:00:00Z'),
('dddddddd-dddd-dddd-dddd-dddddddddd16', '22222222-2222-2222-2222-222222222222', 'cccccccc-cccc-cccc-cccc-ccccccccccc3', 8, 'wavevision', 'WV-B-ROW-08', '2026-03-12T07:00:00Z', NULL, 'maintenance', '2026-03-12T07:00:00Z');

INSERT INTO sessions (session_id, tractor_id, operator_id, field_id, started_at, ended_at, crop_type, seed_variety, notes, status, created_at) VALUES
('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1', '11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', '2026-04-01T18:22:10Z', '2026-04-01T18:37:10Z', 'carrot', 'Mokum', 'Clean pass in North 40 with stable spacing.', 'completed', '2026-04-01T18:22:10Z'),
('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee2', '22222222-2222-2222-2222-222222222222', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb2', '2026-04-02T15:05:00Z', NULL, 'carrot', 'Napoli', 'Active session for live dashboard testing.', 'active', '2026-04-02T15:05:00Z'),
('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee3', '11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa3', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb3', '2026-03-29T16:10:00Z', '2026-03-29T16:28:00Z', 'carrot', 'Bolero', 'Row 4 had repeated zero-count intervals for dropout testing.', 'completed', '2026-03-29T16:10:00Z');

-- =========================
-- GPS telemetry for completed session 1
-- =========================
INSERT INTO gps_telemetry_observations (gps_observation_id, session_id, tractor_id, edge_device_id, edge_record_id, recorded_at, latitude, longitude, altitude_m, ground_speed_mps, heading_deg, gps_accuracy_m, fix_quality, satellite_count, ingested_at) VALUES
('f1000000-0000-0000-0000-000000000001','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000001','2026-04-01T18:22:10.150Z',35.312401,-119.104822,102.1,1.14,274.2,0.9,'3d_fix',14,'2026-04-01T18:22:10.300Z'),
('f1000000-0000-0000-0000-000000000002','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000002','2026-04-01T18:22:11.150Z',35.312405,-119.104780,102.0,1.16,274.0,0.8,'3d_fix',14,'2026-04-01T18:22:11.300Z'),
('f1000000-0000-0000-0000-000000000003','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000003','2026-04-01T18:22:12.150Z',35.312409,-119.104738,101.9,1.13,274.4,0.8,'3d_fix',15,'2026-04-01T18:22:12.300Z'),
('f1000000-0000-0000-0000-000000000004','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000004','2026-04-01T18:22:13.150Z',35.312413,-119.104696,101.8,1.17,274.1,0.9,'3d_fix',14,'2026-04-01T18:22:13.300Z'),
('f1000000-0000-0000-0000-000000000005','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000005','2026-04-01T18:22:14.150Z',35.312417,-119.104654,101.7,1.15,274.3,0.8,'3d_fix',13,'2026-04-01T18:22:14.300Z'),
('f1000000-0000-0000-0000-000000000006','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000006','2026-04-01T18:22:15.150Z',35.312421,-119.104612,101.7,1.18,274.2,0.8,'3d_fix',14,'2026-04-01T18:22:15.300Z'),
('f1000000-0000-0000-0000-000000000007','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000007','2026-04-01T18:22:16.150Z',35.312425,-119.104570,101.6,1.12,274.0,0.9,'3d_fix',14,'2026-04-01T18:22:16.300Z'),
('f1000000-0000-0000-0000-000000000008','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000008','2026-04-01T18:22:17.150Z',35.312429,-119.104528,101.5,1.11,273.8,0.9,'3d_fix',13,'2026-04-01T18:22:17.300Z'),
('f1000000-0000-0000-0000-000000000009','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000009','2026-04-01T18:22:18.150Z',35.312433,-119.104486,101.5,1.15,274.1,0.8,'3d_fix',15,'2026-04-01T18:22:18.300Z'),
('f1000000-0000-0000-0000-000000000010','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000010','2026-04-01T18:22:19.150Z',35.312437,-119.104444,101.4,1.16,274.0,0.8,'3d_fix',14,'2026-04-01T18:22:19.300Z'),
('f1000000-0000-0000-0000-000000000011','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000011','2026-04-01T18:22:20.150Z',35.312441,-119.104402,101.4,1.14,274.1,0.9,'3d_fix',14,'2026-04-01T18:22:20.300Z'),
('f1000000-0000-0000-0000-000000000012','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-a-000012','2026-04-01T18:22:21.150Z',35.312445,-119.104360,101.3,1.13,274.3,0.8,'3d_fix',14,'2026-04-01T18:22:21.300Z');

-- =========================
-- GPS telemetry for active session 2
-- =========================
INSERT INTO gps_telemetry_observations (gps_observation_id, session_id, tractor_id, edge_device_id, edge_record_id, recorded_at, latitude, longitude, altitude_m, ground_speed_mps, heading_deg, gps_accuracy_m, fix_quality, satellite_count, ingested_at) VALUES
('f2000000-0000-0000-0000-000000000001','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee2','22222222-2222-2222-2222-222222222222','cccccccc-cccc-cccc-cccc-ccccccccccc3','gps-b-000001','2026-04-02T15:05:00.150Z',35.309101,-119.099820,99.8,1.02,89.7,0.7,'3d_fix',15,'2026-04-02T15:05:00.300Z'),
('f2000000-0000-0000-0000-000000000002','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee2','22222222-2222-2222-2222-222222222222','cccccccc-cccc-cccc-cccc-ccccccccccc3','gps-b-000002','2026-04-02T15:05:01.150Z',35.309104,-119.099781,99.7,1.05,89.9,0.8,'3d_fix',16,'2026-04-02T15:05:01.300Z'),
('f2000000-0000-0000-0000-000000000003','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee2','22222222-2222-2222-2222-222222222222','cccccccc-cccc-cccc-cccc-ccccccccccc3','gps-b-000003','2026-04-02T15:05:02.150Z',35.309107,-119.099742,99.7,1.01,90.2,0.7,'3d_fix',15,'2026-04-02T15:05:02.300Z'),
('f2000000-0000-0000-0000-000000000004','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee2','22222222-2222-2222-2222-222222222222','cccccccc-cccc-cccc-cccc-ccccccccccc3','gps-b-000004','2026-04-02T15:05:03.150Z',35.309110,-119.099703,99.6,0.98,89.6,0.7,'3d_fix',14,'2026-04-02T15:05:03.300Z'),
('f2000000-0000-0000-0000-000000000005','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee2','22222222-2222-2222-2222-222222222222','cccccccc-cccc-cccc-cccc-ccccccccccc3','gps-b-000005','2026-04-02T15:05:04.150Z',35.309113,-119.099664,99.6,1.03,89.8,0.8,'3d_fix',15,'2026-04-02T15:05:04.300Z'),
('f2000000-0000-0000-0000-000000000006','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee2','22222222-2222-2222-2222-222222222222','cccccccc-cccc-cccc-cccc-ccccccccccc3','gps-b-000006','2026-04-02T15:05:05.150Z',35.309116,-119.099625,99.5,1.00,90.1,0.8,'3d_fix',15,'2026-04-02T15:05:05.300Z');

-- =========================
-- GPS telemetry for anomaly session 3
-- =========================
INSERT INTO gps_telemetry_observations (gps_observation_id, session_id, tractor_id, edge_device_id, edge_record_id, recorded_at, latitude, longitude, altitude_m, ground_speed_mps, heading_deg, gps_accuracy_m, fix_quality, satellite_count, ingested_at) VALUES
('f3000000-0000-0000-0000-000000000001','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee3','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-c-000001','2026-03-29T16:10:00.150Z',35.305401,-119.107720,103.1,0.96,182.2,1.1,'3d_fix',12,'2026-03-29T16:10:00.300Z'),
('f3000000-0000-0000-0000-000000000002','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee3','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-c-000002','2026-03-29T16:10:01.150Z',35.305366,-119.107718,103.0,0.94,181.9,1.0,'3d_fix',12,'2026-03-29T16:10:01.300Z'),
('f3000000-0000-0000-0000-000000000003','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee3','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-c-000003','2026-03-29T16:10:02.150Z',35.305331,-119.107716,103.0,0.98,182.0,1.0,'3d_fix',12,'2026-03-29T16:10:02.300Z'),
('f3000000-0000-0000-0000-000000000004','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee3','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-c-000004','2026-03-29T16:10:03.150Z',35.305296,-119.107714,102.9,0.92,181.6,1.1,'3d_fix',11,'2026-03-29T16:10:03.300Z'),
('f3000000-0000-0000-0000-000000000005','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee3','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-c-000005','2026-03-29T16:10:04.150Z',35.305261,-119.107712,102.9,0.95,181.8,1.0,'3d_fix',12,'2026-03-29T16:10:04.300Z'),
('f3000000-0000-0000-0000-000000000006','eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee3','11111111-1111-1111-1111-111111111111','cccccccc-cccc-cccc-cccc-ccccccccccc1','gps-c-000006','2026-03-29T16:10:05.150Z',35.305226,-119.107710,102.8,0.91,181.7,1.2,'3d_fix',11,'2026-03-29T16:10:05.300Z');

-- =========================
-- Seed intervals: completed session 1
-- 12 intervals x 8 rows = 96 rows
-- =========================
WITH intervals AS (
  SELECT generate_series(0, 11) AS i
), rows AS (
  SELECT * FROM (VALUES
    (1,'dddddddd-dddd-dddd-dddd-dddddddddd01'),
    (2,'dddddddd-dddd-dddd-dddd-dddddddddd02'),
    (3,'dddddddd-dddd-dddd-dddd-dddddddddd03'),
    (4,'dddddddd-dddd-dddd-dddd-dddddddddd04'),
    (5,'dddddddd-dddd-dddd-dddd-dddddddddd05'),
    (6,'dddddddd-dddd-dddd-dddd-dddddddddd06'),
    (7,'dddddddd-dddd-dddd-dddd-dddddddddd07'),
    (8,'dddddddd-dddd-dddd-dddd-dddddddddd08')
  ) AS r(row_number, sensor_id)
)
INSERT INTO seed_interval_observations (
  observation_id, session_id, sensor_id, edge_device_id, edge_record_id, row_number,
  interval_start_at, interval_end_at, interval_ms, seed_count, confidence, sensor_status, ingested_at
)
SELECT
  md5('sess1-' || r.sensor_id || '-' || i.i)::uuid,
  'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1',
  r.sensor_id::uuid,
  'cccccccc-cccc-cccc-cccc-ccccccccccc1',
  'seed-a-' || lpad((r.row_number * 1000 + i.i)::text, 6, '0'),
  r.row_number,
  '2026-04-01T18:22:10Z'::timestamptz + (i.i * interval '100 milliseconds'),
  '2026-04-01T18:22:10Z'::timestamptz + ((i.i + 1) * interval '100 milliseconds'),
  100,
  CASE
    WHEN r.row_number IN (2,6) AND i.i IN (3,7) THEN 4
    WHEN r.row_number = 8 AND i.i IN (2,8) THEN 1
    ELSE 3
  END,
  CASE
    WHEN r.row_number = 8 THEN 0.94
    WHEN r.row_number IN (2,6) THEN 0.98
    ELSE 0.97
  END,
  'ok',
  '2026-04-01T18:22:10Z'::timestamptz + (i.i * interval '100 milliseconds') + interval '20 milliseconds'
FROM intervals i
CROSS JOIN rows r;

-- =========================
-- Seed intervals: active session 2
-- 6 intervals x 8 rows = 48 rows
-- Includes row 8 in maintenance behavior and a few weak-confidence points
-- =========================
WITH intervals AS (
  SELECT generate_series(0, 5) AS i
), rows AS (
  SELECT * FROM (VALUES
    (1,'dddddddd-dddd-dddd-dddd-dddddddddd09'),
    (2,'dddddddd-dddd-dddd-dddd-dddddddddd10'),
    (3,'dddddddd-dddd-dddd-dddd-dddddddddd11'),
    (4,'dddddddd-dddd-dddd-dddd-dddddddddd12'),
    (5,'dddddddd-dddd-dddd-dddd-dddddddddd13'),
    (6,'dddddddd-dddd-dddd-dddd-dddddddddd14'),
    (7,'dddddddd-dddd-dddd-dddd-dddddddddd15'),
    (8,'dddddddd-dddd-dddd-dddd-dddddddddd16')
  ) AS r(row_number, sensor_id)
)
INSERT INTO seed_interval_observations (
  observation_id, session_id, sensor_id, edge_device_id, edge_record_id, row_number,
  interval_start_at, interval_end_at, interval_ms, seed_count, confidence, sensor_status, ingested_at
)
SELECT
  md5('sess2-' || r.sensor_id || '-' || i.i)::uuid,
  'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee2',
  r.sensor_id::uuid,
  'cccccccc-cccc-cccc-cccc-ccccccccccc3',
  'seed-b-' || lpad((r.row_number * 1000 + i.i)::text, 6, '0'),
  r.row_number,
  '2026-04-02T15:05:00Z'::timestamptz + (i.i * interval '100 milliseconds'),
  '2026-04-02T15:05:00Z'::timestamptz + ((i.i + 1) * interval '100 milliseconds'),
  100,
  CASE
    WHEN r.row_number = 8 THEN 0
    WHEN r.row_number = 5 AND i.i IN (1,4) THEN 1
    ELSE 2
  END,
  CASE
    WHEN r.row_number = 8 THEN 0.62
    WHEN r.row_number = 5 AND i.i IN (1,4) THEN 0.83
    ELSE 0.96
  END,
  CASE
    WHEN r.row_number = 8 THEN 'maintenance'
    ELSE 'ok'
  END,
  '2026-04-02T15:05:00Z'::timestamptz + (i.i * interval '100 milliseconds') + interval '20 milliseconds'
FROM intervals i
CROSS JOIN rows r;

-- =========================
-- Seed intervals: anomaly session 3
-- 8 intervals x 8 rows = 64 rows
-- Row 4 dropout, row 7 intermittent low count
-- =========================
WITH intervals AS (
  SELECT generate_series(0, 7) AS i
), rows AS (
  SELECT * FROM (VALUES
    (1,'dddddddd-dddd-dddd-dddd-dddddddddd01'),
    (2,'dddddddd-dddd-dddd-dddd-dddddddddd02'),
    (3,'dddddddd-dddd-dddd-dddd-dddddddddd03'),
    (4,'dddddddd-dddd-dddd-dddd-dddddddddd04'),
    (5,'dddddddd-dddd-dddd-dddd-dddddddddd05'),
    (6,'dddddddd-dddd-dddd-dddd-dddddddddd06'),
    (7,'dddddddd-dddd-dddd-dddd-dddddddddd07'),
    (8,'dddddddd-dddd-dddd-dddd-dddddddddd08')
  ) AS r(row_number, sensor_id)
)
INSERT INTO seed_interval_observations (
  observation_id, session_id, sensor_id, edge_device_id, edge_record_id, row_number,
  interval_start_at, interval_end_at, interval_ms, seed_count, confidence, sensor_status, ingested_at
)
SELECT
  md5('sess3-' || r.sensor_id || '-' || i.i)::uuid,
  'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee3',
  r.sensor_id::uuid,
  'cccccccc-cccc-cccc-cccc-ccccccccccc1',
  'seed-c-' || lpad((r.row_number * 1000 + i.i)::text, 6, '0'),
  r.row_number,
  '2026-03-29T16:10:00Z'::timestamptz + (i.i * interval '100 milliseconds'),
  '2026-03-29T16:10:00Z'::timestamptz + ((i.i + 1) * interval '100 milliseconds'),
  100,
  CASE
    WHEN r.row_number = 4 THEN 0
    WHEN r.row_number = 7 AND i.i IN (2,5) THEN 1
    ELSE 3
  END,
  CASE
    WHEN r.row_number = 4 THEN 0.40
    WHEN r.row_number = 7 AND i.i IN (2,5) THEN 0.79
    ELSE 0.95
  END,
  CASE
    WHEN r.row_number = 4 THEN 'dropout_suspected'
    WHEN r.row_number = 7 AND i.i IN (2,5) THEN 'warning'
    ELSE 'ok'
  END,
  '2026-03-29T16:10:00Z'::timestamptz + (i.i * interval '100 milliseconds') + interval '25 milliseconds'
FROM intervals i
CROSS JOIN rows r;

COMMIT;

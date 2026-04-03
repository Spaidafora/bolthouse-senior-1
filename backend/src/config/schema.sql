

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE tractors (
    tractor_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    name TEXT NOT NULL, 
    model TEXT, 
    serial_number TEXT UNIQUE, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE operators (
    operator_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    name TEXT NOT NULL, 
    employee_code TEXT UNIQUE, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);

CREATE TABLE fields (
    field_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    name TEXT NOT NULL, 
    boundary JSONB, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);

CREATE TABLE sessions (
    session_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    tractor_id UUID NOT NULL REFERENCES tractors(tractor_id), 
    operator_id UUID REFERENCES operators(operator_id),
    field_id UUID REFERENCES fields(field_id), 
    started_at TIMESTAMPTZ NOT NULL, 
    ended_at TIMESTAMPTZ,
    crop_type TEXT,
    seed_variety TEXT, 
    notes TEXT, 
    status TEXT, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    CHECK (ended_at IS NULL OR ended_at >= started_at) 
);

CREATE TABLE edge_devices (
    edge_device_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    tractor_id UUID NOT NULL REFERENCES tractors(tractor_id), 
    device_type TEXT, 
    hostname TEXT UNIQUE, 
    firmware_version TEXT, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);

CREATE TABLE sensors (
    sensor_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tractor_id UUID NOT NULL REFERENCES tractors(tractor_id), 
    edge_device_id UUID REFERENCES edge_devices(edge_device_id), 
    row_number INT NOT NULL, 
    sensor_type TEXT, 
    serial_number TEXT UNIQUE,
    installed_at TIMESTAMPTZ, 
    retired_at TIMESTAMPTZ, 
    status TEXT, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CHECK (row_number > 0),
    CHECK (retired_at IS NULL OR installed_at IS NULL OR retired_at >= installed_at) 
);



CREATE TABLE seed_interval_observations (
    observation_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    session_id UUID NOT NULL REFERENCES sessions(session_id), 
    sensor_id UUID NOT NULL REFERENCES sensors(sensor_id), 
    edge_device_id UUID NOT NULL REFERENCES edge_devices(edge_device_id), 
    edge_record_id TEXT NOT NULL, 
    row_number INT NOT NULL, 
    interval_start_at TIMESTAMPTZ NOT NULL,
    interval_end_at TIMESTAMPTZ NOT NULL, 
    interval_ms INT NOT NULL, 
    seed_count INT NOT NULL,
    confidence DOUBLE PRECISION, 
    sensor_status TEXT, 
    ingested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 

    UNIQUE (edge_device_id, edge_record_id),
    CHECK (row_number > 0), 
    CHECK (seed_count >= 0),
    CHECK (interval_ms > 0), 
    CHECK (interval_end_at >= interval_start_at),
    CHECK (confidence IS NULL OR (confidence >= 0 AND confidence <= 1))
);

CREATE TABLE gps_telemetry_observations (
    gps_observation_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES sessions(session_id),
    tractor_id UUID NOT NULL REFERENCES tractors(tractor_id),
    edge_device_id UUID NOT NULL REFERENCES edge_devices(edge_device_id),
    edge_record_id TEXT NOT NULL, 
    recorded_at TIMESTAMPTZ NOT NULL, 
    latitude DOUBLE PRECISION NOT NULL, 
    longitude DOUBLE PRECISION NOT NULL,
    altitude_m DOUBLE PRECISION, 
    ground_speed_mps DOUBLE PRECISION,
    heading_deg DOUBLE PRECISION, 
    gps_accuracy_m DOUBLE PRECISION, 
    fix_quality TEXT, 
    satellite_count INT, 
    ingested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 

    UNIQUE (edge_device_id, edge_record_id), 
    CHECK (latitude >= -90 AND latitude <= 90),
    CHECK (longitude >= -180 AND longitude <= 180), 
    CHECK (heading_deg IS NULL OR (heading_deg >= 0 AND heading_deg < 360)), 
    CHECK (ground_speed_mps IS NULL OR ground_speed_mps >= 0), 
    CHECK (gps_accuracy_m IS NULL OR gps_accuracy_m >= 0), 
    CHECK (satellite_count IS NULL OR satellite_count >= 0) 
);



CREATE INDEX idx_sessions_started_at ON sessions(started_at);
CREATE INDEX idx_sessions_field_id ON sessions(field_id);
CREATE INDEX idx_sessions_tractor_id ON sessions(tractor_id);
CREATE INDEX idx_sessions_operator_id ON sessions(operator_id);

CREATE INDEX idx_seed_obs_session_time ON seed_interval_observations(session_id, interval_start_at);
CREATE INDEX idx_seed_obs_session_row ON seed_interval_observations(session_id, row_number);
CREATE INDEX idx_seed_obs_sensor_id ON seed_interval_observations(sensor_id);

CREATE INDEX idx_gps_obs_session_time ON gps_telemetry_observations(session_id, recorded_at);
CREATE INDEX idx_gps_obs_tractor_id ON gps_telemetry_observations(tractor_id);



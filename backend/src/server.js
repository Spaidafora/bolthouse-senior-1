import express from 'express';
import cors from 'cors';

import authRouter from './modules/auth/auth.routes.js';
import userRouter from './modules/users/user.routes.js';
import tractorRouter from './modules/tractors/tractor.routes.js';
import fieldRouter from './modules/fields/field.routes.js';
import operatorRouter from './modules/operators/operator.routes.js';
import sensorRouter from './modules/sensors/sensor.routes.js';
import edgeDeviceRouter from './modules/edge-devices/edgeDevice.routes.js';
import sessionRouter from './modules/sessions/session.routes.js';
import seedRouter from './modules/seed-interval-observations/seedIntervalObservation.routes.js';
import gpsRouter from './modules/gps-telemetry-observations/gpsTelemetryObservation.routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/tractors', tractorRouter);
app.use('/api/fields', fieldRouter);
app.use('/api/operators', operatorRouter);
app.use('/api/sensors', sensorRouter);
app.use('/api/edge-devices', edgeDeviceRouter);
app.use('/api/sessions', sessionRouter);
app.use('/api/ingest/seed', seedRouter);
app.use('/api/ingest/gps', gpsRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

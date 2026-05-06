#https://pypi.org/project/paho-mqtt/#getting-started
#https://eclipse.dev/paho/files/paho.mqtt.python/html/client.html


import paho.mqtt.client as mqtt
import time
import logging
import csv
import json

PORT = 1883 # unencrypted 
HOST = "mqtt-broker"
MQTT_TOPIC = "bolthouse/seed-events"
KEEPALIVE = 60
CSV_FILE = "./data/fake-data.csv"

MESSAGE = "test1"


logging.basicConfig(level=logging.DEBUG)


# userdata  = pending ack, tracking message ids.
def on_connect(client, pending_ack, flags, reason_code, properties):
    print(f"successful connection to broker. reason code: {reason_code}", flush=True)

def on_publish(client, pending_ack, mid, reason_code, properties):
    try: 
        pending_ack.remove(mid)
        print(f"broker has acknowledge message. reason code: {reason_code}", flush=True)
    except KeyError: 
        print("something went wrong publishing messages")


pending_ack = set() 
mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
mqttc.enable_logger()
mqttc.on_publish = on_publish
mqttc.on_connect = on_connect

mqttc.user_data_set(pending_ack) # pending message ids

mqttc.connect(HOST, PORT, KEEPALIVE)

mqttc.loop_start()


# publish from csv data
with open(CSV_FILE, mode='r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        payload = {
            "edge_device_id": row["edge_device_id"],
            "edge_record_id": row["edge_record_id"],
            "row_id": int(row["row_id"]),
            "interval_start_at": row["interval_start_at"],
            "interval_end_at": row["interval_end_at"],
            "interval_ms": int(row["interval_ms"]),
            "seed_count": int(row["seed_count"]),
            "sensor_status": row["sensor_status"],
        }
        
        payload_json = json.dumps(payload)
        msg_info = mqttc.publish(topic=MQTT_TOPIC, payload=payload_json, qos=2)
        pending_ack.add(msg_info.mid)


        print(f"published message id {msg_info.mid}", flush=True)
        time.sleep(payload["interval_ms"] / 1000)     # stream csv readings every 2 seconds



# Wait for all message to be published, removing message ids from pending_ack
while pending_ack:
    time.sleep(0.1)

print("All readings have been acknowledged by the broker.", flush=True)

mqttc.loop_stop()
mqttc.disconnect()

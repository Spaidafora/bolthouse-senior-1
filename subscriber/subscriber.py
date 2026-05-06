import paho.mqtt.client as mqtt
import json 


PORT = 1883
HOST = "mqtt-broker"
MQTT_TOPIC = "bolthouse/seed-events"
KEEPALIVE = 60

def on_subscribe(client, userdata, mid, reason_code_list, properties):
    # Since we subscribed only for a single channel, reason_code_list contains
    # a single entry
    if reason_code_list[0].is_failure:
        print(f"Broker rejected subscription: {reason_code_list[0]}", flush=True)
    else:
        print(f"Subscribed successfully: {reason_code_list[0].value}", flush=True)


def on_message(client, userdata, message):
    print("\nMessage recieved from broker.", flush=True)
    print(f"Topic: {message.topic}", flush=True)

    payload_text = message.payload.decode("utf-8")

    try: 
        # publisher sent json, convert json back to python dict
        event = json.loads(payload_text)
    except json.JSONDecodeError:
        print(f"Recieved non-JSON payload: {payload_text}", flush=True)
        return

    print("Decoded seed event:", flush=True)
    print(f"  Edge device ID: {event.get('edge_device_id')}", flush=True)
    print(f"  Edge record ID: {event.get('edge_record_id')}", flush=True)
    print(f"  Row ID: {event.get('row_id')}", flush=True)
    print(f"  Seed count: {event.get('seed_count')}", flush=True)
    print(f"  Sensor status: {event.get('sensor_status')}", flush=True)


def on_connect(client, userdata, flags, reason_code, properties):
    if reason_code.is_failure:
        print(f"Failed to connect to broker. Reason code: {reason_code}", flush=True)
    else:
        # we should always subscribe from on_connect callback to be sure
        # our subscribed is persisted across reconnections.
        client.subscribe(MQTT_TOPIC, qos=2)

mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
mqttc.on_connect = on_connect
mqttc.on_message = on_message
mqttc.on_subscribe = on_subscribe


mqttc.user_data_set([])
mqttc.connect(HOST, PORT, KEEPALIVE)
mqttc.loop_forever() # keep subscriber alive forever so it can keep receiving messages 

print(f"Received the following message: {mqttc.user_data_get()}")
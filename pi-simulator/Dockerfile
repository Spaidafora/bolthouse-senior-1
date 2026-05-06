# Use python, install NQTT packages, copy app files, run publisher.py

FROM python:3.11-slim  

WORKDIR /publisher-app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "publisher.py"]
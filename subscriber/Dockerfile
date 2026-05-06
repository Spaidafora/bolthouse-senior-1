# 

FROM python:3.11-slim  

WORKDIR /subscriber-app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "subscriber.py"]
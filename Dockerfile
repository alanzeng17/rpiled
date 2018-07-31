FROM resin/raspberry-pi-node:latest

ENV INITSYSTEM on

RUN apt-get update \
    && apt-get install make scons python-dev python-pip swig rpi.gpio gcc
    #&& apt-get upgrade 
#    && apt-get clean \
# && rm -rf /var/lib/apt/lists/*

RUN python -m pip install --upgrade pip setuptools wheel RPi.Gpio

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD rpi_ws281x/ ./rpi_ws281x
WORKDIR rpi_ws281x/
RUN scons && cd python/ && python3 ./setup.py build && python3 ./setup.py install

WORKDIR /usr/src/app

ADD bin/ ./bin
ADD public/ ./public
ADD routes/ ./routes
ADD views/ ./views
ADD jade-bootstrap/ ./jade-bootstrap
ADD ledController/ ./ledController
COPY app.js .

# RUN rmmod snd_bcm2835

CMD ["bash"]

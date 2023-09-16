FROM ubuntu:20.04

# Install dependencies
RUN apt-get update -y
RUN apt-get -y install software-properties-common
RUN DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt-get -y install tzdata 
RUN apt-get install -y python3 python3-pip python3-dev

# Basic setup
ENV GROUP_ID=1000 \
    USER_ID=1000 

# Create working directory 
WORKDIR /var/www/backend
ADD . /var/www/backend/

# Set some require packages
RUN pip install --upgrade pip
RUN pip install -r /var/www/requirements.txt

# Set user
RUN groupadd -g $GROUP_ID www
RUN adduser --system --uid $USER_ID --group www --shell /bin/sh 
USER www

EXPOSE 5000

# Run with nginx
CMD ["gunicorn", "-w", "3", "-b", "0.0.0.0:5000", "wsgi:app"]
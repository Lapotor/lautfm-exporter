# Laut.FM Prometheus Exporter

This project is a Prometheus exporter for Laut.FM, a popular online radio platform. It allows you to collect and monitor metrics from Laut.FM stations using Prometheus.

## Usage

The exporter has the following environmental variables:

| ENV              | Default | Description                                                                                                                                                           |
| ---------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FETCH_INTERVAL` | `5m`    | You can define how often the exporter it self fetches the laut.fm API. You can define it in milliseconds or in various time formats like `2 days`, `2h`, `5s` or `5m` |
| `STATIONS`       | `[]`    | Define a comma seperated list of stations to fetch metrics of                                                                                                         |

### Without Docker

1. Go to [latest release](https://github.com/Lapotor/lautfm-exporter/releases/latest)
2. Download builded server `lautfm-exporter_<VERSION>.zip`
3. Install dependencies: `npm ci --omit=dev`
4. Define env variable `STATIONS` to fetch station metrics
5. Start the exporter: `node main.js`
6. The exporter will be available at `http://localhost:9991/metrics`.

### With Docker

#### Docker

```
docker run -d \
  -p 9991:9991 \
  -e STATIONS="eins,zwei" \
  -e FETCH_INTERVAL=5m
  ghcr.io/lapotor/lautfm-exporter:latest
```

Then you can collect the metrics on `http://localhost:9991/metrics`

#### Docker compose

```yaml
version: "3"

services:
  lautfm-exporter:
    image: ghcr.io/lapotor/lautfm-exporter:latest
    container_name: lautfm-exporter
    restart: unless-stopped
    environment:
      STATIONS: eins,zwei
      FETCH_INTERVAL: 5m
    ports:
      - "9991:9991"
```

To start the container use `docker compose up -d`

## Metrics

```
# HELP lautfm_server_running Laut.fm server running
# TYPE lautfm_server_running gauge
lautfm_server_running{message="laut.fm läuft im regulären Betrieb"} 1

# HELP lautfm_station_active Is the Laut.fm station active
# TYPE lautfm_station_active gauge
lautfm_station_active{station="eins"} 1
lautfm_station_active{station="zwei"} 1

# HELP lautfm_station_position Position of the Laut.fm station
# TYPE lautfm_station_position gauge
lautfm_station_position{station="eins"} 208
lautfm_station_position{station="zwei"} 4293

# HELP lautfm_station_listeners Number of listeners of the Laut.fm station
# TYPE lautfm_station_listeners gauge
lautfm_station_listeners{station="eins"} 16
lautfm_station_listeners{station="zwei"} 2

# HELP lautfm_station_live Is the Laut.fm station live
# TYPE lautfm_station_live gauge
lautfm_station_live{station="eins"} 0
lautfm_station_live{station="zwei"} 0

# HELP lautfm_station_current_song The current song of the Laut.fm station, including title, artist, and type. If 1 the song was played live.
# TYPE lautfm_station_current_song gauge
lautfm_station_current_song{station="eins",title="Black Curtains In The Bag",artist="Billy Nomates",type="song"} 0
lautfm_station_current_song{station="zwei",title="745",artist="Vince Staples",type="song"} 0
```

## Contributing

We welcome contributions to improve this project. To start contributing, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your changes"`
4. Push your changes to your forked repository: `git push origin feature/your-feature-name`
5. Open a pull request on the original repository.

## License

This project is licensed under the [MIT License](LICENSE).

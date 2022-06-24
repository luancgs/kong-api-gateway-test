# kong-api-gateway-test

## Description

Simple test using [Kong API Gateway](https://konghq.com/kong) to manage three simple [express](http://expressjs.com) endpoints.

---

## Dependencies

- [Docker](https://www.docker.com/)

---

## How to use

Clone and enter this repo through your terminal, then simply do:

```sh
docker compose up
```

Wait until you see a log displaying the internal port numbers for the endpoints, then you can acess the gateway at http://localhost:8000, using one of these paths: `/end1`, `/end2`, or `/end3`.

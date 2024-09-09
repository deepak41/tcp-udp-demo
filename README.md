# TCP UDP Demo

A demo of TCP and UDP servers using Node.js.

## How to run:

### TCP

To start the server:

```bash
node tcp.js
```

To connect to the server, open 2nd terminal and run:

```bash
telnet localhost 3000
```

### UDP

To start the server:

```bash
node udp.js
```

To send message to the server, open 2nd terminal and run:

```bash
echo "hello" | nc -w1 -u localhost 5000
```


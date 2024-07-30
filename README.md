# Custom Redis-like Server

This project implements a simple custom Redis-like server in Node.js. It supports basic `SET` and `GET` commands to store and retrieve key-value pairs.

## Features

- Accepts `SET` command to store key-value pairs.
- Accepts `GET` command to retrieve values by key.
- Responds with appropriate Redis protocol responses.

## Prerequisites

- Node.js installed on your system.
- Redis CLI for testing the server.

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/custom-redis-server.git
    cd custom-redis-server
    ```

2. **Install dependencies**

    This project doesn't have external dependencies apart from `redis-parser`, so you need to install it:

    ```bash
    npm install redis-parser
    ```

3. **Run the server**

    ```bash
    node server.js
    ```

    The server will start running on port 6378.

## Usage

To interact with your custom Redis-like server, you can use the Redis CLI. Follow these steps to install Redis CLI and use it to communicate with your server.

### Installing Redis CLI

#### On Ubuntu

1. **Update the package list and install Redis CLI**

    ```bash
    sudo apt update
    sudo apt install redis-tools
    ```

#### On macOS

1. **Using Homebrew**

    ```bash
    brew install redis
    ```

### Using Redis CLI with the Custom Server

1. **Connect to the server using Redis CLI**

    ```bash
    redis-cli -p 6378
    ```

2. **Set a key-value pair**

    ```bash
    SET mykey "Hello, World!"
    ```

    Expected response:

    ```
    OK
    ```

3. **Get the value for a key**

    ```bash
    GET mykey
    ```

    Expected response:

    ```
    "Hello, World!"
    ```

### Example Session

```bash
$ redis-cli -p 6378
127.0.0.1:6378> SET name "Yagya"
OK
127.0.0.1:6378> GET name
"Yagya"
127.0.0.1:6378> GET nonexisting
(nil)
```
### Project Structure

server.js: The main server file that creates the custom Redis-like server.


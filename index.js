const net = require("net");
const Parser = require("redis-parser");

const store = {};
const server = net.createServer(connection => {
    console.log("client connected....");

    const parser = new Parser({
        returnReply: (reply) => {
            console.log(reply);
            const command = reply[0].toLowerCase();

            switch (command) {
                case "set": {
                    const key = reply[1];
                    const value = reply[2];
                    store[key] = value;
                    connection.write("+OK\r\n");
                    break;
                }
                case "get": {
                    const key = reply[1];
                    const value = store[key];
                    if (value === undefined) {
                        connection.write("$-1\r\n");
                    } else {
                        connection.write(`$${value.length}\r\n${value}\r\n`);
                    }
                    break;
                }
                default:
                    connection.write("-ERR unknown command\r\n");
                    break;
            }
        },
        returnError: (err) => {
            console.log("=>", err);
            connection.write(`-ERR ${err.message}\r\n`);
        }
    });

    connection.on("data", data => {
        parser.execute(data);
    });

    connection.on("end", () => {
        console.log("client disconnected.");
    });
});

server.listen(6378, () => {
    console.log("custom redis server running on port 6378");
});

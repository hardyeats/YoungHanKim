import Fastify from "fastify";
import view from "@fastify/view";
import ejs from "ejs";

const server = Fastify({ logger: true });

server.register(view, {
  engine: { ejs },
});

server.get("/", (req, res) => {
  res.view("/templates/index.html");
});

server.listen({ port: 8080 });

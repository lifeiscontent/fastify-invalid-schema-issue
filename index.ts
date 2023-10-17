import Fastify from "fastify";

const app = Fastify();

app.post(
  "/",
  {
    schema: {
      body: {
        type: "object",
        properties: {
          name: { minLength: 2, maxLength: 128, type: "string" },
          slug: {
            minLength: 2,
            maxLength: 99,
            pattern: "^[a-zA-Z0-9]+[\\-\\._a-zA-Z0-9]*$",
            type: "string",
          },
          description: { maxLength: 150000, type: "string", nullable: true },
          link: {
            format: "uri",
            maxLength: 512,
            type: "string",
            nullable: true,
          },
        },
        minProperties: 1,
        additionalProperties: false,
      },
    },
  },
  async (request, reply) => {
    console.log(request.body);

    reply.send({ hello: "world" });
  }
);

export default app;

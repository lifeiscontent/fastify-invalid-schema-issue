# Fastify Invalid Schema Issue

This repo is a minimal reproduction of an issue I'm having with Fastify and AJV.

## Steps to reproduce

1. Clone this repo
2. Run `npm install`
3. Run `npm test`

## Expected result

The test should pass.

## Actual result

The test fails with the following error:

```
 FAIL  index.test.ts > index > should return 400 error
AssertionError: expected 200 to deeply equal 400

- Expected
+ Received

- 400
+ 200

 ❯ index.test.ts:30:33
     28|     });
     29|
     30|     expect(response.statusCode).toEqual(400);
       |                                 ^
     31|     expect(response.json()).toEqual({
     32|       code: "FST_ERR_VALIDATION",
```

## Notes

I've talked with the creator of TypeBox and during our testing we found that the schema is valid in Ajv so the source of the bug must be related to fastify and how its handling the schema.

that disscussion can be found here: https://github.com/sinclairzx81/typebox/issues/637

## Environment

**Node.js version(s):** 18.17.1

**Fastify version(s):** 4.24.2

**Fastify schema support:** AJV

**Operating System:** Mac OS 14.0

**Browser version(s):** N/A

**TypeScript version(s):** 5.2.2

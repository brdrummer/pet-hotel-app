CREATE TABLE "pets" (
    "id" SERIAL PRIMARY KEY
    "pet" VARCHAR(120),
    "breed" VARCHAR(120),
    "color" VARCHAR(120),
    "checked_in" BOOLEAN,
    "owner_id" INT REFERENCES "owners"
);

CREATE TABLE "owners" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(120),
	"number_of_pets" INTEGER
);

SELECT "owners".*, COUNT("pets") as "number_of_pets" 
FROM "owners"
LEFT JOIN "pets"
ON "owners"."id" = "pets"."owner_id"
GROUP BY "owners"."id";

INSERT INTO "owners" ("name")
VALUES ('Joe');

INSERT INTO "owners" ("name")
VALUES ('Bob');

INSERT INTO "owners" ("name")
VALUES ('George');

INSERT INTO "owners" ("name")
VALUES ('Carl');

INSERT INTO "pets" ("pet", "breed", "color", "owner_id")
VALUES ('Cat', 'Shorthair', 'Grey', 4);

INSERT INTO "pets" ("pet", "breed", "color", "owner_id")
VALUES ('Bird', 'Parrot', 'Green', 1);

INSERT INTO "pets" ("pet", "breed", "color", "owner_id")
VALUES ('Horse', 'Thoroughbred', 'Brown', 3);

INSERT INTO "pets" ("pet", "breed", "color", "owner_id")
VALUES ('Dog', 'Greyhound', 'Black', 2);
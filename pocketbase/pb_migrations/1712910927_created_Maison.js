/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dc4i7b7ouwdl0zb",
    "created": "2024-04-12 08:35:27.440Z",
    "updated": "2024-04-12 08:35:27.440Z",
    "name": "Maison",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wuwsvkga",
        "name": "Nom",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qht2lqa6",
        "name": "Prix",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "z1yyhivc",
        "name": "Image_s",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/png",
            "image/jpeg"
          ],
          "thumbs": [],
          "maxSelect": 5,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "i8udyv0f",
        "name": "Nombre_de_chambres",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "tk2j1mms",
        "name": "Nombre_de_salles_de_bain",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "pnhvgxqz",
        "name": "Adresse",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ome5zhxb",
        "name": "Superficie",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "kbhqbvcn",
        "name": "Favori",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dc4i7b7ouwdl0zb");

  return dao.deleteCollection(collection);
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("co7jmcspqyjq601")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aly08ar3",
    "name": "Maison",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dc4i7b7ouwdl0zb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("co7jmcspqyjq601")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aly08ar3",
    "name": "Maisons",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dc4i7b7ouwdl0zb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dc4i7b7ouwdl0zb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rr5nvt4f",
    "name": "Agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "co7jmcspqyjq601",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dc4i7b7ouwdl0zb")

  // remove
  collection.schema.removeField("rr5nvt4f")

  return dao.saveCollection(collection)
})

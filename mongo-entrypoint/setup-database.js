db = db.getSiblingDB("Test");
db.createCollection("Cambridge_IELTS_15");

db = db.getSiblingDB("listening");
db.createCollection("Part_1");
db.createCollection("Part_2");
db.createCollection("Part_3");
db.createCollection("Part_4");
db.createCollection("Part_1_Key");
db.createCollection("Part_2_Key");
db.createCollection("Part_3_Key");
db.createCollection("Part_4_Key");

db = db.getSiblingDB("reading");
db.createCollection("Passage_1");
db.createCollection("Passage_2");
db.createCollection("Passage_3");
db.createCollection("Passage_1_Key");
db.createCollection("Passage_2_Key");
db.createCollection("Passage_3_Key");

db = db.getSiblingDB("speaking");
db.createCollection("Part_1");
db.createCollection("Part_2");
db.createCollection("Part_3");
db.createCollection("Part_1_Key");
db.createCollection("Part_2_Key");
db.createCollection("Part_3_Key");

db = db.getSiblingDB("writing");
db.createCollection("Task_1");
db.createCollection("Task_2");
db.createCollection("Task_1_Key");
db.createCollection("Task_2_Key");

db = db.getSiblingDB("Customers");

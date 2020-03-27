print('Start #################################################################');

//Setup admin password for ADMIN DB
db = db.getSiblingDB('admin');

db.createUser(
    {
      user: "USERNAME",
      pwd: "PASSWORD",
      roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
    }
  )
  

//SWITHC TO REQUIRED DB

db = db.getSiblingDB('mydatabasename');

//Create collection in MYDATABASENAME
db.createCollection(
    "MYCOLLECTIONNAME",
    {
        collation: { locale: "en" }
    }
);
//ADD DATA TO MYCOLLECTION NAME
db.ProtectionConfiguration_v001.insert(
    [
        {
                { "Somedata": "1", "2": "3!", "test": "text" },
                { "Somedata2": "1", "2": "3!", "test": "text" }

        }
    ]
);

//Create username for MYDATABASENAME
db.createUser(
    {
        user: "username",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "MYDATABASENAME"
            }
        ]
    }
);

//Create readonly username for MYDATABASENAME
db.createUser(
    {
        user: "username2",
        pwd: "password2",
        roles: [{ role: "read", db: "MYDATABASENAME" }],

    }
)

//Create collection in MYDATABASENAME2
db = db.getSiblingDB('MYDATABASENAME2');

db.createCollection('MYCOLLECTIONNAME2',
    {
        collation: { locale: "en" }
    }
);

//Create username for MYDATABASENAME
db.createUser(
    {
        user: "user",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "MYDATABASENAME2"
            }
        ]
    }
);


print('END #################################################################');
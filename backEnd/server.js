const express = require ("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 3000;
const {Pool} = require("pg");

// const db = new Pool
// ({
//     user: "student",
//     host: "localhost",
//     database: "postgres",
//     password: "",
//     port: 5432
//  });

 const db = new Pool
({
    user: process.env.DB_USER,
    host:process.env.DB_HOST ,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    url: process.env.DB_URL
 });


db.connect(function (err) {
   if(err) throw err;
   console.log("Successfully connected to database")
});

app.get("/", function (req,res) {
    res.status(200).json("wellcome")
});


app.get("/recommendations", async function(req,res){
     try {
        const recommendationsQuery = 
        `
        SELECT r.name AS recommendation_name, m.type AS medium_type,mood.type as mood , rm.mood_id, u.name AS user_name 
        FROM recommendations AS r
        LEFT JOIN medium AS m ON r.medium_id = m.id
        LEFT JOIN users AS u ON r.user_id = u.id
        LEFT JOIN recommendationMood AS rm ON r.id = rm.recommendation_id
        LEFT JOIN mood on rm.mood_id=mood.id;
        `
        const result = await db.query(recommendationsQuery);
            res.status(200).json(result.rows)
        } catch (error) {
        return res.status(500).json({error:"Internal server error"});
    }
})


app.get("/recommendations/medium", async function(req,res){
    try {
        const selectedMedium = req.query.medium
       const recommendationsQuery = 
       `
       SELECT r.name AS recommendation_name, m.type AS medium_type,mood.type as mood , rm.mood_id, u.name AS user_name 
       FROM recommendations AS r
       LEFT JOIN medium AS m ON r.medium_id = m.id
       LEFT JOIN users AS u ON r.user_id = u.id
       LEFT JOIN recommendationMood AS rm ON r.id = rm.recommendation_id
       LEFT JOIN mood on rm.mood_id=mood.id
       WHERE m.type = $1;
       `
       const result = await db.query(recommendationsQuery,[selectedMedium]);
           res.status(200).json(result.rows)
       } catch (error) {
       return res.status(500).json({error:"Internal server error"});
   }
})
// app.get("/recommendations/musics", async function(req,res){
//     try {
//        const recommendationsQuery = 
//        `
//        SELECT r.name AS recommendation_name, m.type AS medium_type,mood.type as mood , rm.mood_id, u.name AS user_name 
//        FROM recommendations AS r
//        LEFT JOIN medium AS m ON r.medium_id = m.id
//        LEFT JOIN users AS u ON r.user_id = u.id
//        LEFT JOIN recommendationMood AS rm ON r.id = rm.recommendation_id
//        LEFT JOIN mood on rm.mood_id=mood.id
//        WHERE m.type = 'music';
//        `
//        const result = await db.query(recommendationsQuery);
//            res.status(200).json(result.rows)
//        } catch (error) {
//        return res.status(500).json({error:"Internal server error"});
//    }
// })

// app.get("/recommendations/movies", async function(req,res){
//     try {
//        const recommendationsQuery = 
//        `
//        SELECT r.name AS recommendation_name, m.type AS medium_type,mood.type as mood , rm.mood_id, u.name AS user_name 
//        FROM recommendations AS r
//        LEFT JOIN medium AS m ON r.medium_id = m.id
//        LEFT JOIN users AS u ON r.user_id = u.id
//        LEFT JOIN recommendationMood AS rm ON r.id = rm.recommendation_id
//        LEFT JOIN mood on rm.mood_id=mood.id
//        WHERE m.type = 'movie';
//        `
//        const result = await db.query(recommendationsQuery);
//            res.status(200).json(result.rows)
//        } catch (error) {
//        return res.status(500).json({error:"Internal server error"});
//    }
// })

app.get("/recommendations/mood", async function(req,res){
    try {
        const selectedMood = req.query.mood;
       const recommendationsQuery = 
       `
       SELECT r.name AS recommendation_name, m.type AS medium_type,mood.type as mood , rm.mood_id, u.name AS user_name 
       FROM recommendations AS r
       LEFT JOIN medium AS m ON r.medium_id = m.id
       LEFT JOIN users AS u ON r.user_id = u.id
       LEFT JOIN recommendationMood AS rm ON r.id = rm.recommendation_id
       LEFT JOIN mood on rm.mood_id=mood.id
       WHERE mood.type = $1;
       `
       const result = await db.query(recommendationsQuery,[selectedMood]);
           res.status(200).json(result.rows)
       } catch (error) {
       return res.status(500).json({error:"Internal server error"});
   }
})




app.listen(port,()=> console.log(`listenig on port${port}`));
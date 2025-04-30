const express = require('express');
const postsQC = require('../models/postsQC');


const router = express.Router();

//save details

// router.post('/qcpost/save',(req,res)=>{

//     let newPost = new postsQC(req.body);

//     newPost.save((err)=>{
//         if(err){return res.status(400).json({
//             error: err
//             });
//         }
//         return res.status(200).json({
//             success: "Posts saved successfully"
//         });
//     });
// });

router.post('/qcpost/save', async (req, res) => {
    try {
        // Validate required fields
        if (!req.body.ProductID || !req.body.BuyerID || !req.body.ProductType) {
            return res.status(400).json({
                error: "Missing required fields"
            });
        }

        const newPost = new postsQC(req.body);
        
        // Using async/await instead of callback
        const savedPost = await newPost.save();
        
        return res.status(201).json({
            success: true,
            message: "Post saved successfully",
            data: savedPost
        });
        
    } catch (err) {
        console.error("Error saving post:", err);
        return res.status(500).json({
            success: false,
            error: err.message || "Server error"
        });
    }
});


//get details

router.get("/qcpost/:id", (req, res) => {

    let postId = req.params.id;
  
    postsQC.findById(postId,(err,post)=>{
          if(err){
          return res.status(400).json({success:false,err});
    }
          return res.status(200).json({
              success:true,
              post
          });
      });
  });

  //getpost
router.get('/qcpost',(req,res) =>{
    postsQC.find().exec((err,post) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:post
        });
    });
});
  
  //update

router.put('/qcpost/update/:id',(req,res) =>{
    postsQC.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(err,post)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"Updated Succeesfully"
        });
    });
});

//delete

router.delete('/qcpost/delete/:id',(req,res)=>{
    postsQC.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if (err) return res.status(400).json({
            message: "Delete Unsuccesfull",err
        })

        return res.json({
            message: "Delete Succesfull",deletedPost
        });
    });
});


module.exports = router;
const express = require("express");
const router = express.Router();
const Teacher = require("../models/teacher");

router.post(
  "/addschedule",
  async (req, res) => {
  
    const newSchedule = new Teacher({
      name: req.body.name,
      subject: req.body.subject,
      startHour: req.body.startHour,
      startMinutes: req.body.startMinutes,
      endHour: req.body.endHour,
      endMinutes: req.body.endMinutes,
      date: req.body.date,
      month:req.body.month,
      year:req.body.year,
    });
    newSchedule.save()
    .then(()=>{
      Teacher.find({date:req.body.date,month:req.body.month,year:req.body.year})
      .then((schedule)=>{
        return res.status(200).json({schedule:schedule})
      })
      .catch((err)=>{
        console.log(err);
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  }
);

router.get("/getSchedule/:date/:month/:year",async(req,res)=>{
  await Teacher.find({date:req.params.date,month:req.params.month,year:req.params.year})
  .then((schedule)=>{
    return res.status(200).json({schedule:schedule});
  })
  .catch((err)=>{
    console.log(err);
  })
})

router.get('/getWeekShedule/:date/:month/:year/:nextDate/:nextMonth/:nextYear',async(req,res)=>{
  await Teacher.find({date:{$gte:req.params.date},month:{$lte:req.params.nextMonth,$gte:req.params.month},year:{$lte:req.params.nextYear,$gte:req.params.year}})
  .then((schedule)=>{
    return res.status(200).json({schedule:schedule});
  })
  .catch((err)=>{
    console.log(err);
  })
})

router.get('/getMonthShedule/:date/:month/:year/:nextMonth/:nextYear',async(req,res)=>{
  await Teacher.find({date:{$gte:req.params.date},month:{$lte:req.params.nextMonth,$gte:req.params.month},year:{$lte:req.params.nextYear,$gte:req.params.year}})
  .then((schedule)=>{
    return res.status(200).json({schedule:schedule});
  })
  .catch((err)=>{
    console.log(err);
  })
})

router.get("/getTeacher/:name",async(req,res)=>{
  await Teacher.find({name:req.params.name})
  .then((schedule)=>{
    return res.status(200).json({schedule:schedule});
  })
  .catch((err)=>{
    console.log(err);
  })
})

router.delete("/deleteSchedule/:id",async(req,res)=>{
  await Teacher.findByIdAndDelete(req.params.id,(err,docs)=>{
    if(err){
      console.log(err);
    }
  })
})


module.exports = router;
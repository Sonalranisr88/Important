var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Sonal campground",
        image:"https://media.istockphoto.com/id/1377841262/photo/the-beautiful-scenery-of-a-tent-in-a-pine-tree-forest-at-pang-oung-mae-hong-son-province.jpg?b=1&s=170667a&w=0&k=20&c=LhjnOLqoXHmsklVSGUkuvtbjXrfa83WZ5G6wz4UjiAc=",
        description:"Campsite, campground, and camping pitch are all related terms regarding a place used for camping. The usage differs between British English and American English. UK: A campsite is an area, usually divided into a number of camping pitches, where people can camp overnight using tents, campervans or caravans."
    },
    {
        name:"Rani campground",
        image:"https://media.istockphoto.com/id/911995140/photo/camping-tent-in-a-camping-in-a-forest-by-the-river.jpg?s=612x612&w=0&k=20&c=VTK_4PQ1fIRol9S40-3uXjJEve9HwbKOeginDDbpYZk=",
        description:"Campsite, campground, and camping pitch are all related terms regarding a place used for camping. The usage differs between British English and American English. UK: A campsite is an area, usually divided into a number of camping pitches, where people can camp overnight using tents, campervans or caravans. "

    },
    {
        name:"Kingdom ",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYUZU-KmW9AjtmpKh7m8nvw7QyDLwtrCYrt2-pkBGh&s",
        description:"Campsite, campground, and camping pitch are all related terms regarding a place used for camping. The usage differs between British English and American English. UK: A campsite is an area, usually divided into a number of camping pitches, where people can camp overnight using tents, campervans or caravans."

    }
]

async function seedDB(){
//     // Deletes all the campgrounds from the DB.
   var campgrounds = await Campground.deleteMany({});
        // console.log("removed campground!")
        addAll(data);

      
};
async function addAll(data) {
    for (var val of data) {
        var campground = await Campground.create(val);

        console.log('Added a campground');
        addComment(campground);
        
    }
}

async function addComment(campground){
    var comment = await Comment.create({
        text: "This place is great.",
        author: 'Sonal Rani'
    });
    if(comment){
        campground.comments.push(comment)
        campground.save()
        console.log('Created new comment');
    }
}

module.exports = seedDB;
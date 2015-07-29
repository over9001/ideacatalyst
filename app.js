/**
 * An random idea seed generator.
 */
 function imagineer() {

ideaCatalyst = {};
ideaCatalyst.subjects = ["Genetics","Philosophy","Politics","Electronics","Linguistics","Friendship","War","Peace","Education","Efficiency","Telecommunications","Mathematics","Space/Time","Existentialism","Chemistry","Biology","Computer Science","Internet","Cooking","Fishing","Trolling","Countertrolling","Terrorism","Doublethink","Financial Engineering","Democracy","Anarchy","Imagineering","Institutions"];
ideaCatalyst.objects = ["Statue","Book","Manifesto","Consumer Product","Bacteria","Computer","Food","Building","Icon","Avatar","Clothing","Bike","Vehicle","Financial Product","Contract","Animal","Accessory","Tool","Sticker","Poster","Plan","Institution"];
ideaCatalyst.eras = ["Tomorrow","Next Year","Next Decade (10 Years)","Next Century (100 Years)","Next Generation","Next Gigasecond (31.558 Years)","Next Millennium (1000 Years)"];
ideaCatalyst.moods = ["Optimistic","Pessimistic","Suspicious","Loving","Tired","Inquisitive","Quixotic","Frantic","Hysterical","Enraged","Indignant","Joyous","Excited","Horny","Hella","Courageous","Stimulated","Energetic","Radioactive","Questing","Victorious",""];

//ideaCatalyst.idea = function () {
  newIdea = {};
  newIdea.object = ideaCatalyst.objects[Math.floor(Math.random() * ideaCatalyst.objects.length)];
  newIdea.subject = ideaCatalyst.subjects[Math.floor(Math.random() * ideaCatalyst.subjects.length)];
  newIdea.mood = ideaCatalyst.moods[Math.floor(Math.random() * ideaCatalyst.moods.length)];
  newIdea.era = ideaCatalyst.eras[Math.floor(Math.random() * ideaCatalyst.eras.length)];
  return newIdea;
//};

}

//ideaCatalyst.roll = function () {
//  console.log(ideaCatalyst.idea());
//};

//iC = ideaCatalyst;

//iC.imagineering = iC.roll;
//iC.imagineering();

module.exports = imagineer;
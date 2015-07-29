/**
 * An random idea seed generator.
 */
 function imagineer() {
 	//First set up all the possibilities
ideaCatalyst = {};
ideaCatalyst.subjects = ["Genetics","Philosophy","Politics","Electronics","Linguistics","Friendship","War","Peace","Education","Efficiency","Telecommunications","Mathematics","Space/Time","Existentialism","Chemistry","Biology","Computer Science","Internet","Cooking","Fishing","Trolling","Countertrolling","Terrorism","Doublethink","Financial Engineering","Democracy","Anarchy","Imagineering","Institutions","Randomness"];
ideaCatalyst.objects = ["Statue","Book","Manifesto","Consumer Product","Bacteria","Computer","Food","Building","Icon","Avatar","Clothing","Bike","Vehicle","Financial Product","Contract","Animal","Accessory","Tool","Sticker","Poster","Plan","Institution","Webapp"];
ideaCatalyst.eras = ["Tomorrow","Next Year","Next Decade (10 Years)","Next Century (100 Years)","Next Generation","Next Gigasecond (31.558 Years)","Next Millennium (1000 Years)","After time travel is discovered"];
ideaCatalyst.moods = ["Optimistic","Pessimistic","Suspicious","Loving","Tired","Inquisitive","Quixotic","Frantic","Hysterical","Enraged","Indignant","Joyous","Excited","Horny","Hella","Courageous","Stimulated","Energetic","Radioactive","Questing","Victorious","Meta"];
	//Pick only one of these possible futures
newIdea = {};
newIdea.object = ideaCatalyst.objects[Math.floor(Math.random() * ideaCatalyst.objects.length)];
newIdea.subject = ideaCatalyst.subjects[Math.floor(Math.random() * ideaCatalyst.subjects.length)];
newIdea.mood = ideaCatalyst.moods[Math.floor(Math.random() * ideaCatalyst.moods.length)];
newIdea.era = ideaCatalyst.eras[Math.floor(Math.random() * ideaCatalyst.eras.length)];
	//Know it
console.log(newIdea);
	//Set it free
return newIdea;
}
	//Allow it to set others free
module.exports = imagineer;
ideaCatalyst = {};
ideaCatalyst.subjects = ["Genetics","Philosophy","Politics","Electronics","Linguistics","Friendship","War","Peace","Education","Efficiency","Telecommunications","Mathematics","Space/Time","Existentialism","Chemistry","Biology","Computer Science","Internet","Cooking","Fishing","Trolling","Countertrolling","Terrorism","Doublethink","Financial Engineering"];
ideaCatalyst.objects = ["Statue","Book","Manifesto","Consumer Product","Bacteria","Computer","Food","Building","Icon","Avatar","Clothing","Bike","Vehicle","Financial Product","Contract","Animal","Accessory","Tool","Sticker","Poster","Plan"];
ideaCatalyst.eras = ["Tomorrow","Next Year","Next Decade","Next Century","Next Generation","Next Gigasecond (Thirty Years From Now)","Next Millennium"];
ideaCatalyst.moods = ["Optimistic","Pessimistic","Suspicious","Loving","Tired","Inquisitive","Quixotic","Frantic","Hysterical","Enraged","Indignant","Joyous","Excited","Horny","Hella"];

ideaCatalyst.idea = function () {
  newIdea = {};
  newIdea.subject = ideaCatalyst.subjects[Math.floor(Math.random() * ideaCatalyst.subjects.length)];
  newIdea.object = ideaCatalyst.objects[Math.floor(Math.random() * ideaCatalyst.objects.length)];
  newIdea.era = ideaCatalyst.eras[Math.floor(Math.random() * ideaCatalyst.eras.length)];
  newIdea.mood = ideaCatalyst.moods[Math.floor(Math.random() * ideaCatalyst.moods.length)];
  return newIdea;
};

console.log(ideaCatalyst.idea());

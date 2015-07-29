ideaCatalyst = {};
ideaCatalyst.subjects = [];
ideaCatalyst.objects = [];
ideaCatalyst.eras = [];
ideaCatalyst.moods = [];

ideaCatalyst.idea = function () {
  newIdea = {};
  newIdea.subject = ideaCatalyst.subjects[Math.floor(Math.random() * ideaCatalyst.subjects.length)];
  newIdea.object = ideaCatalyst.objects[Math.floor(Math.random() * ideaCatalyst.objects.length)];
  newIdea.era = ideaCatalyst.eras[Math.floor(Math.random() * ideaCatalyst.eras.length)];
  newIdea.mood = ideaCatalyst.moods[Math.floor(Math.random() * ideaCatalyst.moods.length)];
  return newIdea;
};

console.log(ideaCatalyst.idea());

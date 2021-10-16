'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Comments', [
        {body: 'You’re that “Nothing” when people ask me what I’m thinking about.', songId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {body: 'I like your style.', songId: 2, userId: 9, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You deserve a hug right now.', songId: 3, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You should be proud of yourself.', songId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You have the courage of your convictions.', songId: 5, userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {body: 'How is it that you always look great, even in sweatpants?', songId: 6, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You’re great at figuring stuff out.', songId: 7, userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {body: "You're more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?", songId: 9, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {body: "You're one of a kind!", songId: 9, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {body: "You're like a breath of fresh air.", songId: 10, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {body: 'When you say you will do something, I trust you.', songId: 11, userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You look great today.', songId: 12, userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You have the best laugh.', songId: 13, userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Hanging out with you is always a blast.', songId: 14, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {body: 'I bet you do the crossword puzzle in ink.', songId: 15, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You are awesome!', songId: 16, userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {body: 'When you say you will do something, I trust you.', songId: 17, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You are the most perfect you there is.', songId: 18, userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {body: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.', songId: 19, userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You should be thanked more often. So thank you!!', songId: 20, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Your name suits you to a T.', songId: 21, userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {body: 'I bet you make babies smile.', songId: 22, userId: 9, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Jokes are funnier when you tell them.', songId: 23, userId: 10, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Actions speak louder than words, and yours tell an incredible story.', songId: 24, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {body: 'When you make up your mind about something, nothing stands in your way.', songId: 25, userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You are awesome!', songId: 26, userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Thank you for being there for me.', songId: 27, userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {body: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.', songId: 28, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {body: 'If someone based an Internet meme on you, it would have impeccable grammar.', songId: 29, userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {body: 'The people you love are lucky to have you in their lives.', songId: 30, userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {body: 'In high school I bet you were voted “most likely to keep being awesome.”', songId: 31, userId: 10, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You have the best laugh.', songId: 32, userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You smell really good.', songId: 33, userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You have the best ideas.', songId: 34, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You help me feel more joy in life.', songId: 35, userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You always find something special in the most ordinary things.', songId: 36, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {body: 'I bet you make babies smile.', songId: 37, userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You have impeccable manners.', songId: 38, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Your hair looks stunning.', songId: 39, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {body: 'When you make up your mind about something, nothing stands in your way.', songId: 40, userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {body: 'I bet you do the crossword puzzle in ink.', songId: 41, userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You have a good head on your shoulders.', songId: 42, userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Your perspective is refreshing.', songId: 3, userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {body: 'When you make a mistake, you fix it.', songId: 4, userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Any team would be lucky to have you on it.', songId: 5, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You are enough.', songId: 6, userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You should be proud of yourself.', songId: 7, userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You are brave.', songId: 8, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You bring out the best in other people.', songId: 9, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Your ability to recall random factoids at just the right time is impressive.', songId: 1, userId: 10, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Somehow you make time stop and fly at the same time.', songId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Has anyone ever told you that you have great posture?', songId: 2, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You help me be the best version of myself.', songId: 3, userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {body: 'When you make a mistake, you try to fix it.', songId: 4, userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Everything would be better if more people were like you!', songId: 5, userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You should be thanked more often. So thank you!!', songId: 6, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {body: 'You could survive a Zombie apocalypse.', songId: 7, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {body: 'The way you treasure your loved ones is incredible.', songId: 8, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Is that your picture next to “charming” in the dictionary?', songId: 9, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {body: 'Your kindness is a balm to all who encounter it.', songId: 10, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        // {body: 'This is cool x5!', songId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};

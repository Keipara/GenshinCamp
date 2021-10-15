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
      return queryInterface.bulkInsert('Songs', [
        {title: 'When The Moon\'s Reaching Out Stars', songFile: 'https://soundtrackcloud.s3.amazonaws.com/Persona+3+OST+-+When+The+Moon\'s+Reaching+Out+Stars.mp3', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {title: 'The Poem for Everyone\'s Souls', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Persona+3+OST+-+The+Poem+for+Everyone\'s+Souls.mp3', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Mass Destruction', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Persona+3+OST+-+Mass+Destruction.mp3', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Living With Determination -Iwatodai Station Arrange-', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Persona+3+OST+-+Living+With+Determination+-Iwatodai+Station+Arrange-.mp3', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Joy', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Persona+3+OST+-+Joy.mp3', userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Amber\'s Theme', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Genshin+Impact+Soundtrack+%2323.mp3', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {title: 'A Day in Mondstadt', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Genshin+Impact+Dynamic+Music+_+A+Day+in+Mondstadt.mp3', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Loading Screen Music Theme', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Genshin+Impact+-+Loading+Screen+Music+Theme+%231.mp3', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Duty', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Fire+Emblem+Awakening+OST+-+Duty.mp3', userId: 10, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Destiny', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Fire+Emblem+Awakening+OST+-+Destiny.mp3', userId: 10, createdAt: new Date(), updatedAt: new Date()},
        {title: 'It appears the capital was spared the chaos', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Fire+Emblem+Awakening+OST+-+_It+appears+the+capital+was+spared+the+chaos_.mp3', userId: 10, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Oh, it\'s not so bad, Lissa. Just a healthy little walk!', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Fire+Emblem+Awakening+OST+-+_Oh%2C+it\'s+not+so+bad%2C+Lissa.+Just+a+healthy+little+walk!_.mp3', userId: 10, createdAt: new Date(), updatedAt: new Date()},
        {title: 'But, Frederick, it\'s nearly dark!', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Fire+Emblem+Awakening+OST+-+_But%2C+Frederick%2C+it\'s+nearly+dark!_.mp3', userId: 10, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Ha ha! Yes, it will take some getting used to!', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/_Ha+ha!+Yes%2C+it+will+take+some+getting+used+to!_+-+Fire+Emblem+Awakening.mp3', userId: 10, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Mr. Monokuma After Class', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Danganronpa+V3+OST+-+White_+-2-15-+Mr.+Monokuma+After+Class+V3.mp3', userId: 9, createdAt: new Date(), updatedAt: new Date()},
        {title: 'White', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Danganronpa+V3+OST+-+White_+-1-01-+DANGANRONPA+V3.mp3', userId: 9, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Land of Civil War', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Bravely+Default+-+Flying+Fairy+OST+-+36+Land+of+Civil+War.mp3', userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Depressed Land', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Bravely+Default+-+Flying+Fairy+OST+-+35+Depressed+Land.mp3', userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Beneath the Hollow Moon', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Bravely+Default+-+Flying+Fairy+OST+-+12+Beneath+the+Hollow+Moon.mp3', userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Land of Light and Shadow', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Bravely+Default+-+Flying+Fairy+OST+-+08+Land+of+Light+and+Shadow.mp3', userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Land of Beginnings', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Bravely+Default+-+Flying+Fairy+OST+-+06+Land+of+Beginnings.mp3', userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Eternity\'s Moment', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Bravely+Default+-+Flying+Fairy+OST+-+02+Eternity\'s+Moment.mp3', userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Animal City', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/Animal+City+(Animal+Crossing_+City+Folk)+K.K.+Slider+Live+Music+-+Animal+Crossing+New+Horizons+OST.mp3', userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {title: '12PM Snowy', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/12PM+_+12_00+Snowy+-+Animal+Crossing+New+Horizons+OST.mp3', userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {title: '5AM Sunny', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/5AM+_+5_00+Sunny+-+Animal+Crossing+New+Horizons+OST.mp3', userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Rodeo de Chocobo', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/53++Final+Fantasy+XV+++53++Rodeo+de+Chocobo.mp3', userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Dining Car', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/76++Final+Fantasy+XV+OST+++76++Dining+Car.mp3', userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Valse di Fantastica', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/29++Final+Fantasy+XV+OST+++29++Valse+di+Fantastica.mp3', userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Stand Your Ground', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/07++Final+Fantasy+XV+OST+++07++Stand+Your+Ground.mp3', userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {title: 'The Story Ends and the Journey Begins', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/4+-+23+The+Story+Ends+and+the+Journey+Begins+%5BTales+of+Vesperia+OST%5D.mp3', userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {title: 'A Vow of Unity', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/2+-+06+A+Vow+of+Unity+%5BTales+of+Vesperia+OST%5D.mp3', userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {title: 'The Sound of Waves Dancing in the Soul', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/2+-+03+The+Sound+of+Waves+Dancing+in+the+Soul+%5BTales+of+Vesperia+OST%5D.mp3', userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {title: 'About a Flower', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/1+-+26+About+a+Flower+%5BTales+of+Vesperia+OST%5D.mp3', userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Impenetrable Wall', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/1+-+19+Impenetrable+Wall+%5BTales+of+Vesperia+OST%5D.mp3', userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Serenade of the Morning Star', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/1+-+17+Serenade+of+the+Morning+Star+%5BTales+of+Vesperia+OST%5D.mp3', userId: 8, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Temple of Time', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/%5BMapleStory+BGM%5D+Temple+of+Time.mp3', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Orbis Upon the Sky', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/%5BMapleStory+BGM%5D+Orbis_+Upon+the+Sky.mp3', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Night Market', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/%5BMapleStory+BGM%5D+Night+Market.mp3', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Ludibrium Fantasia', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/%5BMapleStory+BGM%5D+Ludibrium_+Fantasia.mp3', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Lith Harbor Above the Treetops', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/%5BMapleStory+BGM%5D+Lith+Harbor_+Above+the+Treetops.mp3', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Happyville White Christmas', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/%5BMapleStory+BGM%5D+Happyville_+White+Christmas.mp3', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Kerning Square', songFile: 'https://soundtrackcloud.s3.us-west-1.amazonaws.com/%5BMapleStory+BGM%5D+Kerning+Square.mp3', userId: 3, createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};

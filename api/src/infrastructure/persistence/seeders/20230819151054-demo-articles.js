'use strict';

/** @type {import('sequelize-cli').Migration} */
const up = async (queryInterface, Sequelize) => {
	await queryInterface.bulkInsert(
    'articles',
    [
      { id: 1, author_id: 3, title: 'Exploring Ancient Ruins', content: 'Discover the secrets of ancient civilizations as we explore their breathtaking ruins.' },
      { id: 2, author_id: 7, title: 'A Journey Through Culinary Delights', content: 'Embark on a culinary adventure around the world, savoring diverse flavors and aromas.' },
      { id: 3, author_id: 2, title: 'Island Paradise Escapes', content: 'Get lost in the tranquility of remote island paradises, where crystal-clear waters await.' },
      { id: 4, author_id: 9, title: 'Urban Wonders: Exploring Metropolises', content: 'Dive into the hustle and bustle of urban life as we explore the wonders of sprawling metropolises.' },
      { id: 5, author_id: 5, title: 'The Enchantment of Historic Castles', content: 'Step back in time and uncover the enchanting stories behind the world\'s most historic castles.' },
      { id: 6, author_id: 10, title: 'Wildlife Adventures in Untamed Jungles', content: 'Embark on a thrilling journey through untamed jungles, encountering exotic wildlife along the way.' },
      { id: 7, author_id: 4, title: 'Sandy Shores and Sunsets', content: 'Relax on the sandy shores of the world\'s most beautiful beaches and watch the sunsets paint the sky.' },
      { id: 8, author_id: 8, title: 'Uncharted Territories: Off-Grid Explorations', content: 'Venture into uncharted territories, leaving behind modern conveniences for raw and authentic experiences.' },
      { id: 9, author_id: 1, title: 'Cruising along Majestic Rivers', content: 'Embark on a serene river cruise, meandering through picturesque landscapes and historic towns.' },
      { id: 10, author_id: 6, title: 'Adrenaline-Fueled Adventures', content: 'For the thrill-seekers, we\'ve compiled a list of heart-pounding adventures that will get your adrenaline pumping.' },
      { id: 11, author_id: 11, title: 'The Magic of Winter Destinations', content: 'Embrace the winter wonderlands around the globe, from cozy chalets to icy escapades.' },
      { id: 12, author_id: 3, title: 'Cultural Marvels: Museums Beyond Borders', content: 'Explore the world\'s most captivating museums, where art, history, and culture converge.' },
      { id: 13, author_id: 7, title: 'Trekking the Inca Trail', content: 'Follow in the footsteps of ancient civilizations as you trek the legendary Inca Trail to Machu Picchu.' },
      { id: 14, author_id: 2, title: 'Diving into Coral Paradises', content: 'Plunge into the vibrant underwater worlds of coral reefs, teeming with marine life and vivid colors.' },
      { id: 15, author_id: 9, title: 'Iconic Landmarks: Beyond the Postcards', content: 'Discover the stories and secrets behind the world\'s most iconic landmarks that have stood the test of time.' },
      { id: 16, author_id: 5, title: 'Wandering through Enchanted Forests', content: 'Get lost in the enchantment of ancient forests, where sunlight filters through the towering trees.' },
      { id: 17, author_id: 10, title: 'Unforgettable Train Journeys', content: 'Embark on scenic train journeys that traverse breathtaking landscapes and offer a glimpse into local life.' },
      { id: 18, author_id: 4, title: 'Serenity by the Lakeside', content: 'Find peace and serenity by the shores of picturesque lakes, where nature\'s beauty knows no bounds.' },
      { id: 19, author_id: 8, title: 'Nomadic Adventures: Life on the Move', content: 'Experience the nomadic way of life, journeying with communities that have mastered the art of adaptation.' },
      { id: 20, author_id: 1, title: 'Chasing the Northern Lights', content: 'Embark on a quest to witness the breathtaking phenomenon of the Northern Lights dancing across the night sky.' },
      { id: 21, author_id: 6, title: 'Lost in Labyrinthine Bazaars', content: 'Navigate through bustling bazaars and vibrant marketplaces, where treasures and culture abound.' },
      { id: 22, author_id: 11, title: 'Ancient Temples: Echoes of the Past', content: 'Uncover the mysteries and marvels of ancient temples that stand as testaments to human ingenuity.' },
      { id: 23, author_id: 3, title: 'Safari Adventures: Up Close with Wildlife', content: 'Embark on a safari expedition, encountering majestic creatures and immersing yourself in the wild.' },
      { id: 24, author_id: 7, title: 'Gastronomic Grandeur: Michelin Delights', content: 'Indulge in the opulence of Michelin-starred dining, where culinary artistry meets gourmet perfection.' },
      { id: 25, author_id: 2, title: 'Cruising the Mediterranean', content: 'Set sail on the azure waters of the Mediterranean, exploring charming coastal towns and ancient ruins.' },
      { id: 26, author_id: 9, title: 'Hiking the World\'s Majestic Peaks', content: 'Embark on a high-altitude adventure, conquering the world\'s most majestic peaks and enjoying panoramic vistas.' },
      { id: 27, author_id: 5, title: 'Charming Villages of Europe', content: 'Stroll through storybook villages in Europe, where cobblestone streets and charming architecture await.' },
      { id: 28, author_id: 10, title: 'Desert Dreams: Sands and Stars', content: 'Experience the allure of deserts, where shifting sands create a mesmerizing landscape under starry skies.' },
      { id: 29, author_id: 4, title: 'The Art of Slow Travel', content: 'Embrace the art of slow travel, immersing yourself in local culture and forging genuine connections.' },
      { id: 30, author_id: 8, title: 'In Search of Hidden Waterfalls', content: 'Embark on a journey to discover hidden waterfalls nestled in lush landscapes, offering moments of tranquility.' },
      { id: 31, author_id: 1, title: 'Architectural Marvels: Modern Wonders', content: 'Marvel at the ingenuity of modern architecture as we explore the world\'s most striking contemporary structures.' },
      { id: 32, author_id: 6, title: 'Mysteries of the Deep: Ocean Exploration', content: 'Plunge into the abyss of the ocean to explore its mysteries, from hidden creatures to ancient shipwrecks.' },
      { id: 33, author_id: 11, title: 'Enchanted Winter: Snow-Covered Escapes', content: 'Embrace the magic of winter wonderlands, where snow-covered landscapes create a fairytale-like atmosphere.' },
      { id: 34, author_id: 3, title: 'Lost Cities of the World', content: 'Unearth the remnants of lost cities that hold tales of bygone civilizations and ancient marvels.' },
      { id: 35, author_id: 7, title: 'Culinary Adventures: Street Food Delights', content: 'Embark on a street food journey, savoring the flavors of local cuisines from bustling markets around the world.' },
      { id: 36, author_id: 2, title: 'Sailing the Caribbean Waters', content: 'Hoist the sails and set course for the Caribbean, where turquoise waters and white sands beckon.' },
      { id: 37, author_id: 9, title: 'Epic Motorcycle Road Trips', content: 'Hit the open road on a motorcycle adventure, cruising through diverse landscapes and feeling the freedom of the wind.' },
      { id: 38, author_id: 5, title: 'Whispers of Ancient Forests', content: 'Listen to the whispers of ancient forests, where trees hold stories and wildlife thrives in harmony.' },
      { id: 39, author_id: 10, title: 'Nomadic Artistry: Crafts of Indigenous Peoples', content: 'Discover the artistry of indigenous cultures as we explore their traditional crafts and creative expressions.' },
      { id: 40, author_id: 4, title: 'Chasing Waterfalls: Natural Cascades', content: 'Embark on a waterfall-hunting adventure, discovering natural cascades that enchant with their beauty and power.' },
      { id: 41, author_id: 8, title: 'Abandoned Wonders: Ghost Towns', content: 'Step into the past as we explore the eerie beauty of abandoned ghost towns, frozen in time.' },
      { id: 42, author_id: 1, title: 'Captivating Cultural Festivals', content: 'Immerse yourself in the vibrancy of global festivals that celebrate rich cultural traditions.' },
      { id: 43, author_id: 6, title: 'Mountain Adventures for Thrill Seekers', content: 'Conquer towering peaks and witness awe-inspiring vistas on these thrilling mountain expeditions.' },
      { id: 44, author_id: 9, title: 'Sailing the Seven Seas', content: 'Set sail on a nautical journey, navigating through oceans and discovering new horizons.' }
    ]
  )
}

const down = async (queryInterface) => {
  await queryInterface.bulkDelete('authors', null, {})
}

module.exports = { up, down }

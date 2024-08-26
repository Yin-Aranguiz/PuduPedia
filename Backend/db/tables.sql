CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(50) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE animals (
    id SERIAL PRIMARY KEY, 
    animal VARCHAR(150) NOT NULL UNIQUE,
    diet VARCHAR(50) NOT NULL,
    habitat VARCHAR(50) NOT NULL,
    macrozone VARCHAR(30) NOT NULL,
    reproduction VARCHAR(50) NOT NULL,
    danger_extintion_level VARCHAR(50) NOT NULL
);

CREATE TABLE plants (
    id SERIAL PRIMARY KEY, 
    plant VARCHAR(150) NOT NULL UNIQUE,
    habitat VARCHAR(50) NOT NULL,
    macrozone VARCHAR(50) NOT NULL,
    morfology VARCHAR(50) NOT NULL,
    danger_extintion_level VARCHAR(50) NOT NULL
);

CREATE TABLE parks (
    id SERIAL PRIMARY KEY, 
    park VARCHAR(150) NOT NULL UNIQUE,
    region VARCHAR(50) NOT NULL,
    macrozone VARCHAR(50) NOT NULL,
    ubication VARCHAR(50) NOT NULL
);

CREATE TABLE animals_seen (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    animal_id INT NOT NULL,
    seen BOOLEAN NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (animal_id) REFERENCES animals(id) ON DELETE CASCADE,
    UNIQUE (user_id, animal_id) -- Esto asegura que un usuario no pueda marcar el mismo animal más de una vez
);

CREATE TABLE plants_seen (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    plant_id INT NOT NULL,
    seen BOOLEAN NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (plant_id) REFERENCES plants(id) ON DELETE CASCADE,
    UNIQUE (user_id, plant_id) -- Esto asegura que un usuario no pueda marcar la misma planta más de una vez
);

CREATE TABLE parks_visited (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    park_id INT NOT NULL,
    visited BOOLEAN NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (park_id) REFERENCES parks(id) ON DELETE CASCADE,
    UNIQUE (user_id, park_id) -- Esto asegura que un usuario no pueda marcar el mismo parque más de una vez
);

CREATE TABLE achievements (
    id SERIAL PRIMARY KEY,
    achievement VARCHAR(255) NOT NULL,
    achievement_description TEXT NOT NULL
);

CREATE TABLE achievements_obtained (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    achievement_id INTEGER NOT NULL REFERENCES achievements(id) ON DELETE CASCADE,
    achieved BOOLEAN NOT NULL DEFAULT FALSE,
    UNIQUE (user_id, achievement_id)
);

ALTER TABLE users
ADD COLUMN reset_password_token VARCHAR(255);

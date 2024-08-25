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
    ubication VARCHAR(50) NOT NULL,
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

-- TABLA PARA ALMACENAR TEMPORALMENTE LOS TOKENS DE USUARIO AL RESTABLECER SU CONTRASEÑA
CREATE TABLE password_reset_tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- PARA QUE LA FECHA EN QUE SE ACTUALIZÓ LA CONTRASEÑA SE ACTUALICE AUTOMÁTICAMENTE EN LA TABLA AL CAMBIARLA
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_password_reset_tokens
BEFORE UPDATE ON password_reset_tokens
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

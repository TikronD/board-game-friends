CREATE TABLE IF NOT EXISTS profiles (
  id SERIAL PRIMARY KEY,
  clerk_user_id VARCHAR(255),
  username VARCHAR(255),
  location VARCHAR(255)
)

CREATE TABLE IF NOT EXISTS collection (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES profiles(id),
  game_title VARCHAR(255),
  price_paid INTEGER,
  condition VARCHAR(255),
  extras VARCHAR(255),
  active BOOLEAN DEFAULT TRUE
)

CREATE TABLE IF NOT EXISTS marketplace (
  id SERIAL PRIMARY KEY,
  collection_id INTEGER REFERENCES collection(id),
  user_id INTEGER REFERENCES profiles(id),
  game_title VARCHAR(255),
  price INTEGER,
  description VARCHAR(255),
  condition VARCHAR(255),
  extras BOOLEAN DEFAULT FALSE,
  active BOOLEAN DEFAULT TRUE
)

CREATE TABLE IF NOT EXISTS wishlist (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES profiles(id),
  game_title VARCHAR(255),
  price_max INTEGER,
  condition_min VARCHAR(255),
  extras BOOLEAN DEFAULT FALSE
)

CREATE TABLE IF NOT EXISTS sales (
  seller_id INTEGER REFERENCES profiles(id),
  buyer_id INTEGER REFERENCES profiles(id),
  marketplace_id INTEGER REFERENCES marketplace(id)
)
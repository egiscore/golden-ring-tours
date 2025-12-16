-- Таблица для хранения заявок на бронирование туров
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  booking_number VARCHAR(20) UNIQUE NOT NULL,
  tour_id VARCHAR(100) NOT NULL,
  tour_title VARCHAR(255) NOT NULL,
  departure_date DATE NOT NULL,
  adults INTEGER NOT NULL DEFAULT 1,
  children INTEGER NOT NULL DEFAULT 0,
  total_price DECIMAL(10, 2) NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  comment TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для быстрого поиска
CREATE INDEX idx_bookings_booking_number ON bookings(booking_number);
CREATE INDEX idx_bookings_email ON bookings(customer_email);
CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);
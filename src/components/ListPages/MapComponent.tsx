import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';
import styles from '@styles/MapComponent.module.scss'; // Импортируем стили

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  // Состояние для хранения отмеченных достопримечательностей
  const [landmarks, setLandmarks] = useState([
    {
      position: [54.7065, 20.5117], // Музей янтаря
      name: 'Кафедральный собор',
    },
    {
      position: [54.7226, 20.4997], // Мировой океан
      name: 'Мировой океан',
    },
  ]);

  // Обработчик клика по карте для добавления достопримечательности
  const handleClick = (e) => {
    const { lat, lng } = e.latlng;
    const newLandmark = {
      position: [lat, lng],
      name: `Достопримечательность ${landmarks.length + 1}`,
    };
    setLandmarks([...landmarks, newLandmark]);
  };

  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={[54.7104, 20.4522]} // Координаты Калининграда
        zoom={13} // Уровень масштабирования
        className={styles.mapContainer}
        onClick={handleClick} // Добавляем обработчик клика
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Отображаем все отмеченные достопримечательности */}
        {landmarks.map((landmark, index) => (
          <Marker key={index} position={landmark.position}>
            <Popup>{landmark.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
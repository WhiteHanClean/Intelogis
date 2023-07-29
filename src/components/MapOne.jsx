import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import TableToRoute from "./TableToRoute";
import { useDispatch, useSelector } from "react-redux";
import { getApiCartAction } from "../redux/reducer/apiCartReducer";

const MapWithRoutes = () => {
  const dispatch = useDispatch();

  //   const [selectedRoute, setSelectedRoute] = useState(null);
  const selectedRoute = useSelector((state) => state.apiCart.list);
  const selectedRouteCoordinates = selectedRoute.map((point) => [
    point.location[1],
    point.location[0],
  ]);

  const routes = [
    [
      { id: 1, latitude: 59.84660399, longitude: 30.29496392 },
      { id: 2, latitude: 59.82934196, longitude: 30.42423701 },
      { id: 3, latitude: 59.83567701, longitude: 30.38064206 },
    ],
    [
      { id: 1, latitude: 59.82934196, longitude: 30.42423701 },
      { id: 2, latitude: 59.82761295, longitude: 30.41705607 },
      { id: 3, latitude: 59.84660399, longitude: 30.29496392 },
    ],
    [
      { id: 1, latitude: 59.83567701, longitude: 30.38064206 },
      { id: 2, latitude: 59.84660399, longitude: 30.29496392 },
      { id: 3, latitude: 59.82761295, longitude: 30.41705607 },
    ],
  ];

  const handleRowClick = (record) => {
    const selectedRoutePoints = routes[record.key];
    dispatch(getApiCartAction(selectedRoutePoints));
  };

  return (
    <div className="map">
      <TableToRoute handleRowClick={handleRowClick} routes={routes} />
      <MapContainer center={[59.84, 30.35]} zoom={12}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline positions={selectedRouteCoordinates} color="blue" />
        {selectedRouteCoordinates.map((coords, index) => (
          <Marker key={index} position={coords}>
            <Popup>{`Точка ${index + 1}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapWithRoutes;

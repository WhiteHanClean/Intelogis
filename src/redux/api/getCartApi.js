import axios from "axios";

export const getCartApi = (coordinates) => {
  const coordinatesString = coordinates.payload
    .map((point) => `${point.longitude},${point.latitude}`)
    .join(";");

  const url = `http://router.project-osrm.org/route/v1/driving/${coordinatesString}?geometries=polyline`;

  return axios.get(url);
};

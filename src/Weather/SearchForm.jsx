import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  getCurrentWeather,
  defaultParams,
  getForcastWeather,
} from "../services/apiService";
import { setCurrentWeather, setForecastWeather } from "../services/stateService";
import { useDispatch } from "react-redux";


function SearchForm({
  closeSideBar,
  selectedData,
  setSelectedData,
}) {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const dispatch = useDispatch();
  const cities = [
    {
      name: "Tallinn",
      lat: "59.4370",
      lon: "24.7536",
    },
    {
      name: "Tartu",
      lat: 58.378,
      lon: 26.729,
    },
    {
      name: "Parnu",
      lat: 58.3917,
      lon: 24.4953,
    },
    {
      name: "Narva",
      lat: 59.3797,
      lon: 28.1791,
    },
  ];
  const modes = ["xml", "html", "json"];
  const units = ["standard", "metric", "imperial"];

  const languages = [
    {
      label: "English",
      code: "en",
    },
    {
      label: "Finish",
      code: "fi",
    },
    {
      label: "Russian",
      code: "ru",
    },
    {
      label: "Vietnamese",
      code: "vi",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = {
      lat: event.target.latitude.value,
      lon: event.target.longitude.value,
      mode: event.target.mode.value,
      units: event.target.unit.value,
      lang: event.target.language.value,
    };

    setSelectedData(params);

    const currentWeather = await getCurrentWeather(params);
    const forecastWeather = await getForcastWeather(params);
  

    dispatch(setCurrentWeather(currentWeather));
    dispatch(setForecastWeather(forecastWeather));

    closeSideBar();
  };
  const defaultValue = selectedData || defaultParams;
  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>Cities</Form.Label>
        <Form.Select name="city" onChange={(event) => setSelectedCityIndex(event.target.value)}>
          {cities.map(({ name }, index) => (
            <option value={index} key={name}>
              {name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Latitude"
          name="latitude"
          value={cities[selectedCityIndex].lat}
          readOnly
        />
        <Form.Text className="text-muted">Example: 59.4370</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Longitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Longitude"
          name="longitude"
          value={cities[selectedCityIndex].lon}
          readOnly
        />
        <Form.Text className="text-muted">Example: 24.7536</Form.Text>
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Mode</Form.Label>
            {modes.map((mode) => (
              <Form.Check
                type="radio"
                label={mode}
                key={mode}
                name="mode"
                value={mode}
                defaultChecked={mode === defaultValue.mode}
                disabled
              />
            ))}
            <Form.Text className="text-muted">Data type</Form.Text>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Units</Form.Label>
            {units.map((unit) => (
              <Form.Check
                type="radio"
                label={unit}
                key={unit}
                name="unit"
                value={unit}
                defaultChecked={unit === defaultValue.units}
              />
            ))}
            <Form.Text className="text-muted">Measurement type</Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Languages</Form.Label>
        <Form.Select name="language" defaultValue={defaultValue.lang}>
          {languages.map(({ code, label }) => (
            <option value={code} key={code}>
              {label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          Search
        </Button>
      </div>
    </Form>
  );
}

export default SearchForm;

import { Form } from "react-bootstrap";

const Filter = (props) => {
  return (
    <Form inline>
      <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        Buscar por instrumento:
      </Form.Label>
      <Form.Control
        as="select"
        className="my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        custom
        size="sm"
        onChange={(e) => props.filterUsers(e.target.value)}
      >
        <option value="all">Cualquier instrumento</option>
        <option value="Guitarra eléctrica">Guitarra eléctrica</option>
        <option value="Guitarra española">Guitarra española</option>
        <option value="Batería">Batería</option>
        <option value="Bajo">Bajo</option>
        <option value="Piano">Piano</option>
        <option value="Voz">Voz</option>
        <option value="Trompeta">Trompeta</option>
        <option value="Acordeón">Acordeón</option>
        <option value="Saxofón">Saxofón</option>
        <option value="Trombón">Trombón</option>
        <option value="Tuba">Tuba</option>
        <option value="Gaita">Gaita</option>
        <option value="Violín">Violín</option>
        <option value="Clarinete">Clarinete</option>
        <option value="Violonchelo">Violonchelo</option>
        <option value="Contrabajo">Contrabajo</option>
        <option value="Fagot">Fagot</option>
        <option value="Ukelele">Ukelele</option>
      </Form.Control>
    </Form>
  );
};

export default Filter;

import  { useState } from "react";
import { Request } from "../../../utils/requests";

export default function TodoList() {

  const [tacheInput, setTacheInput] = useState("");

  function handleTache(e){
    setTacheInput(e.target.value)
  }

  async function validate(e){
    e.preventDefault();

    const data = await Request.postAuthorization("/todos", { name: tacheInput, completed:false }, "POST");
    console.log(data);
  }

	return (
  <div>
    <form>
      <input onChange={handleTache} value={tacheInput} placeholder="Entrez une tache" />
      <button onClick={validate}>Ajouter la tache</button>
    </form>
  </div>);
}

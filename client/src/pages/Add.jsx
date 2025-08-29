import { useNavigate } from 'react-router-dom';
import styles from '../styles/Add.module.css';
import InputField from '../components/addComponents/InputField';
import DownBtn from '../components/addComponents/DownBtn';
import TextArea from '../components/addComponents/TextArea';
import { useState } from 'react';

function Add() {
  const navigate = useNavigate()

  // useStates de cada input
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [description, setDescription] = useState("")

  // voltar para homepage
  function goToHomePage(){
    navigate("/")
  }

  // aqui vai criar um produto e enviar para o backend
  const eventHandler = async () => {
    try {

      // validacoe basicas
      if (!name.match(/^[A-Za-z\s]+$/)) {
        alert("O nome deve conter apenas letras");
        return;
      }

      if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
        alert("O preço deve ser um número válido e maior que 0");
        return;
      }

      if (isNaN(parseInt(stock)) || parseInt(stock) < 0) {
        alert("O estoque deve ser um número inteiro maior ou igual a 0");
        return;
      }

      if (description.trim().length < 5) {
        alert("A descrição deve ter pelo menos 5 caracteres");
        return;
      }

      //  juntando os dados obtidos pelos useStates
      const productData = {
        name, 
        price: parseFloat(price),
        stock: parseInt(stock),
        description,
      }
      
      // esse response contem varias informacoes
      // response.ok == true se a requisicao der certo (200, 299)
      // response.status o codigo http (200, 404, 500)
      // response.json(), ler a resposta como json

      // fazendo a requisicao http e salvando na const response
      const response = await fetch("http://localhost:5000/products/", {
        method: "POST", // definindo o metodo da requisicao
        headers: { "Content-Type": "application/json" }, // especificando o tipo do dado
        body: JSON.stringify(productData), // transformando em json
      })

      // se response.ok for false, ou seja, n deu certo, vai lancar o erro
      // esse erro vai ser pego pelo catch mais tarde
      if (!response.ok) throw new Error("Erro ao enviar os dados")
      
      const result = await response.json()
      console.log("Produto criado:", result)
      navigate("/")
    } catch (error) {
      // aqui printa a mensagem de erro definida la em cima
      console.error("Erro:", error.message)
    }
  }

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerProducts}>
        <div className={styles.upCard}>
          <div className={styles.imgCard}>

          </div>
          <div className={styles.infoCard}>
            <InputField 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            <InputField 
              placeholder="Price" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              />
            <InputField 
              placeholder="Stock" 
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              />
          </div>
        </div>
        <div className={styles.downCard}>
          <TextArea 
            placeholder="Write the product description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
          <div className={styles.downBtn}>
            <DownBtn onClick={goToHomePage}>Back</DownBtn>
            <DownBtn onClick={eventHandler}>Create</DownBtn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
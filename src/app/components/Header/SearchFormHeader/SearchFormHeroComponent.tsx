"use client";
// DEPENDENCIAS
import { useState } from "react";
import styled from "styled-components";

// ICONOS
import { MdOutlineSearch, MdFilterAlt } from "react-icons/md";

// COMPONENTS
import { CustomLiComponent } from "../CustomLi/CustomLiComponent";
import SearchContentComponent from "./SearchContent/SearchContentComponet";

// 📌 Contenedor del formulario
const FormSearchComponentStyled = styled.form`
  width: 400px;
  height: 42px;
  position: relative;
  display: flex;
  align-items: center;
`;

// 📌 Input de búsqueda
const InputSearchComponentStyled = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  padding: 0px 35px 0px 35px;
  background-color: #f5f5f5;
  border: none;
  outline: none;
`;

// 📌 Botón que contiene el ícono
const ButtonSearchIconComponentStyled = styled.button`
  position: absolute;
  border: none;
  background: none;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const ButtonFilterSearchComponentStyled = styled.button`
  position: absolute;
  border: none;
  background-color: #171717;
  color: white;
  top: 50%;
  left: 85%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  gap: 5px;
  border-radius: 40px;
  height: 100%;
  width: 90px;
`;

// 📌 Estilización del ícono correctamente
const IconSearchComponentStyled = styled(MdOutlineSearch)`
  width: 20px;
  height: 20px;
  color: gray;
`;

const SearchFormHeroComponent = () => {
  const [textSearch, setTextSearch] = useState("");
  const [modelSearch, setModelSearch] = useState(false);

  const ChangeTextSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
    console.log(textSearch);
  };

  const ChangeModelSearch = () => {
    setModelSearch(!modelSearch);
  };

  return (
    <CustomLiComponent>
      <FormSearchComponentStyled action="">
        {/*MODEL */}
        {modelSearch && <SearchContentComponent />}

        <InputSearchComponentStyled
          type="text"
          placeholder="Funko mariguano..."
          onClick={ChangeModelSearch}
          onChange={ChangeTextSearch}
        />

        <ButtonSearchIconComponentStyled type="submit">
          <IconSearchComponentStyled />
        </ButtonSearchIconComponentStyled>

        <div>
          <ButtonFilterSearchComponentStyled>
            <span>Filter</span>
            <MdFilterAlt />
          </ButtonFilterSearchComponentStyled>
        </div>
      </FormSearchComponentStyled>
    </CustomLiComponent>
  );
};

export default SearchFormHeroComponent;

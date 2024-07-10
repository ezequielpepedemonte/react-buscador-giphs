import { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onAddChange = (event) => {
    setInputValue(event.target.value);
   }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //setCategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue(' ');
        
    }
  return (

    <form  onSubmit={(event) => onSubmit(event)}  >
        <input
        type='test'
        placeholder='Busque aquí sus gifs'
        onChange={onAddChange}  
        value={inputValue}
        >
    </input>
    </form>
      )
}

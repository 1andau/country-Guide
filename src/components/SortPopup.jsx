import React from 'react';

function SortPopup (){

const [visiblePopup, setVisiblePopup] = React.useState(false);
const sortRef = React.useRef();

//тут переменная visiblePopup которая открывает за скрытие и видимость 
//а второй массив setVisiblePopup это какая функция должна менять значение переменной 
//далее говорим что visiblePopup -- будет false по умслчанию, это значение перекидывается в 
//VisiblePopup
//функция setVisiblePopup будет менять значение VisiblePopup в зависимости от нужды 
const toggleVisiblePopup = () => {
setVisiblePopup(!visiblePopup);
};


const handleOutsideClick = (e) => {
    console.log(e);
}


React.useEffect(() => {
document.body.addEventListener('click', handleOutsideClick);
    //что делает useEffect? проверяет в принципе был ли
    // компонент обновлен и был ли смионтирован и долджен 
    //ли компонент удалится
    //если компонент в внедрился, оповести нас об этом 

}, []);

  return (

    <div ref={sortRef} className="sort">
    <div className="sort__label">
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C"
        />
      </svg>
      <b>Сортировка по:</b>
      <span 
      onClick ={toggleVisiblePopup}>
          Популярности
          </span>

      {/* за счет ! мы можнм делать true/false  */}
    </div>
{  visiblePopup &&  <div className="sort__popup">
{/* 
если visiblePopup тру, то эти два амперсанта скажут что правая сторона должна отразиться 
если false -- то не выполняет   
теперь попап скрывается и при наведении появляется 
*/}
        <ul>
        <li className="active">Популярности</li>
        <li>Бюджету</li>
        <li>Алфавиту</li>
        </ul>
        </div>
        }
  </div>
  )
};

export default SortPopup;
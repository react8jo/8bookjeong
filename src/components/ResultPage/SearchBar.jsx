import { useState, useEffect } from 'react';
import styled from 'styled-components';

const deselectedOptions = [
  'rustic',
  'antique',
  'vinyl',
  'vintage',
  'refurbished',
  '신품',
  '빈티지',
  '중고A급',
  '중고B급',
  '골동품'
];

export const Autocomplete = () => {
  const [hasText, setHasText] = useState(false);
  // input에 입력값이 존재하는지 확인하는 용도
  const [inputValue, setInputValue] = useState('');
  // 입력 받은 input값을 저장하는 용도
  const [options, setOptions] = useState(deselectedOptions);
  // 자동완성으로 보여줄 값들을 저장하는 용도

  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
      setOptions([]);
    } else {
      setOptions(
        deselectedOptions.filter((option) => {
          return option.includes(inputValue);
        })
      );
    }
  }, [inputValue]);
  // input을 입력할 때마다, input을 포함(includes)한 요소들만 모아 options 배열 업데이트

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setHasText(true);
  };
  // input의 onChange 이벤트 때, 입력값을 inputValue에 저장하고 hasText값 갱신

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption);
  };
  // 보여지는 자동완성 값 중 하나를 클릭하면 해당 값이 input에 할당

  const handleDeleteButtonClick = (event) => {
    setInputValue('');
  };
  // 삭제 버튼을 누르면, inputValue를 초기화

  return (
    <div className='autocomplete-wrapper'>
      <div>
        <input onChange={handleInputChange} value={inputValue}></input>
        <div className='delete-button' onClick={handleDeleteButtonClick}>
          &times;
        </div>
      </div>
      {hasText && <DropDown options={options} handleComboBox={handleDropDownClick} />}
      // 입력된 텍스트가 있을 때만 드롭다운이 보여지도록 조건 설정 // 하지 않을 시, 아무 것도 입력하지 않은 상태에서도
      드롭다운이 보여짐
    </div>
  );
};

/* 자동완성 배열(options)에 들어간 값들이 드롭다운으로 보여지는 부분 */
export const DropDown = ({ options, handleComboBox, selected }) => {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <li key={index} onClick={() => handleComboBox(option)}>
            {option}
          </li>
        );
      })}
    </div>
  );
};

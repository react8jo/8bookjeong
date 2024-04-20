import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './categorySelector.styled';

const CategorySelector = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // 햄버거 메뉴 열림 상태

  const categories = [
    { id: 0, name: '종합' },
    { id: 1, name: '소설/시' },
    { id: 170, name: '경제경영' },
    { id: 336, name: '자기계발' },
    { id: 1196, name: '여행' },
    { id: 51300, name: '만화' },

    { id: 88864, name: '예술/문화' },
    { id: 89482, name: '한국 과학소설' },
    { id: 2172, name: '기업 경영' },
    { id: 70229, name: '기획' },
    { id: 110284, name: '북유럽여행' },
    { id: 4668, name: '교양만화' },

    { id: 90456, name: '인테리어' },
    { id: 89481, name: '외국 과학소설' },
    { id: 172, name: '재테크/투자' },
    { id: 336, name: '성공' },
    { id: 63688, name: '스페인여행' },
    { id: 3747, name: '가족만화' },

    { id: 4673, name: '인문/교양' },
    { id: 50930, name: '과학소설(SF)' },
    { id: 8587, name: '화폐/금융/재정' },
    { id: 70212, name: '리더쉽' },
    { id: 63849, name: '독일여행' },
    { id: 4671, name: '실용만화' },

    { id: 2951, name: '인간관계' },
    { id: 50922, name: '독일소설' },
    { id: 261, name: '마케팅/세일즈' },
    { id: 70221, name: '시간관리' },
    { id: 50840, name: '세계일주여행' },
    { id: 4670, name: '역사만화' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (categoryId) => {
    navigate(`/books/${categoryId}`);
    setIsOpen(false); // 카테고리 선택 후 메뉴 닫기
  };

  return (
    <>
      <S.HamburgerButton onClick={toggleMenu}>&#9776;</S.HamburgerButton>
      {isOpen && (
        <S.CategoryGrid>
          {categories.map((category, index) => (
            <S.CategoryItem key={index} onClick={() => handleCategorySelect(category.id)}>
              {category.name}
            </S.CategoryItem>
          ))}
        </S.CategoryGrid>
      )}
    </>
  );
};

export default CategorySelector;

//////////////////////// 드롭다운방식 //////////////////////
//   const handleCategoryChange = (event) => {
//     const categoryId = event.target.value;
//     navigate(`/books/${categoryId}`);
//   };

//   return (
//     <select onChange={handleCategoryChange} defaultValue='0'>
//       {categories.map((category) => (
//         <option key={category.id} value={category.id}>
//           {category.name}
//         </option>
//       ))}
//     </select>
//   );
// };

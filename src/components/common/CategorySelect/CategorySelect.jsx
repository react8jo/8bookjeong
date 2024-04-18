import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './categorySelector.styled';

const CategorySelector = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // 햄버거 메뉴 열림 상태

  const categories = [
    { id: 0, name: '모든 카테고리' },
    { id: 1230, name: '가정/요리/뷰티' },
    { id: 2173, name: '경영전략/혁신' },
    { id: 170, name: '경제경영' },
    { id: 261, name: '마케팅/세일즈' },
    { id: 172, name: '재테크/투자' },
    { id: 51024, name: '물리학' },
    { id: 3949, name: '유럽/서구만화' },
    { id: 50999, name: '교육학' },
    { id: 51220, name: '정치인' },
    { id: 51300, name: '한국시론' }
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
          {categories.map((category) => (
            <S.CategoryItem key={category.id} onClick={() => handleCategorySelect(category.id)}>
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

// import React from 'react';
// import Banner from '../../components/MainPage/Banner/Banner';
// import BestsellerBook from '../../components/MainPage/BestsellerBook/BestsellerBook';
// import ChoiceBook from '../../components/MainPage/ChoiceBook/ChoiceBook';
// import NewBook from '../../components/MainPage/NewBook/NewBook';
// import * as S from './mainPage.styled';
// import { useNewBookListQuery } from '../../hooks/useBookList';
// import { Link } from 'react-router-dom'; // 라우터 링크 사용

// export default function MainPage() {
//   const { data: books, isLoading, isError } = useNewBookListQuery();

//   if (isLoading) return <S.MainPageLayout>Loading books...</S.MainPageLayout>;
//   if (isError) return <S.MainPageLayout>Error loading books.</S.MainPageLayout>;

//   return (
//     <S.MainPageLayout>
//       <Banner />
//       <div>
//         <h2>메인 페이지입니다.</h2>
//         {books?.item?.map((book) => (
//           <div key={book.isbn13}>
//             {/* 수정된 링크 경로 */}
//             <Link to={`/products/${book.isbn13}`}>
//               <img src={book.cover} alt={`Cover of ${book.title}`} />
//               <h3>{book.title}</h3>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </S.MainPageLayout>
//   );
// }

import React from 'react';
import Banner from '../../components/MainPage/Banner/Banner';
import BestsellerBook from '../../components/MainPage/BestsellerBook/BestsellerBook';
import ChoiceBook from '../../components/MainPage/ChoiceBook/ChoiceBook';
import NewBook from '../../components/MainPage/NewBook/NewBook';
import * as S from './mainPage.styled';

export default function MainPage() {
  return (
    <>
      <S.MainPageLayout>
        <Banner />
        <BestsellerBook />
        <ChoiceBook />
        <NewBook />
      </S.MainPageLayout>
    </>
  );
}

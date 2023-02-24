// import { Newscard } from 'components/NewsCard';
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
import { getByQueryNews, getNews } from "../../redux/news/newsOperations";
import {
  selectNews,
  selectSpinnerToggle,
  selectTotalPages,
} from "../../redux/news/newsSelectors";

import {
  ItemCard,
  ListCard,
  Title,
  Wrapper,
  WrapperList,
  Img,
  // NotFoundBox,
} from "./NewsPage.styled";
import { Newscard } from "../../components/NewsCard/NewsCard";

const NewsPage = () => {
  const [search, setSearch] = useSearchParams();
  const page = search.get("page");
  const query = search.get("text");

  const spinner = useSelector(selectSpinnerToggle);

  const dispatch = useDispatch();

  const newss = useSelector(selectNews);
  const totalPages = useSelector(selectTotalPages);

  const searchNews = (query) => {
    dispatch(getByQueryNews(query));
  };

  useEffect(() => {
    if (query) {
      dispatch(getByQueryNews(query));
    } else {
      dispatch(getNews(page));
    }
  }, [page, query, dispatch]);

  return (
    <Wrapper>
      <Title>News</Title>
      <SearchBar submitForm={searchNews} />
      {!newss ? (
        <div>
          <Title>Nothing found. Please, try again</Title>
        </div>
      ) : (
        <WrapperList>
          <ListCard>
            {newss?.news?.map((value) => (
              <ItemCard key={value?._id}>
                <Newscard news={value} />
              </ItemCard>
            ))}
          </ListCard>
          <Outlet />
        </WrapperList>
      )}
    </Wrapper>
  );
};

export default NewsPage;

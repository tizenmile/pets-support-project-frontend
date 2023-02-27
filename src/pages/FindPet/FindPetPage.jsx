import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getFavNotices,
  getOwnNotices,
  fetchNoticesByCategory,
} from "../../redux/notices/operation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { getStatusFilter, selectNotices } from "../../redux/notices/selector";
import { NoticeList } from "../../components/Notices/NoticesList/NoticesList";
import { Container } from "../../components/Notices/NoticesList/NoticesList.styled";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesSearch from "../../components/Notices/NoticesSearch/NoticesSearch";
import {
  ContainerMain,
  Section1,
} from "../../components/Notices/NoticesSearch/NoticesSearch-styled";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const FindPet = () => {
  const { categoryName } = useParams();
  const notices = useSelector(selectNotices);
  const category = useSelector(getStatusFilter);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   isLoggedIn && dispatch(getFavNotices());
  // }, [dispatch]);

  return (
    <>
      <ContainerMain>
        <NoticesSearch />
        <NoticesCategoriesNav />
      </ContainerMain>
      <Container>
        <NoticeList />
        <Outlet />
      </Container>
    </>
  );
};

export default FindPet;

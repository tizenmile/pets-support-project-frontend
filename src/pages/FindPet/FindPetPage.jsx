import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFavNotices } from "../../redux/notices/operation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectIsLoading } from "../../redux/notices/selector";
import { NoticeList } from "../../components/Notices/NoticesList/NoticesList";
import { Container } from "../../components/Notices/NoticesList/NoticesList.styled";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesSearch from "../../components/Notices/NoticesSearch/NoticesSearch";
import { ContainerMain } from "../../components/Notices/NoticesSearch/NoticesSearch-styled";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { NoticeAddModal } from "../../components/NoticeAddModal/NoticeAddModal";

const FindPet = () => {
  const { categoryName } = useParams();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  
  // const isLoggedIn = true
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    isLoggedIn && dispatch(getFavNotices());
    // dispatch(fetchSellNotices());
  }, [dispatch]);

  return (
    <>
      <ContainerMain>
        <NoticesSearch />
        <NoticesCategoriesNav category={categoryName} />
      </ContainerMain>
      <Container>
      <button onClick={openModal}>open modal</button>
        <NoticeList />
        {isModalOpen && <NoticeAddModal onClose={closeModal} />}
        <Outlet />
      </Container>
    </>
  );
};

export default FindPet;

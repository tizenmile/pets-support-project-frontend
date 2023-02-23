import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSellNotices, getFavNotices } from "../../redux/notices/operation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NoticeList } from "../../components/Notices/NoticesList/NoticesList";
import { Container } from "../../components/Notices/NoticesList/NoticesList.styled";
import { NoticeAddModal } from "../../components/NoticeAddModal/NoticeAddModal";

const FindPet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const isLoggedIn = true

  useEffect(() => {
    isLoggedIn && dispatch(getFavNotices());
    dispatch(fetchSellNotices());
  }, [dispatch]);

  return (
    <Container>
      <button onClick={openModal}>open modal</button>
      <NoticeList />

      {isModalOpen && <NoticeAddModal onClose={closeModal} />}
    </Container>
  );
};

export default FindPet;

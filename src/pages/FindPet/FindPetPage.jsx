import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSellNotices, getFavNotices } from "../../redux/notices/operation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NoticeList } from "../../components/Notices/NoticesList/NoticesList";
import { Container } from "../../components/Notices/NoticesList/NoticesList.styled";


const FindPet = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    isLoggedIn && dispatch(getFavNotices())
    dispatch(fetchSellNotices());
  }, [dispatch]);


  return (
    <Container>
      <NoticeList/>
    </Container>
    
  );
};

export default FindPet;

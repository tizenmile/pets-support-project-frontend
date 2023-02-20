import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSellNotices, getFavNotices } from "../../redux/notices/operation";
import { NoticeList } from "../../components/Notices/NoticesList/NoticesList";
import { Container } from "../../components/Notices/NoticesList/NoticesList.styled";


const FindPet = () => {
  const [isAuthorized, setIsAuthorized] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    isAuthorized && dispatch(getFavNotices())
    dispatch(fetchSellNotices());
  }, [dispatch]);


  return (
    <Container>
      <NoticeList/>
    </Container>
    
  );
};

export default FindPet;

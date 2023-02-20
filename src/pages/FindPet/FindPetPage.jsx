import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSellNotices, getFavNotices } from "../../redux/notices/operation";
import { NoticeList } from "../../components/Notices/NoticesList/NoticesList";


const FindPet = () => {
  const [isAuthorized, setIsAuthorized] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSellNotices());
    isAuthorized && dispatch(getFavNotices())
  }, [dispatch]);


  return (
    <NoticeList/>
  );
};

export default FindPet;

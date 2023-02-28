import { NoticeList } from "../../components/Notices/NoticesList/NoticesList";
import { Container } from "../../components/Notices/NoticesList/NoticesList.styled";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesSearch from "../../components/Notices/NoticesSearch/NoticesSearch";
import { ContainerMain } from "../../components/Notices/NoticesSearch/NoticesSearch-styled";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const FindPet = () => {
  const { categoryName } = useParams();

  return (
    <>
      <ContainerMain>
        <NoticesSearch />
        <NoticesCategoriesNav />
        <Container>
          <NoticeList />
          <Outlet />
        </Container>
      </ContainerMain>
    </>
  );
};

export default FindPet;

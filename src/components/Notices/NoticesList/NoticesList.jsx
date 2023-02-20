import { selectNotices } from '../../../redux/selector';
import { useSelector } from 'react-redux';
import { Notice } from '../NoticesItem/NoticesItem';
import { Container } from './NoticesList.styled';

export const NoticeList = () => {
  const notices = useSelector(selectNotices);
  return (
    <Container>
      {notices.map(notice => {
          return <Notice key={notice._id} item={ notice} />;
      })}
    </Container>
  );
};

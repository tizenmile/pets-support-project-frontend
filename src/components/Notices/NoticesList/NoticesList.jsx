import {
  selectNotices,
  selectFavNotices,
  getSearch,
  getStatusFilter,
} from "../../../redux/notices/selector";
import { useSelector } from "react-redux";
import { Notice } from "../NoticesItem/NoticesItem";
import { NoticesList } from "./NoticesList.styled";

export const NoticeList = () => {
  const notices = useSelector(selectNotices);
  const favoriteNotices = useSelector(selectFavNotices);
  const filter = useSelector(getStatusFilter);
  const search = useSelector(getSearch);
  const normalizedFilterSearch = search.toLowerCase();

  let filteredNotices;
  let filteredFavoriteNotices;

  if (notices !== undefined && notices.length > 0) {
    filteredNotices = notices.filter((notice) =>
      notice.title.toLowerCase().includes(normalizedFilterSearch)
    );
  }
  if (favoriteNotices !== undefined && favoriteNotices.length > 0) {
    filteredFavoriteNotices = favoriteNotices.filter((notice) =>
      notice.title.toLowerCase().includes(normalizedFilterSearch)
    );
  }
  return (
    <>
      {filter !== "fav-notice" ? (
        <>
          {filteredNotices !== undefined && filteredNotices.length >= 1 && (
            <NoticesList>
              {filteredNotices.map((notice) => {
                return <Notice key={notice._id} item={notice} />;
              })}
            </NoticesList>
          )}
        </>
      ) : (
        <>
          <>
            {filteredFavoriteNotices !== undefined &&
              filteredFavoriteNotices.length >= 1 && (
                <NoticesList>
                  {filteredFavoriteNotices.map((notice) => {
                    return <Notice key={notice._id} item={notice} />;
                  })}
                </NoticesList>
              )}
          </>
        </>
      )}
    </>
  );
};

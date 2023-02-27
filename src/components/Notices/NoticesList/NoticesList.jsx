import {
  selectNotices,
  selectFavNotices,
  getSearch,
  getStatusFilter,
} from "../../../redux/notices/selector";
import { useSelector } from "react-redux";
import { Notice } from "../NoticesItem/NoticesItem";
import { NoticesList } from "./NoticesList.styled";
import { isLoading } from "../../../redux/notices/selector";
import AnimationLoader from "../../AnimationLoader";

export const NoticeList = () => {
  const notices = useSelector(selectNotices);
  const favoriteNotices = useSelector(selectFavNotices);
  const filter = useSelector(getStatusFilter);
  const search = useSelector(getSearch);
  const normalizedFilterSearch = search.toLowerCase();
  const loading = useSelector(isLoading);

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
      {loading ? (
        <AnimationLoader />
      ) : filter !== "fav-notice" ? (
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
          {filteredFavoriteNotices !== undefined &&
            filteredFavoriteNotices.length >= 1 ? (
              <NoticesList>
                {filteredFavoriteNotices.map((notice) => {
                  return <Notice key={notice._id} item={notice} />;
                })}
              </NoticesList>
            ) : <h1 style={{margin: "0 auto", fontFamily: "Manrope", color: "rgba(47,48,64,1)"}}>You do not have any favorite ads</h1>}
        </>
      )}
    </>
  );
};

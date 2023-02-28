import InfiniteScroll from 'react-infinite-scroller';
import {
  selectNotices,
  selectFavNotices,
  getSearch,
  getStatusFilter,
  selectIsLoading,
  selectPage,
  selectTotal
} from "../../../redux/notices/selector";
import { useSelector, useDispatch } from "react-redux";
import { getFavNotices, fetchNoticesByCategory } from '../../../redux/notices/operation';
import { Notice } from "../NoticesItem/NoticesItem";
import { NoticesList } from "./NoticesList.styled";
import AnimationLoader from "../../AnimationLoader";

export const NoticeList = () => {
  const notices = useSelector(selectNotices);
  const page = useSelector(selectPage)
  const isLoading = useSelector(selectIsLoading);
  const total = useSelector(selectTotal)
  const favoriteNotices = useSelector(selectFavNotices);
  const filter = useSelector(getStatusFilter);
  const search = useSelector(getSearch);
  const normalizedFilterSearch = search.toLowerCase();
  const dispatch = useDispatch()

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

  return ( isLoading && page === 0 ? <AnimationLoader/> :
   <>
      {filter !== "fav-notice" ?
        (
        <>
            {filteredNotices !== undefined && filteredNotices.length >= 1 ? (
              <InfiniteScroll
                pageStart={page + 1}
                loadMore={() => !isLoading && dispatch(fetchNoticesByCategory({page, categoryName: filter}))}
                hasMore={filteredNotices.length !== total ? true : false}
                loader={<AnimationLoader key={page } />}
              >
                <NoticesList>
                  {filteredNotices.map((notice) => {
                    return <Notice key={notice._id} item={notice} />;
                  })}
                </NoticesList>
              </InfiniteScroll>
          ) : <h1 style={{margin: "0 auto", fontFamily: "Manrope", color: "rgba(47,48,64,1)"}}>You do not have any own ads</h1>}
        </>
      ) : (
        <>
          {filteredFavoriteNotices !== undefined &&
              filteredFavoriteNotices.length >= 1 ? (
          
              <InfiniteScroll
                pageStart={page + 1}
                loadMore={() => !isLoading && dispatch(getFavNotices(page))}
                hasMore={filteredFavoriteNotices.length !== total ? true : false}
                loader={<AnimationLoader key={page } />}
              >
                <NoticesList>
                  {filteredFavoriteNotices.map((notice) => {
                  return <Notice key={notice._id} item={notice} />;
                })}
                </NoticesList>
              </InfiniteScroll>)
            : <h1 style={{margin: "0 auto", fontFamily: "Manrope", color: "rgba(47,48,64,1)"}}>You do not have any favorite ads</h1>
            }
        </>
      )} 
    </>
  );
};

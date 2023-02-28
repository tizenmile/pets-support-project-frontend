import {
  Wrapper,
  List,
  Item,
  NoticesCategoriesNavBox,
  Section,
} from "./NoticesCategoriesNav-styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchNoticesByCategory,
  getFavNotices,
  getOwnNotices,
} from "../../../redux/notices/operation";
import { statusFilters } from "../../../redux/constans";
import { getStatusFilter } from "../../../redux/notices/selector";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { setStatusFilter } from "../../../redux/notices/filterSlice";
import { setPage } from "../../../redux/notices/noticesSlice";
import { ButtonEl } from "../ButtonChangeCategory/Button";
import { ButtonAddNotice } from "../ButtonAddNotice/ButtonAddNotice";


export default function CategoriesNav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  useEffect(() => {
    dispatch(setStatusFilter("sell"));
    dispatch(fetchNoticesByCategory({ page: 0, categoryName: "sell" }));
    // dispatch(getFavNotices(0))
    dispatch(setPage(0))
    navigate(`/FindPet/sell`, { replace: true });
  }, [dispatch]);

  const handleFilterChange = (filterStatus) => {
    dispatch(setStatusFilter(filterStatus));
    dispatch(fetchNoticesByCategory({ page: 0, categoryName: filterStatus }));
    dispatch(setPage(0));
    navigate(`/FindPet/${filterStatus}`, { replace: true });
  };

  const filterMyAds = (filterStatus) => {
    dispatch(setStatusFilter(filterStatus));
    dispatch(getOwnNotices(0));
    dispatch(setPage(0));
    navigate(`/FindPet/${filterStatus}`, { replace: true });
  };

  const filterFavorite = (filterStatus) => {
    dispatch(setStatusFilter(filterStatus));
    dispatch(getFavNotices(0));
    dispatch(setPage(0));
    navigate(`/FindPet/${filterStatus}`, { replace: true });
  };
  return (
    <Section>
      <NoticesCategoriesNavBox>
        <Wrapper>
          <List>
            <Item>
              <ButtonEl
                selected={filter === statusFilters.lostFound}
                onClick={() => handleFilterChange(statusFilters.lostFound)}
              >
                lost/found
              </ButtonEl>
            </Item>
            <Item>
              <ButtonEl
                selected={filter === statusFilters.free}
                onClick={() => handleFilterChange(statusFilters.free)}
              >
                in good hands
              </ButtonEl>
            </Item>
            <Item>
              <ButtonEl
                selected={filter === statusFilters.sell}
                onClick={() => handleFilterChange(statusFilters.sell)}
              >
                sell
              </ButtonEl>
            </Item>

            {isLoggedIn && (
              <>
                <Item>
                  <ButtonEl
                    selected={filter === statusFilters.favorite}
                    onClick={() => filterFavorite(statusFilters.favorite)}
                  >
                    favorite ads
                  </ButtonEl>
                </Item>
                <Item>
                  <ButtonEl
                    selected={filter === statusFilters.my}
                    onClick={() => filterMyAds(statusFilters.my)}
                  >
                    my ads
                  </ButtonEl>
                </Item>
              </>
            )}
          </List>
        </Wrapper>
        <ButtonAddNotice />
      </NoticesCategoriesNavBox>
    </Section>
  );
}

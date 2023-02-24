import {
  Wrapper,
  List,
  Item,
  ButtonAddNotice,
  NoticesCategoriesNavBox,
} from "./NoticesCategoriesNav-styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  fetchNoticesByCategory,
  getFavNotices,
  getOwnNotices,
} from "../../../redux/notices/operation";
import { statusFilters } from "../../../redux/constans";
import {
  getStatusFilter,
  selectFavNotices,
} from "../../../redux/notices/selector";
import { setStatusFilter } from "../../../redux/notices/filterSlice";
import { ButtonEl } from "../Button/Button";
// import { selectIsLoggedIn } from "../../redux/notices/selector";

export default function CategoriesNav({ category }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  useEffect(() => {
    dispatch(setStatusFilter("sell"));
    dispatch(fetchNoticesByCategory("sell"));
    navigate(`/FindPet/sell`, { replace: true });
  }, [dispatch]);

  const handleFilterChange = (filterStatus) => {
    dispatch(setStatusFilter(filterStatus));
    dispatch(fetchNoticesByCategory(filterStatus));
    navigate(`/FindPet/${filterStatus}`, { replace: true });
  };

  const AAA = (filterStatus) => {
    dispatch(setStatusFilter(filterStatus));
    dispatch(getOwnNotices());
    navigate(`/FindPet/${filterStatus}`, { replace: true });
    console.log("dispatch getOwnNotices");
  };

  const BBB = (filterStatus) => {
    dispatch(setStatusFilter(filterStatus));
    dispatch(getFavNotices());
    navigate(`/FindPet/${filterStatus}`, { replace: true });
  };
  return (
    <section>
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

            {true && (
              <>
                <Item>
                  <ButtonEl
                    selected={filter === statusFilters.favorite}
                    onClick={() => BBB(statusFilters.favorite)}
                  >
                    favorite ads
                  </ButtonEl>
                </Item>
                <Item>
                  <ButtonEl
                    selected={filter === statusFilters.my}
                    onClick={() => AAA(statusFilters.my)}
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
    </section>
  );
}

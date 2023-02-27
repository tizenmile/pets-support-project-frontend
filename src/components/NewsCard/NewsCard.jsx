import {
    Checkbox,
    Content,
    Data,
    Div,
    Footer,
    Label,
    Link,
    P,
    Span,
    SpanDots,
    Strip,
    Title,
    Wrapper,
} from './Newscard.styled';
import { v4 as uuidv4 } from 'uuid';

const NewsCard = ({ news }) => {
    const { title, url, description, date } = news;

    const id = uuidv4();

    const newDescriptionStart = description.slice(0, 195);
    const newDescriptionEnd = description.slice(195);
    const newdate = date?.split("-").reverse().join("/");
    const name = title?.length < 45 ? title : title?.slice(0, 45) + "...";


    return (

        <Wrapper>
                <div>
                    <Strip />
                <Title>
                    {name}
                </Title>
                </div>
                <Content>
                    <Div>
                        <P>
                            <Checkbox type="checkbox" id={id} />
                            {newDescriptionStart || 'no description'}
                            <SpanDots> ...</SpanDots>
                            <Span>{newDescriptionEnd}</Span>
                            <Label htmlFor={id} />
                        </P>
                    </Div>
                </Content>
           
            <Footer>
                <Data>{newdate}</Data>
                <Link href={url} target="_blank">
                    Read more
                </Link>
            </Footer>
        </Wrapper>

    );
};

export default NewsCard;
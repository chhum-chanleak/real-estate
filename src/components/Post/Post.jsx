import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { cardData } from "../../data/cardData";
//  components
import { Wrapper } from "./Post-style";

const Post = () => {
  const cards = cardData;

  return (
    <Wrapper>
      {cards.map((card) => (
        <Card style={{ backgroundColor: "lightgray" }}>
          <CardActionArea>
            <CardMedia
              className="card-media"
              image={card.image}
              title="My Post"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {card.title}
              </Typography>
              <Typography variant="body">{card.content}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Post;

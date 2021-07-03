import React from "react";

import { Card } from "antd";

const PostCard = (props) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt={props.title} src={props.feature_image} />}
      actions={[]}
    >
      <Card.Meta title={props.title} description={props.custom_excerpt} />
    </Card>
  );
};

export default React.memo(PostCard);

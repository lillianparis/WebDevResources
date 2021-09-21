import React from "react";
import Row from "react-materialize";
import Col from "react-materialize";
import Card from "react-materialize";
import Icon from "react-materialize";
import CardTitle from "react-materialize";


<Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Card Title"
    >
      <p>
        <a href="#">
          This is a link
        </a>
      </p>
    </Card>
  </Col>
</Row>
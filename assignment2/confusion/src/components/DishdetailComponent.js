import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
   return (
      <div className="col-12 col-md-5 m-1">
         <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
               <CardTitle>{dish.name}</CardTitle>
               <CardText>{dish.description}</CardText>
            </CardBody>
         </Card>
      </div>
   );
}

function RenderComments({comments}) {
   if (comments != null) {
      return (
         <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
            {comments.map((comment) => {
               return (
                  <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>                                     
                  </li>
               );
            })}
            </ul>
         </div>
      );
   }
   else {
      return (
         <div></div>
      );
   }
}

const Dishdetail = (props) => {
   if (props.dish != null) {
      return (
         <div className="container">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                  <h3>{props.dish.name}</h3>
                  <hr />
               </div>
            </div>
            <div className="row">
               <RenderDish dish={props.dish} />
               <RenderComments comments={props.comments} />
            </div>
         </div>
      );
   }
   else {
      return (
         <div></div> 
      );
   }
}

export default Dishdetail;
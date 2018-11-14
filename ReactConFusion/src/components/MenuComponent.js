import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody,
   CardTitle } from 'reactstrap';

class Menu extends Component {
   constructor(props) {
      super(props);

      this.state = {
         selectedDish: null
      }
   }

   onDishSelect(dish) {
      this.setState({ selectedDish: dish});
   }

   renderDish(dish) {
      if (dish != null)
         return(
            <Media>
               <Media left middle>
                  <Media object src={dish.image} alt={dish.name} />
               </Media>
               <Media body className="ml-5">
                  <Media heading>{dish.name}</Media>
                  <p>{dish.description}</p>
               </Media>
            </Media>     
         );
      else
         return(
            <div></div>
         );
   }

    render() {
      const menu = this.props.dishes.map((dish) => {
         return (
            <div className="col-12 col-md-3 ">
               <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
               <CardImg src={dish.image} alt={dish.name} />           
               <CardBody className="text-center">
                  <CardTitle>{dish.name}</CardTitle>
               </CardBody>
               </Card>              
            </div>
         );
      });

      return (
         <div className="container mt-3">
            <div className="row justify-content-center">
               {menu}
            </div>
            <div className="row">
            <div  className="col-12 col-md-7 mx-auto mt-5">
               {this.renderDish(this.state.selectedDish)}
            </div>
            </div>
         </div>
      );
    }
}

export default Menu;
import React, { useEffect, useState} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import { listProductCategories } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link, useParams } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider'


export default function HomeScreen() {
  const dispatch = useDispatch();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const { pageNumber = 1 } = useParams();
  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;
  //category
  
 

  //category end
  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch,pageNumber]);
  return (
    <div> 
      {/*<h2>Top Sellers</h2>*/}
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
        ) : (
          
            <>
            <div className="column">
              
                     

                <div className="column centre">
               
                  <ImageSlider />
                        {/*<MultipleSlides/>*/}
                    {/*{sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}*/}
                    {/*<Carousel showArrows autoPlay showThumbs={false}>
                      {sellers.map((seller) => (
                        <div key={seller._id}>
                          <Link to={`/seller/${seller._id}`}>
                            <img src={seller.seller.logo} alt={seller.seller.name} />
                            <p className="legend">{seller.seller.name}</p>
                          </Link>
                        </div>
                      ))}
                    </Carousel>*/}
                </div>
            </div>
        </>
      )}
          
      <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
            </>
      )}
          {/*<div className="row centre pagination">
             {[...Array(pages).keys()].map((x)=>(
                <Link
                  className={x + 1 === page ? 'active' : ''}
                  key={x + 1}
                  to={`/pageNumber${x + 1}`}>
                  {x +1}
                  </Link>
               ))}
          </div>*/}
      
    </div>
  );
}

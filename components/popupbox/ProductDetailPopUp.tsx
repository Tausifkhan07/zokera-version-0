import React from 'react'
import Tabs from '../comman/Tabs';
import TableProdKey from '../comman/TableProdKey';
import KeyFeatureProd from '../comman/KeyFeatureProd';
import ProdDetailsPara from '../comman/ProdDetailsPara';

interface productPopUpProps {
    setProductDetailPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProductDetailPopUp: React.FC<productPopUpProps> = ({setProductDetailPopUp}) => {

    const tabsData = [
        {
          label: ' Key Features ',
          component: <KeyFeatureProd />,
        },
        {
          label: ' Specifications ',
          component: <TableProdKey />,
        },
        {
          label: ' Product Details ',
          component: <ProdDetailsPara />,
        },
        {
          label: ' Reviews ',
          component: <TableProdKey />,
        },
      ];


  return (
    <>
    <style jsx>{`
    .product-detail-popup-box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.7);
        z-index: 9999;
    }
    .product-detail-popup-box .popup-box {
        max-width: 750px;
        height: 400px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 99;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 8px #333;
      }
    .product-detail-popup-box .inner {
        width: 100%;
        height: 100%;
        position: relative;
        // overflow-y: scroll;
    }
    .product-detail-popup-box .inner .close {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 9;
        width: 25px;
        height: 25px;
        display: block;
        line-height: 25px;
        text-align: center;
        background: #fff;
        color: #333;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0,0,0,.2);
        border-radius: 3px;
      }
      .inner .title {
        background: #eee;
        padding: 12px 15px;
        position: relative;
        box-shadow: 0 0px 2px #333;
      }
      @media only screen and (max-width: 767px) {
        .product-detail-popup-box .popup-box {
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            transform: none;
            border-radius: 0;
            height: 100%;
        }
      }
    `}</style>
    <section className="product-detail-popup-box" onClick={()=>setProductDetailPopUp(false)}>
        <div className="popup-box" onClick={(event) => event.stopPropagation()}>
            <div className="inner">
                <div className="title">
                    <h5>About This Product</h5>
                 <span onClick={()=>setProductDetailPopUp(false)} className="close">X</span>
                </div>
                <div className="tabs-content">
                    <Tabs tabs={tabsData} />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetailPopUp
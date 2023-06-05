import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

const ProdImageGrid = () => {
  return (
    <>
        <div className="_girImg">
            <div className="title-box">
                <h5>BEST FOR THIS SUMMER</h5>
                <div className="view-all-btn">View All</div>
            </div>
            <div className="gird-inn">
                <div className="gir-box">
                    <div className="img-box">
                        <Link href="#">
                            <Image src="/home/acs-img.avif" alt="" width={510} height={518} />
                        </Link>
                    </div>
                    <div className="img-box">
                        <Link href="#">
                            <Image src="/home/acs-img.avif" alt="" width={510} height={518} />
                        </Link>
                    </div>
                    <div className="img-box">
                        <Link href="#">
                            <Image src="/home/acs-img.avif" alt="" width={510} height={518} />
                        </Link>
                    </div>
                    <div className="img-box">
                        <Link href="#">
                            <Image src="/home/acs-img.avif" alt="" width={510} height={518} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
        ._girImg {
            margin: 15px 0;
            background: #fff;
            padding: 15px 0;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0,0,0,.18),0 1px 1px 0 rgba(0,0,0,.17);
          }
        .gir-box {
            display: flex;
            flex-wrap: wrap;
          }
          .img-box {
            flex-basis: 50%;
            padding: 4px 10px;
          }
          .title-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 8px;
            margin-bottom: 10px;
          }
          .view-all-btn {
            display: inline-block;
            line-height: 15px;
            background-color: #ff662a;
            color: #fff;
            border-radius: 3px;
            font-size: 12px;
            padding: 8px 14px;
            font-weight: 500;
            }
        `}</style>
    </>
  )
}

export default ProdImageGrid;
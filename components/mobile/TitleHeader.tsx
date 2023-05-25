import React from 'react';
import { useRouter } from 'next/router';
import { CiSearch } from "react-icons/ci";
import { HiOutlineArrowLeft, HiOutlineUserCircle } from "react-icons/hi";

interface PropsTitleHeader {
    TitleProps: string;
}
const TitleHeader: React.FC<PropsTitleHeader> = ({ TitleProps }) => {
    const router = useRouter();
    return (
        <>
            <style jsx>{`
                .header {
                    width: 100%;
                    height: 50px;
                    box-shadow: 0 1px 3px rgba(0,0,0,.1);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 99;
                    background-color: #fff;
                    user-select: none;
                }
                .container-h {
                    max-width: 1248px;
                    width: 100%;
                    height: 100%;
                    margin: 0 auto;
                }
                .header-inner {
                    display: flex;
                    display: flex;
                    justify-content: space-between;
                    padding: 3px 12px;
                    align-items: center;
                }
                .title-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px 5px 2px 2px;
                }
                .title-head {
                    margin-left: 12px;
                  }
                .m-user-sear-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2px 5px 2px 5px;
                }
                .m-search-ico, .m-user-ico {
                    display: inline-block;
                    font-size: 28px;
                    width: 35px;
                    height: 33px;
                    color: #00518f;
                    line-height: 44px;
                    text-align: center;
                    cursor: pointer;
                }
                .m-search-ico {
                    margin-right: 28px;
                    color: #00518f;
                }
                .go-back-arrow {
                    font-size: 24px;
                    cursor: pointer;
                    display: inline-block;
                    width: 33px;
                    height: 33px;
                    color: #00518f;
                    text-align: center;
                    line-height: 44px;
                }
                @media only screen and (min-width: 768px) {
                    .header {
                      display: none;
                    }
                  }
            `}</style>
            <header className='header'>
                <div className="container-h">
                    <div className='header-inner'>
                        <div className="title-inner">
                            <span className="go-back-arrow" onClick={() => router.back()}>
                                <HiOutlineArrowLeft />
                            </span>
                            <span className="title-head">{(TitleProps.length >= 15) ? `${TitleProps.slice(0, 15)}...` : TitleProps}</span>
                        </div>
                        <div className='m-user-sear-inner'>
                            <span className='m-search-ico'>
                                <CiSearch />
                            </span>
                            <span className='m-user-ico'>
                                <HiOutlineUserCircle style={{ strokeWidth: '1px' }} />
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default TitleHeader;

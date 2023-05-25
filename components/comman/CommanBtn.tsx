import Link from 'next/link';
import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

interface ButtonProps {
    LinkTitle: string;
    LinkUrl: string;
}

const CommanBtn: React.FC<ButtonProps> = ({ LinkTitle, LinkUrl }) => {
    return (
        <>
        <style jsx>{`
        .see-detail {
            font-size: 13px;
            font-weight: 500;
            color: #ff662a;
            display: flex;
            justify-content: center;
            align-items: center;
            }
        .see-detail:hover .dbl-arrow {
            transform: translateX(5px);
            }
        .see-detail .dbl-arrow {
            font-size: 20px;
            margin-top: 8px;
            transition: all 500ms;
            }
        `}</style>
        <div className="see-detail">
            <Link href={LinkUrl}>{LinkTitle}</Link>
            <span className="dbl-arrow">
            <MdOutlineKeyboardDoubleArrowRight />
            </span>
        </div>
        </>
      )
}

export default CommanBtn;
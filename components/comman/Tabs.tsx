import { useState } from 'react';


interface Tab {
    label: string;
    component: React.ReactNode;
}
interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
        <style jsx>{`
        .tab-btn-cont {
            display: flex;
            justify-content: space-around;
            align-items: center;
            overflow-x: scroll;
            background: #fff;
            padding-bottom: 8px;
            padding-top: 8px;
        }
        .tab-btn-cont .tab-btn {
            font-size: 14px;
            padding: 5px 12px 6px;
            font-weight: 500;
            border-radius: 30px;
            border: 1px solid rgba(0,0,0,.5);
            background: #fff;
          }
        .tab-btn-cont .tab-btn.active {
            background: #00518f;
            color: #fff;
            border: 1px solid #00518f;
        }
        ._cont-inn {
            width: 100%;
            height: 100%;
        }
        ._cont-inn .cont-box {
            width: 100%;
            height: 290px;
            overflow-y: scroll;
        }
        `}</style>
            <div>
                <div className='tab-btn-cont'>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={activeTab === index ? 'tab-btn active' : 'tab-btn'}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className='_cont-inn'>
                    <div className="cont-box">{tabs[activeTab].component}</div>
                </div>
            </div>
        </>
    );
};

export default Tabs;

import { ScrollView, View } from '@tarojs/components';
import React, { useRef, useState } from 'react';
import { AddressNew, BigImageTruck, InitPage, SpecialLineWebview, TopMarketingImage } from './comp';
import styles from './quality-tools.scss';
const TITLE_SWITCH_VALUE = {
    specailLine: 1,
    qualityTools: 2,
};
const navHeight = 44;
const tabHeight = 50;
function QualityTools() {
    const scrollViewRef = useRef(null);
    const [tabIndex, setTabIndex] = useState(1);
    const [pageLoading, setPageLoading] = useState(true);
    const [bottomAd, setBottomAd] = useState({
        resourceId: '',
    });
    const [animation, setAnimationNow] = useState(0);
    const handleSelectCargoTypeTrigger = second => {
        console.log(`🚀 ~ QualityTools ~ second:`, second);
    };
    const handleScroll = second => {
        console.log(`🚀 ~ QualityTools ~ second:`, second);
    };
    const loadInitData = second => {
        console.log(`🚀 ~ QualityTools ~ second:`, second);
    };
    const handleTrigger = second => {
        console.log(`🚀 ~ QualityTools ~ second:`, second);
    };
    return (React.createElement("div", null, tabIndex === TITLE_SWITCH_VALUE.specailLine ? (React.createElement(SpecialLineWebview, null)) : pageLoading ? (React.createElement(InitPage, null)) : (React.createElement(ScrollView, { className: styles.pageCont, scrollWithAnimation: true,
        // @ts-ignore
        alwaysBounceVertical: false, style: { height: `calc(100vh - ${navHeight + tabHeight}px)` }, ref: scrollViewRef },
        React.createElement(TopMarketingImage, null),
        React.createElement(BigImageTruck, { handleSelectCargoTypeTrigger: handleSelectCargoTypeTrigger, animation: animation }),
        React.createElement(AddressNew, { loadInitData: loadInitData, handleTrigger: handleTrigger, setAnimationNow: setAnimationNow, handleScroll: handleScroll }),
        React.createElement(View, { className: styles.bannerBox }, !!(bottomAd === null || bottomAd === void 0 ? void 0 : bottomAd.resourceId) && (React.createElement(View, { className: styles.marketResource })))))));
}
export default QualityTools;

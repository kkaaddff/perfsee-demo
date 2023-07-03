import { ScrollView, View } from '@tarojs/components'
import React, { useRef, useState } from 'react'
import { AddressNew, BigImageTruck, InitPage, SpecialLineWebview, TopMarketingImage } from './comp'
import styles from './quality-tools.scss'

const TITLE_SWITCH_VALUE = {
  specailLine: 1,
  qualityTools: 2,
}

const navHeight = 44
const tabHeight = 50

function QualityTools() {
  const scrollViewRef = useRef(null)
  const [tabIndex, setTabIndex] = useState(1)
  const [pageLoading, setPageLoading] = useState(true)
  const [bottomAd, setBottomAd] = useState({
    resourceId: '',
  })
  const [animation, setAnimationNow] = useState(0)

  const handleSelectCargoTypeTrigger = second => {
    console.log(`🚀 ~ QualityTools ~ second:`, second)
  }

  const handleScroll = second => {
    console.log(`🚀 ~ QualityTools ~ second:`, second)
  }

  const loadInitData = second => {
    console.log(`🚀 ~ QualityTools ~ second:`, second)
  }

  const handleTrigger = second => {
    console.log(`🚀 ~ QualityTools ~ second:`, second)
  }

  if (tabIndex === TITLE_SWITCH_VALUE.specailLine) {
    return <SpecialLineWebview />
  }

  if (pageLoading) {
    return <InitPage />
  }

  return (
    <ScrollView
      className={styles.pageCont}
      scrollWithAnimation
      // @ts-ignore
      alwaysBounceVertical={false}
      style={{ height: `calc(100vh - ${navHeight + tabHeight}px)` }}
      ref={scrollViewRef}
    >
      {/* 顶部营销广告位组件 */}
      <TopMarketingImage />

      {/* 车型切换swipper组件 */}
      <BigImageTruck handleSelectCargoTypeTrigger={handleSelectCargoTypeTrigger} animation={animation} />

      {/* 装卸货地址 */}
      <AddressNew loadInitData={loadInitData} handleTrigger={handleTrigger} setAnimationNow={setAnimationNow} handleScroll={handleScroll} />

      {/* 广告位 */}
      <View className={styles.bannerBox}>
        {!!bottomAd?.resourceId && (
          <View className={styles.marketResource}>
            {/* <MarketingResource
          resourceId={bottomAd?.resourceId}
          env={process.env.NODE_ENV}
          httpClient={(url, data) => {
            return http.post(url, data.data, { ignoreError: true })
          }}></MarketingResource> */}
          </View>
        )}
      </View>
    </ScrollView>
  )
}

export default QualityTools

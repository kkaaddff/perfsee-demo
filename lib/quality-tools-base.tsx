import React from 'react'
//@ts-ignore
import { InitPage, SpecialLineWebview, TopMarketingImage } from './comp'

const TITLE_SWITCH_VALUE = {
  specailLine: 1,
  qualityTools: 2,
}

const tabIndex = 44

let pageLoading = false

function QualityTools() {
  // return <div>asa</div>
  return <div>{tabIndex === TITLE_SWITCH_VALUE.specailLine ? <SpecialLineWebview /> /* : pageLoading ? <InitPage /> */ : <TopMarketingImage />}</div>
}

export default QualityTools

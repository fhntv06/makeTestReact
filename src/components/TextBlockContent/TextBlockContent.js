import React from 'react'
import PropTypes from 'prop-types'
import DescriptionDevice from './DescriptionDevice/DescriptionDevice'

import HeadContent from './HeadContent/HeadContent'

export default function TextBlockContent (props) {
  let index

  if (props.type) {
    props.arData.forEach((data, i) => {
      if (props.type === data.type) {
        index = i
      }
    })
  } else {
    // something ...
  }

  return (
    <>
      { props.arData.type === 'word' &&
      <HeadContent data={props.arData[index]}/>
      }
      { props.arData.type === 'grid' &&
        <>
          <HeadContent />
          <DescriptionDevice />
        </>
      }
      { props.arData.type === 'typo' &&
        <>
          <HeadContent />
          {/* <DescriptionTypo /> */}
        </>
      }
      { props.arData.type === 'ui' &&
        <>
          <HeadContent />
          {/* <DescriptionUi /> */}
        </>
      }
    </>
  )
}

TextBlockContent.propTypes = {
  header: PropTypes.string,
  paragraphDefault: PropTypes.string,
  type: PropTypes.string,
  arData: PropTypes.array
}

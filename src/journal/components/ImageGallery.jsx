import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import PropTypes from 'prop-types'

function StandardImageList({ images = [] }) {
  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            alt='imagen de la nota'
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

StandardImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
}
export default StandardImageList

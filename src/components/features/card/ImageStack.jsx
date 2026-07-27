// src/components/features/card/ImageStack.jsx

function ImageStack({name, images}) {
  const imageArray = Object.entries(images)
  const minImageWidth = [40, 8, 4, 1]

  return (
    <div className="flex justify-start h-38 w-full mb-2">
      {Object.entries(images)
        .map(([key, value], index) => (
        // Control amount of each image shown, and
        // Grey overlay/background
        <div
          key={`${name}-${key}`}
          style={{
            flex: `0 ${index} content`,
            minWidth: `${minImageWidth[index]}%`,
          }}
          className="drop-shadow-lg"
        >
          <img
            loading="lazy"
            height="167"
            width="250"
            src={value}
            alt={`${name} ${key} screenshot`}
            className="h-full object-cover object-right"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageStack

// src/components/features/card/ImageStack.jsx

function ImageStack({name, images}) {
  const imageArray = Object.entries(images)

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
          }}
          className="drop-shadow-lg min-w-4"
        >
          <img
            loading="lazy"
            height="167"
            width="250"
            src={value}
            alt={`${name} ${key} screenshot`}
            className="h-full object-cover object-top-right"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageStack

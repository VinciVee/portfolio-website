//

function ImageStack({name, images}) {
  const imageArray = Object.entries(images)
  const minImageWidth = [40, 30, 20, 10]
  // const imageBasis = ['0 0 0','0 1 0','0 2 0','0 3 0']
  const imageBasis = ['0 0 14.2rem','0 1 auto','0 2 auto','0 3 auto','0 4 auto']

  return (
    <div className="flex justify-start h-38 w-full mb-1">
      {Object.entries(images)
        .map(([key, value], index) => (
        // Control amount of each image shown, and
        // Grey overlay/background
        // w-[19.9rem]
        <div
          key={`${name}-${key}`}
          style={{
            flex: imageBasis[index],
            minWidth: `${minImageWidth[index]}%`,
          }}
          className="drop-shadow-lg min-w-35"
        >
          <img
            src={value}
            alt={`${name} ${key} screenshot`}
            className="h-full aspect-3/2 object-cover object-right"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageStack

// src/components/features/card/ImageStack.jsx

function ImageStack({name, images}) {
  const imageArray = Object.entries(images)
  const opacityStyles = ['opacity-100', 'opacity-80', 'opacity-60', 'opacity-40']

  return (
    <div className="group flex justify-start h-38 overflow-visible perspective-distant perspective-origin-center">
      {Object.entries(images)
        .map(([key, value], index) => (
          // Control amount of each image shown, and
          // Grey background
          <div
            key={`${name}-${key}`}
            style={{
              flex: `0 ${index} content`,
              zIndex: imageArray.length - index,
              minWidth: `${16 / index}%`
            }}
            className="drop-shadow-[3px_10px_8px_rgba(0,0,0,0.25)] min-w-2 bg-gray-600 origin-left rotate-y-0 group-hover:-rotate-y-6 duration-400 ease-in-out"
          >
            <img
              src={value}
              alt={`${name} ${key} screenshot`}
              loading="lazy"
              height="152"
              width="228"
              className={`h-full object-cover object-top-right ${opacityStyles[index] || 'opacity-20'}`}
            />
          </div>
      ))}
    </div>
  )
}

export default ImageStack

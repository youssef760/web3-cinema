import React from 'react'
import { MovieStruct } from '@/utils/type.dt'
import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'

const Details: React.FC<{ movie: MovieStruct }> = ({ movie }) => {
  return (
    <div className="flex flex-col w-full p-4 space-y-4">
      <div className="flex flex-col space-y-4 align-center text-center w-full">
        <div className="flex flex-col space-y-6">
          <h4 className="font-black text-2xl capitalize">{movie.name}</h4>
          <p className="text-gray-700 my-5 w-full sm:w-3/6 text-center mx-auto font-light">
            {movie.description}
          </p>

          <div className="mx-auto w-full sm:w-1/2">
            {movie.videoUrl.includes('youtube') ? (
              <Plyr
                source={{
                  type: 'video',
                  sources: [{ src: movie.videoUrl, provider: 'youtube' }],
                }}
              />
            ) : (
              <Plyr
                source={{
                  type: 'video',
                  sources: [{ src: movie.videoUrl, provider: 'html5' }],
                }}
              />
            )}
          </div>

          <p className="flex flex-col text-gray-700 text-sm space-y-1 mt-2 max-h-44">
            <span>
              <strong>Genre:</strong> Action
            </span>
            <span>
              <strong>Cast:</strong>
              {movie.casts}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Details
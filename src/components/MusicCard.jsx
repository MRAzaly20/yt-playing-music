import React from 'react';

const MusicCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full" src={data.thumbnail} alt={data.title} />
      <div className="px-6 py-4">
        <div className="text-gray-700 dark:text-white font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700  dark:text-white text-base">{data.channel}</p>
        <p className="text-gray-700 dark:text-white text-base">Views: {data.views}</p>
        <p className="text-gray-700 dark:text-white text-base">Duration: {data.duration}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Watch Now
        </a>
        <a
          href={data.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2"
        >
          Visit Channel
        </a>
      </div>
    </div>
  );
};

export default MusicCard;

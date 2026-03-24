import { Bookmark, ArrowDown, PlusIcon, ClockFading } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    const FetchImages = async () => {
      try {
        let reponse = await axios.get(
          "https://picsum.photos/v2/list?page=1&limit=100",
        );
        console.log(reponse.data);
        setImg(reponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    FetchImages();
  }, []);

  return (
    <>
      <section>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
          {img.map((data, id) => {
            return (
              <div
                className="relative mb-4 break-inside-avoid shadow group"
                key={id}
              >
                <img
                  src={data.download_url}
                  alt="image"
                  className="w-full obeject-cover"
                />

                {/* Overlay */}
                <div className="absolute top-0 bg-black/10 inset-0 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* top icon */}
                  <div className="flex justify-end gap-x-2">
                    <div className="bg-white p-2 rounded-md">
                      <Bookmark />
                    </div>
                    <div className="bg-white p-2 rounded-md">
                      <PlusIcon />
                    </div>
                  </div>
                  {/* bottom icon */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-white font-bold">{data.author}</h2>
                    <div className="bg-white p-2 rounded-md">
                      <ArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;

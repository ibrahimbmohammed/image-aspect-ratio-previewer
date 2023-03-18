import Head from "next/head";
import { Inter } from "next/font/google";
import LabeledInput from "@/components/molecules/m-labeled-input";
import useFilePreviewer from "@/lib/hooks/file-previewer";
import bgImage from "@assets/png/backgroudImage.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [image, imageFile, aspectRatio, onSelectFile] = useFilePreviewer();
  return (
    <>
      <Head>
        <title>Peddlesoft Aspect Tool</title>
        <meta name="description" content="PeddleSoft Aspect ratio toool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white ">
        <div className="flex relative flex-col items-center min-h-[100vh] pb-[4rem]">
          <div className="pb-3">
            <p className="font-semibold">Aspect Ratio visualizer</p>
          </div>
          <div className="absolute left-6 top-5">
            <p className="text-sm max-w-[22rem]">
              This is a helper tool that gives you a preview of an image with
              respect to various aspect ratios.
            </p>
          </div>
          <div className=" max-w-[18rem]">
            <LabeledInput
              id="leader_image"
              name="leader_image"
              type="file"
              htmlFor="leader_image"
              label=""
              labelClassName="flex flex-col"
              labelTextClassName="text-[0.8rem] font-[500] text-primaryColor"
              placeholder="Upload PDF, PHub File Format"
              className="file:bg:primaryColor focus:none mt-1 block  w-full
                                    rounded-md border border-gray-300 text-black shadow-sm
                                    file:mr-4 file:rounded-md file:border-r-[0.05rem]  file:border-l-0
                                    file:border-t-0 file:border-b-0 file:border-white
                                    file:bg-gray-50 file:py-3 file:px-4 file:text-sm
                                    file:font-normal file:text-primaryColor hover:file:bg-primaryColor hover:file:text-blue-400 hover:file:cursor-pointer
                                    focus:outline-none
                                    focus:ring-offset-2 md:w-full
                                    lg:md:w-full
                                    xl:w-full"
              // @ts-ignore
              handleChange={(e) => onSelectFile(e)}
            />
          </div>
          <div className="w-screen flex flex-col items-center  space-x-8 px-8 mt-8">
            <div className="border-4 mb-12">
              <div className="flex items-center space-x-1 w-full justify-center">
                <p className="text-sm">original image: </p>
                {aspectRatio && <p className="">{aspectRatio}</p>}
              </div>
              <Image
                alt="aspect"
                src={(image as string) ?? bgImage}
                width={200}
                height={300}
              />
            </div>
            <div className="flex flex-col">
              <div className="">
                <h2 className="text-2xl font-semibold pb-4">Clipping</h2>
              </div>
              <div className="flex flex-wrap space-x-4 ">
                <div className="flex flex-col ">
                  <div className="">
                    <p className="font-semibold">3:2 aspect ratio.</p>
                  </div>
                  <div className="relative border-4 border-white  w-[calc(3rem_*_5)]  h-[calc(2rem_*_5)]  overflow-hidden  z-20 top-5">
                    <Image
                      alt="aspect"
                      src={(image as string) ?? bgImage}
                      fill
                      style={{
                        objectFit: "cover",
                        overflow: "hidden",
                      }}
                      sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="">
                    <p className="font-semibold">1:1 aspect ratio.</p>
                  </div>
                  <div className="relative border-4  border-white w-[calc(1rem_*_14)]  h-[calc(1rem_*_14)] overflow-hidden   z-20 top-5">
                    <Image
                      alt="aspect"
                      src={(image as string) ?? bgImage}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        overflow: "hidden",
                      }}
                      sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="">
                    <p className="font-semibold">4:3 aspect ratio.</p>
                  </div>

                  <div className="relative border-4 border-white  w-[calc(4rem_*_5)]  h-[calc(3rem_*_5)]  overflow-hidden  z-20 top-5">
                    <Image
                      alt="aspect"
                      src={(image as string) ?? bgImage}
                      fill
                      style={{
                        objectFit: "cover",
                        overflow: "hidden",
                      }}
                      sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                    />
                  </div>
                </div>

                <div className="flex flex-col ">
                  <div className="">
                    <p className="font-semibold">16:9 aspect ratio.</p>
                  </div>
                  <div className="relative border-4 border-white w-[calc(16rem_*_2)]  h-[calc(9rem_*_2)] overflow-hidden  z-20 top-5">
                    <Image
                      alt="aspect"
                      src={(image as string) ?? bgImage}
                      fill
                      style={{
                        objectFit: "cover",
                        overflow: "hidden",
                      }}
                      sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="">
                    <p className="font-semibold">17:22 aspect ratio.</p>
                  </div>
                  <div className="relative border-4 border-white w-[calc(17rem_*_1.5)]  h-[calc(22rem_*_1.5)] overflow-hidden  z-20 top-5">
                    <Image
                      alt="aspect"
                      src={(image as string) ?? bgImage}
                      fill
                      style={{
                        objectFit: "cover",
                        overflow: "hidden",
                      }}
                      sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-12">
              <div className="">
                <h2 className="text-2xl font-semibold pb-8">Distortion</h2>
              </div>
              <div className="flex flex-wrap space-x-4 ">
                <div className="flex flex-col ">
                  <div className="">
                    <p className="font-semibold">3:2 aspect ratio.</p>
                  </div>
                  <div className="relative border-4 border-white  w-[calc(3rem_*_5)]  h-[calc(2rem_*_5)]  overflow-hidden  z-20 top-5">
                    <Image
                      alt="aspect"
                      src={(image as string) ?? bgImage}
                      fill
                      sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="">
                    <p className="font-semibold">1:1 aspect ratio.</p>
                  </div>
                  <div className="relative border-4  border-white w-[calc(1rem_*_14)]  h-[calc(1rem_*_14)] overflow-hidden   z-20 top-5">
                    <Image
                      alt="aspect"
                      src={(image as string) ?? bgImage}
                      fill
                      sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="">
                    <p className="font-semibold">4:3 aspect ratio.</p>
                  </div>

                  <div className="relative border-4 border-white  w-[calc(4rem_*_5)]  h-[calc(3rem_*_5)]  overflow-hidden  z-20 top-5">
                    <Image
                      alt="aspect"
                      src={(image as string) ?? bgImage}
                      fill
                      sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                    />
                  </div>
                </div>

                <div className="flex flex-col ">
                  <div className="">
                    <p className="font-semibold">16:9 aspect ratio.</p>
                  </div>
                  <div className="relative border-4 border-white w-[calc(16rem_*_2)]  h-[calc(9rem_*_2)] overflow-hidden  z-20 top-5">
                    <Image
                      alt="aspect"
                      src={(image as string) ?? bgImage}
                      fill
                      sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="">
                    <p className="font-semibold">17:22 aspect ratio.</p>
                  </div>
                  <div className="relative border-4 border-white w-[calc(17rem_*_1.5)]  h-[calc(22rem_*_1.5)] overflow-hidden  z-20 top-5">
                    <Image
                      alt="aspect"
                      src={(image as string) ?? bgImage}
                      fill
                      sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

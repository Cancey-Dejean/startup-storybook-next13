import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

const brandsData = [
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/images/brands/uideck.svg",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/tailgrids.svg",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/lineicons.svg",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://graygrids.com",
    image: "/images/brands/graygrids.svg",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },
]

type Brand = {
  id: number
  name: string
  href: string
  image: string
}

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <Link
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </Link>
    </div>
  )
}

export type BrandsProps = {
  bgColor?: string
  sectionSpacing?: string
}

const Brands = ({ bgColor, sectionSpacing = "pb-0" }: BrandsProps) => {
  return (
    <section className={twMerge("py-16", sectionSpacing ? sectionSpacing : "")}>
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className={twMerge(
                "wow fadeInUp bg flex flex-wrap items-center justify-center  rounded-md sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]",
                bgColor
                  ? bgColor
                  : "bg-dark px-8 py-8 dark:bg-primary dark:bg-opacity-5"
              )}
              data-wow-delay=".1s"
              style={{ backgroundColor: bgColor }}
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands

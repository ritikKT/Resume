import BearCarousel, {
  TBearSlideItemDataList,
  BearSlideItem
} from "bear-react-carousel";
import "bear-react-carousel/dist/index.css";

const images = [
  { id: 1, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/Cone.png" },
  { id: 2, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/ConeOpen.png" },
  { id: 3, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/Cylinder.png" }
  ,{ id:4, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/Equation.png" },
  { id: 5, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/IcoCylinder.png" },
  { id: 6, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/IcoSpiked.png" }
  ,{ id:7, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/IcoHalf.png" },
  { id: 8, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/Pyramid.png" },
  { id: 9, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/Molecule.png" }
  ,{ id:10, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/CylinderDynamic.png" },
  { id: 11, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/Ico0.png" },
  { id: 12, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/Ico1.png" },
  { id: 13, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/Ico2.png" },
  { id: 14, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/Ico3.png" },
  { id: 15, image: "https://raw.githubusercontent.com/RitikBansal/Resume/master/Robot.png" },

];

const bearSlideItemData: TBearSlideItemDataList = images.map((row) => {
  return {
    key: row.id,
    children: <BearSlideItem imageUrl={row.image} />
  };
});

const CustomBanner = () => {
  return (
    <BearCarousel
      data={bearSlideItemData}
      isEnableLoop
      isEnableNavButton
      isEnablePagination
      isDebug
      aspectRatio={{ widthRatio: 16, heightRatio: 9 }}
    />
  );
};

export default CustomBanner;

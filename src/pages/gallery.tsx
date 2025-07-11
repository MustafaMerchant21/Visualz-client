import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import CircularGallery from '@/components/CircularGallery'
import GridMotion from '@/components/GridMotion';


const defaultItems = [
  {
    image: `./images/Eiffel Tower.jpg`,
    text: "Eiffel Tower",
  },
  {
    image: `./images/GWoC.jpeg`,
    text: "Great Wall of China",
  },
  {
    image: `./images/La defense.jpeg`,
    text: "La Defense",
  },
  {
    image: `./images/palm island.jpg`,
    text: "Palm Island",
  },
  {
    image: `./images/Petra.jpg`,
    text: "Petra",
  },
  {
    image: `./images/Roman Colosseum.jpeg`,
    text: "Roman Colosseum",
  },
  {
    image: `./images/Taj mahal.jpg`,
    text: "Taj Mahal",
  },
];
const items = [
    'https://res.cloudinary.com/dfezetq6m/image/upload/v1751978849/gqwg5rmwzoycbbzriulp.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751979106/mxex6ftdxfc7zyatesol.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751980295/afvyr1mmhah4r0glrsnh.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751980951/fapzhj2mf0h9mhn9qm5i.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751978813/qukuq2zfg9ngxwy8kc0r.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751979871/fbrdrilbja6pdbtu71cs.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751980800/kzte9fugzurohfvllkuw.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751982229/duba2dxkev6nwimdmssb.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751982814/ccp2hnhwdc3txlqeotaj.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751983026/dpngme2lxrwyzva74vwf.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751983485/qmzdskabuvewqns4qoga.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751986827/epywwrjgszywc3f2b9hc.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751987091/kwrrgifi5ax1hurxbxjt.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751987169/bw1i49qcyf8qgqkmx8sn.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751987172/bgdup8xzlrntes4xnt3z.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751987174/n2mqs34dhpg1x3w21byw.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751987179/u8bfbik2qauhifvnwy09.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751987487/x2zwslyo3endub1bfmld.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751987561/kgiw5k8ltlkbp135ul3s.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751987695/ixfy3rgifnqwwwb3yb1m.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751987709/vlmqcn6iucbu0nhenyp6.jpg',
  'https://res.cloudinary.com/dfezetq6m/image/upload/v1751987800/e7exeuwnthi09ipxea85.jpg',
  "https://res.cloudinary.com/dfezetq6m/image/upload/v1751987807/rmgniezswbvfzsouitvt.jpg",
  "https://res.cloudinary.com/dfezetq6m/image/upload/v1751987939/sfwrpehzkjfcgi0xespb.jpg",
   "https://res.cloudinary.com/dfezetq6m/image/upload/v1751987943/hfderslqwiabg1gkzoxq.jpg",
   "https://res.cloudinary.com/dfezetq6m/image/upload/v1751987949/fy2n60o0u9wngbj4srzl.jpg",
   "https://res.cloudinary.com/dfezetq6m/image/upload/v1751987954/rauqqiwafiorrj5k2qlw.jpg",
   "https://res.cloudinary.com/dfezetq6m/image/upload/v1751987972/owvzxe2uvyszs2l55zjx.jpg",
    "https://res.cloudinary.com/dfezetq6m/image/upload/v1751987997/l3mhcmgagqzjcifpp6wu.jpg",
    "https://res.cloudinary.com/dfezetq6m/image/upload/v1751988004/bmbq0ndhoql447p0yatl.jpg",
     "https://res.cloudinary.com/dfezetq6m/image/upload/v1751980184/s84foxuxiwzybec8ddyd.jpg",
];

export default function GalleryPage() {
  return (
    <DefaultLayout>
      <section className="absolute top-0 left-0 w-full h-full">
      <GridMotion items={items} />
      </section>
    </DefaultLayout>
  );
}

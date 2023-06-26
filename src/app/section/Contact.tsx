import { DM_Sans } from "next/font/google";
import { QRCodeSVG } from "qrcode.react";
import Image from "../component/Image";
import { getImage } from "@/constants/config";

type Props = {};

const DM = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

function Contact({}: Props) {
  return (
    <div
      id="contact"
      className="bg-[#122B41] md:h-96 max-sm:h-[260px] overflow-hidden flex"
    >
      <div className="md:relative max-sm:w-full max-sm:absolute ">
        <div
          className={`md:text-[60px] md:px-24 md:leading-[65px] max-sm:text-[30px] max-sm:pl-2  ${DM.className}`}
        >
          Contact <br /> Me
        </div>
        <div className="max-sm:hidden absolute md:w-[25rem] top-0 z-[1]">
          <Image src={getImage("contact-cover.png")} />
        </div>
        <div className="max-sm:hidden absolute md:w-96  h-full top-0">
          <Image src={getImage("contact-cover-mask.png")} />
        </div>
      </div>
      <div className="text-white md:text-[21px] max-sm:text-[14px] self-center flex-1 max-sm:pl-2 max-sm:pt-2">
        Lets connect and talk about building <br />
        your project together.
      </div>
      <div className="ml-8 flex flex-col items-center justify-center gap-4 flex-1">
        <div className="max-sm:hidden w-14 text-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" />
        </div>
        <QRCodeSVG
          value={"mailto:edsin.d@gmail.com"}
          // size={window.innerWidth < 640 ? 100 : 200}
          bgColor={"#122B41"}
          fgColor={"#fff"}
          level={"L"}
          includeMargin={false}
          className="sm:w-100 md:w-200"
          //   imageSettings={{
          //     src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
          //     x: undefined,
          //     y: undefined,
          //     height: 24,
          //     width: 24,
          //     excavate: true,
          //   }}
        />
        <div className="max-sm:text-[14px]">
          Scan code or{" "}
          <a className="underline" href="mailto:edsin.d@gmail.com">
            Click link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

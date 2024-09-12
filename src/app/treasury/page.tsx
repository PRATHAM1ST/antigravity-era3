"use client";

import Timer from "@/components/global/Timer";
import Button from "@/components/html/Button";
import Input from "@/components/html/Input";
import { IMAGEKIT_BACKGROUNDS, IMAGEKIT_ICONS } from "@/images";
import { Gradients, Shapes } from "@/lib/tailwindClassCombinators";
import { cn } from "@/lib/tailwindUtils";
import Image from "next/image";
import Link from "next/link";
import {
  PiCubeDuotone,
  PiTrophyDuotone,
  PiWrenchDuotone,
} from "react-icons/pi";

export default function TreasuryPage() {
  const data = {
    nextLotteryId: 2,
    currentJourneyId: 1,
    fuelCellsWon: 123,
  };
  return (
    <div
      style={{
        backgroundImage: `url(${IMAGEKIT_BACKGROUNDS.TREASURY_2})`,
      }}
      className="relative flex justify-center items-center min-h-screen xl:[background-size:120%] xl:bg-[80%_50%] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[black] via-[#0000] to-[black]"></div>
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-[50px] z-[1]",
          "lg:flex lg:flex-row lg:justify-start lg:items-start gap-[30px]",
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-start items-start gap-[8px]",
            "p-[8px] rounded-[6px]",
            "bg-agblack/30 backdrop-blur-lg",
            "text-agwhite",
          )}
        >
          <h1
            className={cn(
              Gradients.whiteGradientText,
              "text-[64px] leading-[64px] font-sans font-extrabold",
            )}
          >
            Treasury
          </h1>
          <p className="text-[14px] leading-[14px]">
            Next Journey: {data.nextLotteryId}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-[24px]">
          <div
            className={cn(
              "flex flex-col justify-center items-center gap-[8px] ",
              "w-full md:w-[400px]",
            )}
          >
            <div
              className={cn(
                Gradients.tableBlue,
                Shapes.dataCard,
                "border-[1px] border-agyellow",
                "grid grid-flow-col gap-[8px]",
                "font-extrabold",
                "w-full",
                "flex justify-between items-center",
              )}
            >
              <div className="flex flex-col justify-start items-start">
                <small className="uppercase font-semibold">
                  TOTAL YIELD DISTRIBUTED
                </small>
                <p className="text-[32px]">100</p>
              </div>
              <p className={cn(Gradients.lightBlue, Shapes.pill)}>
                <Image
                  src={IMAGEKIT_ICONS.PILL_DARK_X_CLAIMED}
                  alt="Unclaimed Dark X"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] rounded-full"
                />
                <span className="text-agblack font-semibold font-general-sans">
                  DARK
                </span>
              </p>
            </div>
            <div
              className={cn(
                Gradients.tableBlue,
                Shapes.dataCard,
                "border-[1px] border-agyellow",
                "grid grid-flow-col gap-[8px]",
                "font-extrabold",
                "w-full",
                "flex justify-between items-center",
              )}
            >
              <div className="flex flex-col justify-start items-start">
                <small className="uppercase font-semibold">
                  TOTAL ACTIVE FUEL CELLS
                </small>
                <p className="text-[32px]">100</p>
              </div>
              <p className={cn(Gradients.lightBlue, Shapes.pill)}>
                <Image
                  src={IMAGEKIT_ICONS.FUEL_CELL}
                  alt="Fuel Cell"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] mix-blend-multiply rounded-full"
                />
                <span className="text-agblack font-semibold font-general-sans">
                  Fuel Cells
                </span>
              </p>
            </div>
          </div>
          <Link href="https://test.agproject.io/minting" target="_blank">
            <Button>
              <PiCubeDuotone /> Mint Now
            </Button>
          </Link>
          <div
            className={cn(
              "flex flex-col justify-start items-start gap-[8px]",
              "p-[8px] rounded-[6px]",
              "bg-agblack/30 backdrop-blur-lg",
              "font-extrabold",
            )}
          >
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}

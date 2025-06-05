import { MoveLeft } from "lucide-react"
import Image from "../assets/Mans.jpg"
import { useNavigate } from "react-router-dom"

const MobileIndex = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-[#777] flex flex-col gap-4 p-4">
        <div className="flex items-center justify-start">
          <button onClick={() => navigate(-1)}>
            <MoveLeft color="#aaa" />
          </button>
        </div>
        <div className="flex flex-row items-center justify-between my-3 gap-5">
          <h1 className="clamp-head">GROCERIES ON WHEEL</h1>
          <p>2025</p>
        </div>
        <div className="flex flex-col items-start text-[13.8px]">
          <p>INDUSTRY:</p>
          <p className="text-[#aaa]">FoodTech</p>
        </div>
        <div className="flex flex-col items-start text-[13.8px]">
          <p>STACK:</p>
          <p className="text-[#aaa]">React Native, Expo, React Native Reanimated, Typescript, Nativewind</p>
        </div>
        <div className="flex flex-col items-start text-[13.8px]">
          <p>DESIGN:</p>
          <p className="underline text-[#aaa]">MR. AYODELE</p>
        </div>
        <div className="flex flex-col items-start text-[13.8px]">
          <p>STATUS:</p>
          <p className="text-[#aaa]">In Progress</p>
        </div>
        <div className="flex flex-col items-start text-[13.8px] gap-8">
          <div>
            <img src={Image} alt="image" className="w-full rounded-xl object-cover" />
            <p className="text-[#aaa] pt-3">ADD TO CART</p>
          </div>
          <div>
            <img src={Image} alt="image" className="w-full rounded-xl object-cover" />
            <p className="text-[#aaa] pt-3 text-[13.8px]">ONBOARDING</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileIndex

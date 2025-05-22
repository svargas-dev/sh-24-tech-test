import { BackButton } from "@/components/ui/back-button";

export default function Success() {
  return (
    <div>
      <BackButton className="block mx-auto"/>
      <h2 className="text-xl mb-3 font-semibold text-center">
        We&apos;re available in your area!
      </h2>
    </div>
  )
}

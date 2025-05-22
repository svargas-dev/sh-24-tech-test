import { BackButton } from "@/components/ui/back-button"

export default function OutOfServiceArea() {
  return (
    <div>
      <BackButton className="block mx-auto"/>
      <h2 className="text-xl mb-3 font-semibold text-center">
        We&apos;re sorry, we don&apos;t offer services to that area.
      </h2>
    </div>
  )
}

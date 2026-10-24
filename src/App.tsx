import { MenubarDemo } from "@/components/ui/menubar"
import ProfileSection from "@/components/ProfileSection"

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex w-full max-w-[100rem] justify-start px-6 py-4">
          <MenubarDemo />
        </div>
      </header>
      <main
        className="flex flex-1 items-start justify-center px-6 pt-10 pb-16"
        id="home"
      >
        <ProfileSection />
      </main>
    </div>
  )
}

export default App

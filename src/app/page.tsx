// src/app/page.tsx
import FloatingButton from "@/components/FloatingButton";
import { RotateCcw, ArrowUpFromDot, Footprints, Goal } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center relative w-full px-4 min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12">
      <div className="flex flex-col items-center justify-center text-center mb-16 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-800 leading-tight drop-shadow-md">
          Welcome to the <span className="text-purple-600">Voice-Controlled</span> Demo
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl">
          Interact with elements using simple voice commands. Give it a try!
        </p>
        <div className="mt-8">
          <FloatingButton />
        </div>
      </div>

      <div className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Available Commands
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="box p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border-b-4 border-indigo-400">
            <RotateCcw size={48} className="text-indigo-600 mb-4" />
            <p className="text-lg text-gray-800">
              🗣️ Say <span className="font-extrabold text-indigo-700">"rotate"</span> to rotate the button
            </p>
          </div>

          <div className="box p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border-b-4 border-purple-400">
            <ArrowUpFromDot size={48} className="text-purple-600 mb-4" />
            <p className="text-lg text-gray-800">
              🗣️ Say <span className="font-extrabold text-purple-700">"up"</span> to scroll to the top
            </p>
          </div>

          <div className="box p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border-b-4 border-teal-400">
            <Footprints size={48} className="text-teal-600 mb-4" />
            <p className="text-lg text-gray-800">
              🗣️ Say <span className="font-extrabold text-teal-700">"jump"</span> to make the button jump
            </p>
          </div>

          <div className="box p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border-b-4 border-pink-400">
            <Goal size={48} className="text-pink-600 mb-4" />
            <p className="text-lg text-gray-800">
              ⚽ Say <span className="font-extrabold text-pink-700">"kick"</span> to shoot the ball
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[120vh] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-center p-8 rounded-lg shadow-inner mt-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Scroll Down to See This!
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            This section is intentionally tall so you can test the "up" command.
          </p>
          <p className="text-2xl font-semibold text-purple-700 animate-pulse">
            🗣️ Now, say <span className="font-extrabold">"up"</span> to return to the top!
          </p>
        </div>
      </div>
    </div>
  );
}
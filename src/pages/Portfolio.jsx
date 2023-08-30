export default function Portolio() {
    return (
        <div className="grid grid-cols-2 place-items-center px-20 py-5  gap-y-6">
            <div className="card flex flex-col justify-center">
                <a href="https://danabelleli.github.io/weather-app/" target="_blank" className="capitalize text-2xl font-bold hover:text-red-400">weather app</a>
                <img className="w-2/3 mt-5 rounded-2xl shadow-lg" src="../img/photo-1.png" alt="photo 1" />
            </div>
            <div className="card flex flex-col justify-center">
                <a href="https://danabelleli.github.io/horiseon-project/" target="_blank" className="capitalize text-2xl font-bold mt-5 hover:text-red-400">landing page</a>
                <img className="w-2/3 mt-5 rounded-2xl shadow-lg" src="../img/photo-2.png" alt="photo 2" />
            </div>
            <div className="card flex flex-col justify-center">
                <a href="https://danabelleli.github.io/random-password/" target="_blank" className="capitalize text-2xl font-bold mt-5 hover:text-red-400">password generator</a>
                <img className="w-2/3 mt-5 rounded-2xl shadow-lg" src="../img/photo-3.png" alt="photo 3" />
            </div>
            <div className="card flex flex-col justify-center">
                <a href="https://danabelleli.github.io/coding-quiz-game/" target="_blank" className="capitalize text-2xl font-bold mt-5 hover:text-red-400">coding quiz</a>
                <img className="w-2/3 mt-5 rounded-2xl shadow-lg" src="../img/photo-4.png" alt="photo 4" />
            </div>
            <div className="card flex flex-col justify-center">
                <a href="https://danabelleli.github.io/cal-app/" target="_blank" className="capitalize text-2xl font-bold mt-5 hover:text-red-400">calendar app</a>
                <img className="w-2/3 mt-5 rounded-2xl shadow-lg" src="../img/photo-5.png" alt="photo 5" />
            </div>
            <div className="card flex flex-col justify-center">
                <a href="https://eliasjrivera.github.io/Filmify/" target="_blank" className="capitalize text-2xl font-bold mt-5 hover:text-red-400">movie finder</a>
                <img className="w-2/3 mt-5 rounded-2xl shadow-lg" src="../img/photo-6.png" alt="photo 6" />
            </div>
        </div>
    );
}
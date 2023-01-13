export default function () {
  return (
    <header>
      <div class="fixed h-full flex-grow flex flex-col justify-center items-center gap-2 after:bg-white after:h-20 after:w-10 after:absolute after:z-0">
        <a
          class="w-full pl-1 z-10"
          href="https://github.com/LeonardoSalvucci/react-tailwind-todo"
          target="_blank"
        >
          <img src="/img/github.svg" class="h-6 hover:scale-125 duration-300" />
        </a>
        <a
          class="w-full pl-1 z-10"
          href="https://www.linkedin.com/in/leonardosalvucci/"
          target="_blank"
        >
          <img
            src="/img/linkedin.svg"
            class="h-6 hover:scale-125 duration-300"
          />
        </a>
      </div>
    </header>
  );
}

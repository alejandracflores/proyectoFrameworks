import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";



function Page404() {
    return (
        <div className="h-screen mx-auto grid place-items-center text-center px-8">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16" className="w-20 h-20 mx-auto fill-Azul">
                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
            </svg>
            <Typography
                variant="h1"
                color="blue-gray"
                className="mt-10 !text-3xl !leading-snug md:!text-4xl"
            >
                Error 404
            </Typography>
            <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
                No se puede entrar a la pagina solicitada. Regrese a la pagina de inicio.
            </Typography>
            <Button  className="w-full px-4 md:w-[8rem] bg-Naranja">
                <Link to="/">
                    Inicio
                </Link>
            </Button>
            </div>
        </div>
    );
}

export { Page404 };
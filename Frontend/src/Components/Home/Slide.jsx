import React, {useEffect, useRef, useCallback} from 'react';
import styled from 'styled-components';
import {ReactComponent as Der} from '../../Images/dere.svg';
import {ReactComponent as Izq} from '../../Images/izq.svg';


const Slideshow = ({
    children,
    controles = false,
    autoplay = false,
    velocidad="500",
    intervalo="5000"
}) => {
const slideshow = useRef(null);
const intervaloSlideshow = useRef(null);

const siguiente = useCallback(() => {
    // Comprobamos que el slideshow tenga elementos
    if(slideshow.current.children.length > 0){
        console.log('Siguiente')
        const primerElemento = slideshow.current.children[0];
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        const tamañoSlide = slideshow.current.children[0].offsetWidth;
        slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
        const transicion = () => {
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform = `translateX(0)`;           
            slideshow.current.appendChild(primerElemento);
            slideshow.current.removeEventListener('transitionend', transicion);
        }
        slideshow.current.addEventListener('transitionend', transicion);
    }
}, [velocidad]);

const anterior = () => {
    console.log('Anterior');
    if(slideshow.current.children.length > 0){
        // Obtenemos el ultimo elemento del slideshow.
        const index = slideshow.current.children.length - 1;
        const ultimoElemento = slideshow.current.children[index];
        slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
        
        slideshow.current.style.transition = 'none';
        const tamañoSlide = slideshow.current.children[0].offsetWidth;
        slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
    
        setTimeout(() => {
            slideshow.current.style.transition = `${velocidad}ms ease-out all`;
            slideshow.current.style.transform = `translateX(0)`;
        }, 30);
    }
}

useEffect(() => {
        intervaloSlideshow.current = setInterval(() => {
            siguiente();
        }, 5000);

        // Eliminamos los intervalos
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideshow.current);
        });

        // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideshow.current = setInterval(() => {
                siguiente();
            }, 5000);
        });
}, [autoplay, siguiente]);

return (
    <ContenedorPrincipal>
        <ContenedorSlideshow ref={slideshow}>
            {children}
        </ContenedorSlideshow>
        {controles && <Controles>
            <Boton onClick={anterior}>
                <Izq/>
            </Boton>
            <Boton derecho onClick={siguiente}>
                <Der/>
            </Boton>
        </Controles>}
    </ContenedorPrincipal>
);
}

const ContenedorPrincipal = styled.div`
position: relative;
`;

const ContenedorSlideshow = styled.div`
display: flex;
flex-wrap: nowrap;
width: 100%;
`;

const Slide = styled.div`
min-width: 100%;
overflow: hidden;
transition: .3s ease all;
max-height: 650px;
img {
    width: 100%;
    height: auto;
    vertical-align: top;
}
`;

const Controles = styled.div`
position: absolute;
top: 0;
z-index: 1;
width: 100%;
height: 100%;
pointer-events: none;
`;

const Boton = styled.button`
pointer-events: all;
background: none;
border: none;
cursor: pointer;
outline: none;
width: 50px;
height: 100%;
text-align: center;
position: absolute;
transition: .3s ease all;
z-index: 1;
/* &:hover {
    background: rgba(0,0,0,.2);
    path {
        fill: #fff;
    }
} */
path {
    filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
}
${props => props.derecho ? 'right: 0' : 'left: 0'}
`;

export {Slideshow, Slide};
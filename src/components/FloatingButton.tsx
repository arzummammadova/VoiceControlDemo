
'use client'

import React, { useEffect } from 'react'
import Image from 'next/image';
import annyang from 'annyang';
const FloatingButton = () => {
    const handleScrollonTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleRotate = () => {
        const voiceBtn = document.getElementById('voice-btn');
        if (voiceBtn) {
            voiceBtn.style.animation = 'rotateAnimation 1s linear infinite';
            setTimeout(() => {
                voiceBtn.style.animation = 'none';

            }, 1000);


        }

    }
    const handleJump = () => {
        const voiceBtn = document.getElementById('voice-btn');
        if (voiceBtn) {
            voiceBtn.style.animation = 'jumpAnimation 0.5s infinite '
            setTimeout(() => {
                voiceBtn.style.animation = 'none';

            }, 1000);

        }
    }
    const handleKick = () => {
        const ball = document.getElementById('ball');
        if (ball) {
            ball.style.animation = 'bounceToLeft 2s ease-in-out forwards';

            setTimeout(() => {
                ball.style.animation = 'none';
            }, 2500);
        }
    };








    useEffect(() => {
        if (annyang) {
            const commands = {
                up: handleScrollonTop,
                rotate: handleRotate,
                jump: handleJump,
                kick: handleKick

            }
            annyang.addCommands(commands);
            annyang.start();

        }

        return () => {
            annyang.abort();

        };
    }, []);
    return (

        <div className=''>
            <div className="fixed bottom-10 right-10">
                <button onClick={handleScrollonTop} id='voice-btn' >
                    <Image

                        src="/images/upbuttonimage.png"
                        alt="Up Arrow"
                        width={100}
                        height={140}
                        className="hover:scale-110 transition-transform duration-300"
                    />
                </button>

            </div>
            <div className="fixed bottom-8 right-28">
                <Image id="ball" src="/images/ball.png" width={30} height={30} alt="ball" />
            </div>



        </div>

    )
}

export default FloatingButton

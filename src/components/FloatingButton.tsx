// src/components/FloatingButton.tsx
'use client'; 

import React, { useEffect } from 'react';
import Image from 'next/image';

// Annyang-ın tip interfeysini import etməyə ehtiyac qalmır, çünki 'any' istifadə edəcəyik
// import * as AnnyangModule from 'annyang'; // Bu sətri silin və ya şərhə alın

const FloatingButton = () => {
    const handleScrollonTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    const handleRotate = () => {
        const voiceBtn = document.getElementById('voice-btn');
        if (voiceBtn) {
            voiceBtn.style.animation = 'rotateAnimation 1s linear infinite';
            setTimeout(() => {
                voiceBtn.style.animation = 'none';
            }, 1000);
        }
    };

    const handleJump = () => {
        const voiceBtn = document.getElementById('voice-btn');
        if (voiceBtn) {
            voiceBtn.style.animation = 'jumpAnimation 0.5s infinite ';
            setTimeout(() => {
                voiceBtn.style.animation = 'none';
            }, 1000);
        }
    };

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
        // annyangInstance üçün tipi `any` olaraq təyin edirik
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let annyangInstance: any; 

        if (typeof window !== 'undefined' && window.SpeechRecognition) {
            import('annyang')
                .then((module) => {
                    // Modulun default exportu varsa onu, yoxdursa modulu özünü istifadə edirik.
                    // Və onu 'any' tipinə cast edirik.
                    annyangInstance = (module.default || module) as any; 

                    if (annyangInstance) {
                        console.log("Annyang successfully imported and initialized.");
                        const commands = {
                            up: handleScrollonTop,
                            rotate: handleRotate,
                            jump: handleJump,
                            kick: handleKick
                        };
                        annyangInstance.addCommands(commands);
                        annyangInstance.start();
                    } else {
                        console.error("Annyang module is undefined after import.");
                    }
                })
                .catch((error) => {
                    console.error("Failed to load annyang:", error);
                });
        } else {
            console.warn("Speech Recognition API is not supported in this browser or environment.");
        }

        return () => {
            if (annyangInstance && annyangInstance.abort) {
                annyangInstance.abort();
                console.log("Annyang aborted on component unmount.");
            }
        };
    }, []);

    return (
        <div className=''>
            <div className="fixed bottom-10 right-10">
                <button onClick={handleScrollonTop} id='voice-btn'>
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
    );
};

export default FloatingButton;
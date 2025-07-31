// src/components/FloatingButton.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const FloatingButton = () => {
    // Mikrofon dəstəyini izləmək üçün state
    const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] = useState(false);

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

        // Speech Recognition API dəstəyini yoxlayın
        if (typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition)) {
            setIsSpeechRecognitionSupported(true); // API dəstəklənir

            import('annyang')
                .then((module) => {
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
                        setIsSpeechRecognitionSupported(false); // Annyang yüklənməsə dəstəyi sıfırla
                    }
                })
                .catch((error) => {
                    console.error("Failed to load annyang:", error);
                    setIsSpeechRecognitionSupported(false); // Yüklənmə uğursuz olsa dəstəyi sıfırla
                });
        } else {
            console.warn("Speech Recognition API is not supported in this browser or environment.");
            setIsSpeechRecognitionSupported(false); // API dəstəklənmir
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
                <button
                    onClick={handleScrollonTop}
                    id='voice-btn'
                    // Əgər Speech Recognition dəstəklənmirsə, düyməni deaktiv edin
                    disabled={!isSpeechRecognitionSupported}
                    className={`${!isSpeechRecognitionSupported ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <Image
                        src="/images/upbuttonimage.png"
                        alt="Up Arrow"
                        // Optimal ölçülər üçün width və height-i birgə qeyd edin
                        width={100} // Bu ölçüləri öz ehtiyacınıza görə dəyişə bilərsiniz
                        height={100} // Şəkilin aspekt nisbətini qorumaq üçün eyni dəyər seçdim (square image üçün)
                        className="hover:scale-110 transition-transform duration-300"
                    />
                </button>
                {!isSpeechRecognitionSupported && (
                    <p className="text-red-500 text-xs mt-2 text-center max-w-[100px]">
                        Səs əmrləri dəstəklənmir. (Brauzer/Cihaz)
                    </p>
                )}
            </div>
            <div className="fixed bottom-8 right-28">
                <Image
                    id="ball"
                    src="/images/ball.png"
                    width={30}
                    height={30}
                    alt="ball"
                    // 'ball' şəkli üçün də width/height balansını qoruyun
                    className="object-contain" // Aspect ratio-nu qorumaq üçün object-contain əlavə etdim
                />
            </div>
        </div>
    );
};

export default FloatingButton;
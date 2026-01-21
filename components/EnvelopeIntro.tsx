"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./EnvelopeIntro.module.css";
import { siteConfig } from "@/lib/config";

export default function EnvelopeIntro() {
  const [isOpening, setIsOpening] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [sealFading, setSealFading] = useState(false); // Estado dedicado para el sello

  // Bloquear scroll mientras el overlay está activo
  useEffect(() => {
    if (!isFadingOut) {
      // Bloquear scroll vertical y horizontal
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      // Desbloquear scroll cuando empiece el fade out
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.overflowX = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.overflowX = "";
    };
  }, [isFadingOut]);

  const handleOpen = () => {
    if (isOpening) return;
    
    setIsOpening(true);
    setSealFading(true); // Activar fade del sello INMEDIATAMENTE

    // Empezar fade out del overlay DESPUÉS de que termine la animación de lectura
    setTimeout(() => {
      setIsFadingOut(true);
    }, 3500); // Empieza a desvanecer después de 3.5s

    // Ocultar completamente y mostrar la landing - dar tiempo suficiente para la transición
    setTimeout(() => {
      setIsHidden(true);
    }, 5500); // Tiempo total: apertura (1s) + reveal (0.8s) + salida (2s) + lectura (0.7s) + fade suave (1.5s) + margen (0.5s)
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen();
    }
  };

  if (isHidden) {
    return null;
  }

  return (
    <div
      className={`${styles.overlay} ${isFadingOut ? styles.overlayFading : ""}`}
      aria-hidden={isFadingOut}
    >
      {/* Contenedor del sobre */}
      <div className={`${styles.envelopeContainer} ${isFadingOut ? styles.envelopeHiding : ""}`}>
        <button
          className={`${styles.envelopeWrapper} ${
            isOpening ? styles.opening : ""
          }`}
          onClick={handleOpen}
          onKeyDown={handleKeyDown}
          aria-label="Abrir invitación"
          disabled={isOpening}
        >
          {/* Ondas de fondo - centradas en el sobre */}
          <div className={styles.rippleContainer}>
            <div className={styles.ripple}></div>
            <div className={styles.ripple}></div>
            <div className={styles.ripple}></div>
          </div>
          {/* Sobre */}
          <div className={styles.envelope}>
            {/* Parte trasera del sobre */}
            <div className={styles.envelopeBack} />

            {/* Interior del sobre (sombra cuando se abre) */}
            <div className={styles.envelopeInner} />

            {/* Solapa superior (la que se abre) */}
            <div className={styles.envelopeFlap} />

            {/* Sello con estado dedicado */}
            <div className={`${styles.envelopeStamp} ${sealFading ? styles.sealFading : ""}`}>
              <Image
                src="/sello/sello-optimized.png"
                alt="Sello de boda"
                width={100}
                height={100}
                priority
                sizes="(max-width: 640px) 70px, 100px"
                className={styles.stampImage}
              />
            </div>
          </div>

          {/* Tarjeta de invitación que sale del sobre - FUERA del envelope */}
          <div className={`${styles.invitationCard} ${isOpening ? styles.cardPullingOut : ""}`}>
            {/* Fondo con gradiente del tema */}
            <div className={styles.invitationBackground} />
            
            {/* Contenido de la tarjeta */}
            <div className={styles.invitationContent}>
              <p className={styles.invitationLabel}>Save the Date</p>
              
              <div className={styles.invitationNames}>
                <p className={styles.invitationName}>{siteConfig.couple.shortName1}</p>
                <p className={styles.invitationAmpersand}>&</p>
                <p className={styles.invitationName}>{siteConfig.couple.shortName2}</p>
              </div>
              
              <div className={styles.invitationDateContainer}>
                <div className={styles.invitationDateLine} />
                <div className={styles.invitationDate}>
                  <span className={styles.invitationDay}>{siteConfig.wedding.day}</span>
                  <span className={styles.invitationSeparator}>·</span>
                  <span className={styles.invitationMonth}>{siteConfig.wedding.month}</span>
                  <span className={styles.invitationSeparator}>·</span>
                  <span className={styles.invitationYear}>{siteConfig.wedding.year}</span>
                </div>
                <div className={styles.invitationDateLine} />
              </div>
            </div>
          </div>

          {/* Texto de instrucción */}
          <p className={styles.instructionText}>
            {isOpening ? "" : "Toca para abrir"}
          </p>
        </button>
      </div>
    </div>
  );
}

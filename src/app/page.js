"use client";
import Image from "next/image";
import css from "./page.module.css";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <section className={css.container}>
      <div className="img-wrapper">
        <Image
          src="/images/salon2.jpg"
          alt="Picture of beutiful studio"
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <p>Profesjonalna stylizacja</p>
        <p>Stylizacja paznokci</p>
        <h1>Paznokcie Szczecin</h1>
        <p className="description">
          Stylizacja paznokci w profesjonalnym salonie to świetna okazja, aby
          Twoje paznokcie zyskały świeży, piękny i wypielęgnowany wygląd. W
          Kurkowa5 doskonale wiemy, że dłonie potrafią być najważniejszą
          wizytówką człowieka!.
        </p>
        <p className="description">
          Kurkowa5 to miejsce stworzone z myślą o każdej przedstawicielce płci
          pięknej – u nas odnajdziesz to, czego szukasz. Nasz salon
          specjalizujący się w stylizacji paznokci i makijażu permanentnym
          znajdziesz w centrum Szczecina, w wieżowcu Hanza Tower. Serdecznie
          zapraszamy.
        </p>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import Gestionnaire from "../gestionnaire";

function HomeContent() {
  // yes yes big hack
  useEffect(() => {
    new Gestionnaire();
  }, []);
  return (
    <div id="contenu">
      <h1>SUTOM</h1>
      <div id="notification"> </div>
      <div id="fin-de-partie-panel">
        <div id="victoire-panel">
          <h2>Félicitations</h2>
          <p>Bravo, tu as gagné. Reviens demain pour une nouvelle grille.</p>
        </div>
        <div id="defaite-panel">
          <h2>Perdu</h2>
          <p>
            Le mot a trouver était : <span id="defaite-panel-mot"></span>
            <br />
            Peut être feras-tu mieux demain ?
          </p>
        </div>
        <p>
          Résumé de ta partie{" "}
          <a href="#" id="fin-de-partie-panel-resume-bouton">
            Partager
          </a>
        </p>
        <pre id="fin-de-partie-panel-resume"></pre>
      </div>
      <div id="grille"></div>
      <div id="input-area">
        <div className="input-ligne">
          <div data-lettre="A" className="input-lettre">
            A
          </div>
          <div data-lettre="Z" className="input-lettre">
            Z
          </div>
          <div data-lettre="E" className="input-lettre">
            E
          </div>
          <div data-lettre="R" className="input-lettre">
            R
          </div>
          <div data-lettre="T" className="input-lettre">
            T
          </div>
          <div data-lettre="Y" className="input-lettre">
            Y
          </div>
          <div data-lettre="U" className="input-lettre">
            U
          </div>
          <div data-lettre="I" className="input-lettre">
            I
          </div>
          <div data-lettre="O" className="input-lettre">
            O
          </div>
          <div data-lettre="P" className="input-lettre">
            P
          </div>
        </div>
        <div className="input-ligne">
          <div data-lettre="Q" className="input-lettre">
            Q
          </div>
          <div data-lettre="S" className="input-lettre">
            S
          </div>
          <div data-lettre="D" className="input-lettre">
            D
          </div>
          <div data-lettre="F" className="input-lettre">
            F
          </div>
          <div data-lettre="G" className="input-lettre">
            G
          </div>
          <div data-lettre="H" className="input-lettre">
            H
          </div>
          <div data-lettre="J" className="input-lettre">
            J
          </div>
          <div data-lettre="K" className="input-lettre">
            K
          </div>
          <div data-lettre="L" className="input-lettre">
            L
          </div>
          <div data-lettre="M" className="input-lettre">
            M
          </div>
        </div>
        <div className="input-ligne">
          <div className="input-lettre input-lettre-vide"></div>
          <div data-lettre="W" className="input-lettre">
            W
          </div>
          <div data-lettre="X" className="input-lettre">
            X
          </div>
          <div data-lettre="C" className="input-lettre">
            C
          </div>
          <div data-lettre="V" className="input-lettre">
            V
          </div>
          <div data-lettre="B" className="input-lettre">
            B
          </div>
          <div data-lettre="N" className="input-lettre">
            N
          </div>
          <div data-lettre="_effacer" className="input-lettre">
            ⌫
          </div>
          <div
            data-lettre="_entree"
            className="input-lettre input-lettre-entree"
          >
            ↲
          </div>
        </div>
      </div>
      <div id="regles-panel">
        <p>
          Vous avez six essais pour deviner le mot du jour.
          <br />
          Vous ne pouvez proposer que des mots commençant par la même lettre que
          le mot recherché, et qui se trouvent dans notre dictionnaire.
          <br />
          Les lettres entourées d&quot;un carré rouge sont bien placées,
          <br />
          les lettres entourées d&quot;un cercle jaune sont mal placées (mais
          présentes dans le mot).
          <br />
          Les lettres qui restent sur fond bleu ne sont pas dans le mot.
          <br />
          Il y a un mot par jour, et il est identique pour tout le monde. Évitez
          donc les spoils et privilégiez le bouton de partage.
          <br />
          En cas de soucis, vous pouvez contacter{" "}
          <a href="https://twitter.com/clemtoune">@clemtoune</a> sur twitter. −
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/prevostc/sutom-next"
          >
            Page du projet
          </a>
          <br />
          Basé sur l&quot;excellent{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.powerlanguage.co.uk/wordle/"
          >
            Wordle
          </a>{" "}
          et le regretté Motus.
          <br />
          Merci à Emmanuel pour l&quot;aide sur le dictionnaire.
        </p>
      </div>
    </div>
  );
}

export default HomeContent;

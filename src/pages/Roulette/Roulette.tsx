import { Wheel } from "react-custom-roulette";
import { useState } from "react";
import styles from "./Roulette.module.css";
import logo from '../../assets/logo-branco.png'
const premios = [
  { option: "FRETE GRÁTIS" },
  { option: "10% OFF" },
  { option: "CAMISETA PINHA" },
  { option: "BRINDE ESPECIAL" },
];

const produtosDestaque = [
  {
    nome: "Camiseta Pinha",
    descricao: "Preta, 100% algodão, silk premium.",
    preco: "R$ 69,90",
    imagem: "/mock-camiseta.png",
    tag: "NOVO",
  },
  {
    nome: "Jaqueta de Nylon",
    descricao: "Corta vento, forro interno, zíper.",
    preco: "R$ 199,90",
    imagem: "/mock-jaqueta.png",
    tag: "OFERTA",
  },
  {
    nome: "Moletom Pinha",
    descricao: "Cinza, capuz, bolso canguru.",
    preco: "R$ 149,90",
    imagem: "/mock-moletom.png",
    tag: "",
  },
];

export default function Roulette() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [giroDisponivel, setGiroDisponivel] = useState(true);

  const handleSpinClick = () => {
    if (!giroDisponivel) return;
    const newPrize = Math.floor(Math.random() * premios.length);
    setPrizeNumber(newPrize);
    setMustSpin(true);
    setGiroDisponivel(false);
  };

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <span className={styles.headerTitle}>GIUSEPPE VIDAL</span>
          <div className={styles.headerMenu}>
            <button className={styles.menuButton}>☰</button>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.rouletteSection}>
          <div className={styles.rouletteCard}>
            <span className={styles.rouletteBadge}>
              ROLETA DE PRÊMIOS PINHA
            </span>
            <h1 className={styles.rouletteTitle}>GIRE E GANHE</h1>
            <span className={styles.rouletteSubtitle}>
              Gire a roleta, ganhe um prêmio e use no seu pedido pelo WhatsApp!
            </span>
            <div className={styles.rouletteWheelWrapper}>
              <div className={styles.rouletteWheelContainer}>
                <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={premios}
                  backgroundColors={["#23210F", "#FFD600"]}
                  textColors={["#fff"]}
                  fontSize={14}
                  radiusLineColor="#FFD600"
                  radiusLineWidth={2}
                  outerBorderColor="#FFD600"
                  outerBorderWidth={8}
                  innerBorderColor="#FFD600"
                  innerBorderWidth={0}
                  pointerProps={{ style: { color: "#FFD600" } }}
                  onStopSpinning={() => {
                    setMustSpin(false);
                    setTimeout(() => {
                      alert(`Você ganhou: ${premios[prizeNumber].option}`);
                    }, 300);
                  }}
                />
                <div className={styles.rouletteWheelCenter}>
                  <div className={styles.rouletteWheelCenterCircle}>
                    <img
                      src="/icon-leaf.svg"
                      alt="Leaf"
                      className={styles.rouletteWheelCenterIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleSpinClick}
              disabled={!giroDisponivel}
              className={styles.rouletteSpinButton}
            >
              GIRAR AGORA!
            </button>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <span style={{ marginRight: 8 }}>💬</span>Falar no WhatsApp
            </a>
          </div>
        </section>
        <section className={styles.destaqueSection}>
          <div className={styles.destaqueHeader}>
            <h2 className={styles.destaqueTitle}>Produtos em Destaque</h2>
            <a href="#" className={styles.destaqueVerTodos}>
              Ver todos
            </a>
          </div>
          <div className={styles.destaqueLista}>
            {produtosDestaque.map((produto, idx) => (
              <div key={idx} className={styles.destaqueCard}>
                {produto.tag && (
                  <div
                    className={
                      styles.destaqueTag +
                      " " +
                      (produto.tag === "NOVO"
                        ? styles.tagNovo
                        : styles.tagOferta)
                    }
                  >
                    {produto.tag}
                  </div>
                )}
                {produto.imagem && (
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className={styles.destaqueImagem}
                  />
                )}
                <div className={styles.destaqueNome}>{produto.nome}</div>
                <div className={styles.destaqueDescricao}>
                  {produto.descricao}
                </div>
                <div className={styles.destaquePreco}>{produto.preco}</div>
                <button className={styles.destaqueComprar}>
                  <span style={{ marginRight: 8 }}>🛒</span>Comprar
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.eliteSection}>
          <div className={styles.eliteCard}>
            <h3 className={styles.eliteTitle}>FAÇA PARTE DA ELITE</h3>
            <span className={styles.eliteSubtitle}>
              Receba ofertas exclusivas, novidades e cupons no seu WhatsApp.
            </span>
            <form className={styles.eliteForm}>
              <input
                type="text"
                placeholder="Seu nome"
                className={styles.eliteInput}
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className={styles.eliteInput}
              />
              <button type="submit" className={styles.eliteButton}>
                Cadastrar
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerCol}>
            <img
              src="/icon-leaf.svg"
              alt="Logo"
              className={styles.footerLogo}
            />
            <div className={styles.footerTitle}>PINHA STORE</div>
            <div className={styles.footerCopy}>© 2026 Pinha Store</div>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Institucional</div>
            <a className={styles.footerLink} href="#">
              Sobre
            </a>
            <a className={styles.footerLink} href="#">
              Contato
            </a>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Redes</div>
            <a className={styles.footerLink} href="#">
              Instagram
            </a>
            <a className={styles.footerLink} href="#">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

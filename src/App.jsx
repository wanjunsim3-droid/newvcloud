import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Building2, Leaf, ArrowRight, Menu } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="logo-link">
          NEWTOWN PREMIUM
        </a>
        <nav className="nav-links">
          <a href="#overview">사업개요</a>
          <a href="#premium">프리미엄</a>
          <a href="#environment">입지환경</a>
          <a href="#location">오시는길</a>
        </nav>
        <a href="https://www.gardensquare.co.kr/" target="_blank" rel="noreferrer" className="contact-btn">
          <Phone size={18} />
          <span>관심고객등록</span>
        </a>
      </header>

      {/* Video Modal */}
      {showVideo && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          onClick={() => setShowVideo(false)}
        >
          <div style={{ position: 'relative', width: '80%', maxWidth: '900px', aspectRatio: '16/9', background: '#000', borderRadius: '16px', overflow: 'hidden' }}>
            <button 
              onClick={() => setShowVideo(false)}
              style={{ position: 'absolute', top: '-40px', right: '0', background: 'transparent', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              ✕ 닫기
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="홍보영상" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content glass" style={{ padding: '60px 40px', borderRadius: '32px' }}>
          <span className="hero-badge">NEW PREMIUM OFFICE</span>
          <h1 className="hero-title">
            새로운 비즈니스의<br />중심이 되다
          </h1>
          <p className="hero-desc">
            성공을 위한 완벽한 공간, 당신의 비전이 현실이 되는 곳.<br />
            최고의 입지와 프리미엄 설계로 새로운 기준을 제시합니다.
          </p>
          <button 
            onClick={() => setShowVideo(true)}
            className="contact-btn" 
            style={{ width: 'fit-content', margin: '0 auto', padding: '16px 32px', fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}
          >
            홍보영상 보기 <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Premium Section */}
      <section id="premium" className="section">
        <div className="section-header">
          <span className="section-subtitle">PREMIUM 7</span>
          <h2 className="section-title">비교할 수 없는 7가지 가치</h2>
        </div>
        
        <div className="premium-grid">
          {[
            { img: 'premium-01-01.png', title: 'CLOUD OF TRAFFIC', desc: '초역세권 프리미엄 교통망' },
            { img: 'premium-01-02.png', title: 'CLOUD OF GREENERY', desc: '쾌적한 에코 친환경 설계' },
            { img: 'premium-01-03.png', title: 'CLOUD OF BUSINESS', desc: '비즈니스 시너지의 중심' },
            { img: 'premium-02-01.png', title: 'CLOUD OF LANDMARK', desc: '압도적인 스케일의 랜드마크' },
            { img: 'premium-02-02.png', title: 'CLOUD OF MZ', desc: '트렌디한 복합 문화 공간' },
            { img: 'premium-02-03.png', title: 'CLOUD OF VISION', desc: '빛나는 미래가치와 비전' }
          ].map((item, idx) => (
            <div key={idx} className="premium-card glass">
              <img src={`/newvcloud/assets/images/main/${item.img}`} alt={item.title} onError={(e) => e.target.src = '/vite.svg'} />
              <div className="premium-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Environment Section */}
      <section id="environment" className="section">
        <div className="env-container glass">
          <div className="env-text">
            <span className="section-subtitle">ENVIRONMENT</span>
            <h2>자연과 도심이<br />완벽하게 조화된 공간</h2>
            <p>
              탁 트인 전망과 쾌적한 업무 환경을 제공합니다.<br />
              업무의 효율성을 극대화하는 스마트한 오피스 라이프를 누리세요.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '10px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '12px', color: '#3b82f6' }}>
                  <Building2 size={24} />
                </div>
                <span>스마트 비즈니스 인프라 구축</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '10px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '12px', color: '#3b82f6' }}>
                  <Leaf size={24} />
                </div>
                <span>도심 속 힐링을 위한 에코 설계</span>
              </li>
            </ul>
          </div>
          <div className="env-image">
            <img src="/newvcloud/assets/images/main/environment-map.jpg" alt="입지환경" onError={(e) => e.target.style.display = 'none'} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px' }}>NEWTOWN PREMIUM</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '10px' }}>
          상담문의 : <strong style={{ color: '#fff' }}>1666-5984</strong>
        </p>
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
          본 사이트의 이미지 및 내용은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.<br />
          Copyright © Newtown Premium. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Phone } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './index.css';

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <h1 className="main-logo"><a href="/">뉴브 클라우드힐스</a></h1>
          <nav className="header-nav">
            <ul>
              <li><a href="#overview">사업개요</a></li>
              <li><a href="#environment">입지환경</a></li>
              <li><a href="#premium">프리미엄</a></li>
              <li><a href="#complex">상품안내</a></li>
              <li><a href="#media">홍보센터</a></li>
            </ul>
          </nav>
          <div className="header-right">
            <a href="#" className="header-customer">관심고객등록</a>
            <a href="tel:18110588" className="header-tel">
              <Phone size={20} /> 1811.0588
            </a>
          </div>
        </div>
      </header>

      {/* Right Quick Menu */}
      <div className="right-quick">
        <div className="quick-open">
          <p>홍보관</p>
          <p>오픈</p>
        </div>
        <a href="#" className="quick-customer">
          REGISTER
        </a>
      </div>

      <div id="fullpage">
        {/* Section 1: Main Visual */}
        <section className="section main-section-visual">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="visual-slide"
          >
            <SwiperSlide>
              <div className="visual-bg">
                <img src="/assets/8.png" alt="메인 비주얼 1" />
              </div>
              <div className="visual-inner">
                <div className="visual-title">
                  <h2>마곡의 새로운 랜드마크</h2>
                  <p>뉴브 클라우드힐스에서 비즈니스의 미래를 시작하세요.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="visual-bg">
                <img src="/assets/뉴브3.png" alt="메인 비주얼 2" />
              </div>
              <div className="visual-inner">
                <div className="visual-title">
                  <h2>프리미엄 지식산업센터</h2>
                  <p>서울 3대 업무지구를 잇는 쾌속 교통망과 쾌적한 녹지환경</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Section 2: Premium */}
        <section id="premium" className="section main-section-premium">
          <div className="premium-title-wrapper">
            <h2>프리미엄 7</h2>
            <p>마곡에서 가장 큰 내일의 오피스를 만나다</p>
          </div>
          <div className="premium-slide-wrapper">
             <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 3000 }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className="premium-item">
                  <img src="/assets/9.png" alt="쾌속교통망" />
                  <h3>CLOUD OF TRAFFIC</h3>
                  <p>서울 3대 업무지구를 잇는 쾌속교통망</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="premium-item">
                  <img src="/assets/10.png" alt="녹지환경" />
                  <h3>CLOUD OF GREENERY</h3>
                  <p>서울식물원과 연계된 쾌적한 녹지환경</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="premium-item">
                  <img src="/assets/8.png" alt="비즈니스 인프라" />
                  <h3>CLOUD OF BUSINESS</h3>
                  <p>앞 선 4차산업 인프라와 네트워크</p>
                </div>
              </SwiperSlide>
               <SwiperSlide>
                <div className="premium-item">
                  <img src="/assets/뉴브3.png" alt="랜드마크 스케일" />
                  <h3>CLOUD OF LANDMARK</h3>
                  <p>마곡업무지구 자랑이 될 최대 스케일</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Section 3: Environment */}
        <section id="environment" className="section main-section-environment">
          <div className="environment-inner">
            <div className="environment-left">
              <img src="/assets/10.png" alt="입지환경 지도" />
            </div>
            <div className="environment-right">
              <h2>여의도, 광화문, 강남을 잇는<br/>서울 제4의 업무지구!</h2>
              <p>마곡 서울식물원 바로 옆에 4차 산업을 이끌<br/>큰 일할 내일의 오피스가 옵니다.</p>
              <a href="#" className="button-view">입지환경 자세히 보기</a>
            </div>
          </div>
        </section>

        {/* Section 4: Location */}
        <section id="location" className="section main-section-location">
           <div className="location-inner">
              <h2>오시는 길</h2>
              <div className="location-content">
                <div className="location-card">
                  <h3>사업지</h3>
                  <p>마곡산업시설구역 D13<br/>(서울시 강서구 마곡동 779-1번지)</p>
                  <div className="map-buttons">
                    <a href="#" className="map-btn naver">네이버 지도</a>
                    <a href="#" className="map-btn kakao">카카오 맵</a>
                  </div>
                </div>
              </div>
           </div>
        </section>

        {/* Section 5: Footer */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-left">
              <div className="footer-logo">NEWV CLOUD HILLS</div>
              <ul className="footer-info">
                <li>지하 4층 ~ 지상 11층 업무시설, 근린생활시설 | 분양 총 160실 / 임대 총 104실</li>
                <li>온라인대행 : 리얼투데이 | 대표자명 : 김운철 | 주소 : 서울시 강남구 언주로 650, 9층(논현동 238-5) | 사업자번호 : 214-88-75980</li>
                <li>※ 본 제작물에 표기된 각종 개발 계획은 인·허가 과정 시 변경될 수 있습니다.</li>
              </ul>
              <p className="footer-copy">COPYRIGHTⓒ NEWCLOUDHILLS. ALL RIGHT RESERVED</p>
            </div>
            <div className="footer-right">
              <ul className="footer-ul">
                <li><span>시행수탁사</span> <strong>신한자산신탁</strong></li>
                <li><span>시공사</span> <strong>우미건설(주), 현대건설(주)</strong></li>
                <li><span>위탁사</span> <strong>(주)리얼투데이</strong></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

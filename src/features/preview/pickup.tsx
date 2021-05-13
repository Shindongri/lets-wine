import { FC } from "react";

const PickupFragment: FC = () => {
  return (
      <div style={{width: '100%'}}>
          <div style={{backgroundColor: '#cddf74', width: '100%', height: '215px', justifyContent: 'space-between', alignItems: 'center', padding: '30px 1.5rem', boxSizing: 'border-box', position: 'relative'}}>
              <div style={{width: '100%'}}>
                  <h2 style={{fontSize: '18px', margin: '0px', padding: '0 0 15px'}}>렛츠와인 페어링 픽업 안내</h2>
              </div>
              <div style={{position: 'absolute', top: '75px', left: '5%', float: 'left', textAlign: 'center', width: '23%'}}>
                  <div style={{height: '45px', width: 'auto'}}>
                      <img src="http://wineplz.cafe24.com/web/upload/img/icon_wine02.svg" alt="" style={{objectFit: 'contain', height: '60px'}} />
                  </div>
                  <p style={{fontSize: '10px', position: 'absolute', top: '60px'}}><b>평일 오전 10시</b><br />이전까지 결제 완료</p>
              </div>
              <p style={{fontSize: '20px', position: 'absolute', top: '100px', left: '29%'}}>&gt;</p>
              <div style={{position: 'absolute', top: '75px', left: '41%', float: 'left', textAlign: 'center', width: '24%'}}>
                  <div style={{height: '50px', width: 'auto', paddingRight: '10px'}}>
                      <img src="http://wineplz.cafe24.com/web/upload/img/icon_wine04_1.svg" alt="" style={{objectFit: 'contain', height: '60px'}} />
                  </div>
                  <p style={{fontSize: '10px', position: 'absolute', top: '60px'}}><b>[배송 완료]<br />알림 톡 수신후</b><br />매장 방문하기</p>
              </div>
              <p style={{fontSize: '20px', position: 'absolute', top: '100px', left: '65%'}}>&gt;</p>
              <div style={{position: 'absolute', top: '75px', left: '68%', float: 'left', textAlign: 'center', width: '30%'}}>
                  <div style={{height: '48px', width: 'auto'}}>
                      <img src="http://wineplz.cafe24.com/web/upload/img/icon_wine03_1.svg" alt="" style={{objectFit: 'contain', height: '60px'}} />
                  </div>
                  <p style={{fontSize: '10px', position: 'absolute', top: '60px'}}><b>당일 상품 픽업</b><br />서울/경기/인천 지역에 한함<br />외 지역은 +1일 소요</p>
              </div>
          </div>
      </div>
  );
};

export default PickupFragment;

import { FC } from "react";

const SmartOrderFragment: FC = () => {
  return (
      <section className="w-full flex flex-col items-center" style={{ background: "#f1f1f1" }}>
        <article className="w-full px-4 py-10 max-w-screen-sm">
          <div className="w-full" >
            <h2 className="text-center text-lg font-bold">
              Pick-up 공지사항 (스마트오더)
            </h2>
            <span className="spacer vertical" style={{ height: "16px" }} />
            <div className="rounded-md p-5" style={{ backgroundColor: "#f9f9f9" }}>
              <p className="font-semibold">1. 미성년자 구매 불가</p>
              <span className="spacer vertical" style={{ height: "8px" }} />
              <ul className="text-gray-500 leading-7" style={{ listStyleType: '"*"' }}>
                <li>19세 이상 성인 이상일 경우, 본인인증 이후 구매 가능합니다.</li>
                <li>사업자 회원, 19세 미만 청소년은 구매할 수 없습니다.</li>
              </ul>
              <span className="spacer vertical" style={{ height: "16px" }} />
              <p className="font-semibold">2. Pick-up(스마트오더) 전용 상품에 대한 고지</p>
              <span className="spacer vertical" style={{ height: "8px" }} />
              <ul className="text-gray-500 leading-7" style={{ listStyleType: '"*"' }}>
                <li>
                  20.4.3.부터 스마트오더방식을 이용한 주류 주문이 허용 되었습니다.
                  이는 소비자가 매장을 방문하여 수령하는 것(Pick up)을 전제로 합니다.
                </li>
                <li>
                  상품 픽업 시,
                  <span className="text-red-600">본인인증 확인을 위해 ‘신분증’을 지참</span>
                  하여 주시기 바랍니다. (주민등록증, 운전면허증, 여권만 허용)
                </li>
              </ul>
              <span className="spacer vertical" style={{ height: "16px" }} />
              <p className="font-semibold">3. 대리수령 시 서비스 이용 제한</p>
              <span className="spacer vertical" style={{ height: "8px" }} />
              <ul className="text-gray-500 leading-7" style={{ listStyleType: '"*"' }}>
                <li>
                  Pick up 상품은 주문자 본인 수령을 원칙으로 하며, 주문자 확인불가 및
                  대리 수령 시 서비스 이용이 제한될 수 있습니다.
                </li>
              </ul>
              <span className="spacer vertical" style={{ height: "16px" }} />
              <p className="font-semibold">4. 과음 경고 문구</p>
              <span className="spacer vertical" style={{ height: "8px" }} />
              <ul className="text-gray-500 leading-7" style={{ listStyleType: '"*"' }}>
                <li>
                  지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신 중
                  음주는 기형아 출생 위험을 높입니다.
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
  );
};

export default SmartOrderFragment;

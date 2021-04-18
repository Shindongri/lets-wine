import { FC } from "react";

const WarningFragment: FC = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <article className="w-full px-4 py-5 max-w-screen-sm">
        <small className="text-xs leading-3">
          경고: 지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다.
          임신 중 음주는 기형아 출생 위험을 높입니다.
          <br />
          <span className="bg-black text-white">
            19세 미만 청소년에게 판매금지
          </span>
          &nbsp;부정 불량 식품은 국번없이 1399
        </small>
      </article>
    </section>
  );
};

export default WarningFragment;

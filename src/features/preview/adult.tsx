import { FC } from "react";

const AdultFragment: FC = () => {
  return (
    <div className="w-full mb-4">
      <div
        className="w-full h-32 text-base flex justify-between items-center px-6 py-5 box-border relative"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="h-full flex flex-col justify-between">
          <p>회원가입시 성인인증을 완료했다면 -</p>
          <a
            className="block text-center px-6 py-2.5 border rounded-xl bg-gray-0 hover:bg-gray-100"
            href="/"
            style={{ borderColor: "#dadada" }}
          >
            계속 이용하기
          </a>
        </div>
        <img
          className="absolute w-40 right-5 bottom-0"
          src="http://wineplz.cafe24.com/web/upload/img/pro_ok3.svg"
        />
      </div>
      <div
        className="w-full"
        style={{ height: "1px", backgroundColor: "#dadada" }}
      />
      <div
        className="w-full h-32 text-base flex justify-between items-center px-6 py-5 box-border relative"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="h-full flex flex-col justify-between">
          <p>
            회원가입시 <b>성인인증을 하지 않았다면 -</b>
          </p>
          <a
            className="block text-center px-6 py-2.5 border rounded-xl text-white bg-gray-800 hover:bg-gray-700"
            href="/"
          >
            인증하러 가기
          </a>
        </div>
        <img
          className="absolute w-24 right-8 bottom-0"
          src="http://wineplz.cafe24.com/web/upload/img/pro_go3.svg"
        />
      </div>
      <div
        className="w-full px-6 py-5 box-border"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className="flex items-center">
          <img
            className="w-5 h-5"
            src="http://wineplz.cafe24.com/web/upload/img/19con.svg"
          />
          <h3 className="text-base font-bold p-2">
            주류의 통신판매에 관한 명령 위임 고시
          </h3>
        </div>
        <p className="text-sm break-all">
          관계법령에 따라 미성년자는 구매할 수 없으며, 19세 이상 성인인증을
          하셔야 구매 가능한 상품입니다.
        </p>
      </div>
    </div>
  );
};

export default AdultFragment;

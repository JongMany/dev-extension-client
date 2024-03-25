import PrivacyInformation from "@/app/(main)/profile/_components/PrivacyInformation";
import {auth} from "@/auth";

export default async function ProfileView() {
  const session = await auth();
  return (
      <>
        <div className="w-[100%] pb-4">
          <h2 className="text-lg font-bold">{session?.user.nickname}</h2>
          <p className="text-sm">{session?.user.email}</p>
        </div>
        <LineDivider/>
        <PrivacyInformation/>
        <LineDivider/>
        <section className="w-[100%] pt-4 mb-2">
          <h3 className="font-bold text-lg mb-1">자기소개</h3>
          <div className="w-[100%] px-2">
            <p className="max-h-[20vh] h-[20vh] overflow-y-scroll scrollbar-hide border-[1px] px-4 py-2 rounded-lg break-all whitespace-pre-line">
              저는 프론트엔드 개발자를 지망하는 학생입니다!
              HCCLab에서 개발 인턴을 하고 있으며,
              항해 플러스에서 매주 공부를 하고 있습니다!
              연락은 blackberry1114@naver.com으로 메일 주시면 3일 내로 연락드리겠습니다!
              인스타도 운영중이에요~!
            </p>
          </div>
        </section>
      </>
  );
}

function LineDivider() {
  return <hr className=" border-b-[1px] w-[100%]"/>
}
import DashBoardTile from "../components/DashBoardTile";

function DashBoard() {
  const prePaid = ["처리되지 않은 환불 신청 내역이 있습니다."];
  const webDiscount = [
    "상점 '통합' , '광평천3' , 'KT구미역플라자' , '원평가로' , '청담' , '풀하우스' , '구미역후면광장' , '광평1' , '임마누엘안마원' , 'test2' , '광평천5' , '구평동' , '퍼스트스토리' 이(가) 미승인 상태입니다.",
    "상점 '풀하우스' 에 부여된 할인권이 없습니다.",
    "할인권 '3시간' , '6시간' , '9시간' 에 등록된 마일리지 차감액 정보가 없습니다.",
    "사용자 'alskd0515' , 'avatar41' , 'bakus358' , 'g_jin' , 'geh7512' , 'gjwo921' , 'hm7870' , 'inplantkd66' , 'jang9111' , 'jcb3108' , 'jgy3147' , 'kes6674' , 'kilminjung77' , 'kkh999' , 'kmk0524' , 'ldstanic' , 'ljs6418' , 'lppkb' , 'nda2714' , 'onestep2' , 'oryun7710' , 'qnd1004' , 'ranloveyou82' , 'silver02' , 'sky0523' , 'so0528' , 'sojeong0111' , 'sorrow0429' , 'ygtheboy' 의 웹할인 서비스 증빙 자료가 미확인 상태입니다.",
  ];
  const seasonPass = [
    "주차장 '구미시청' 의 정기권 결제 정보가 없습니다.",
    "처리되지 않은 환불 신청 내역이 있습니다.",
  ];
  const parkingIntegration = ["전송실패 내역이 있습니다."];

  return (
    <div className="main-wrap dash-board-wrap">
      <div className="main-content">
        <DashBoardTile title="주차포털" />
        <DashBoardTile title="무정차정산" />
        <DashBoardTile title="미납결제" />
        <DashBoardTile title="비대면자격확인" />
        <DashBoardTile title="사전결제" tasks={prePaid} />
        <DashBoardTile title="웹할인" tasks={webDiscount} />
        <DashBoardTile title="정기권" tasks={seasonPass} />
        <DashBoardTile title="할인사전등록" />
        <DashBoardTile title="주차시스템연동" tasks={parkingIntegration} />
      </div>
    </div>
  );
}
export default DashBoard;

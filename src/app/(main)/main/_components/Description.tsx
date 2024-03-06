export default function Description() {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <h1 className="py-10 font-bold text-2xl flex justify-center">
        어떤 장점이 있을까요?
      </h1>
      <article className="min-h-96">
        <h2 className="font-bold text-lg">
          1. 시간을 기록하여 시각적인 대시보드를 제작해줍니다.
        </h2>
        {/* 시간 기록 이미지 */}
      </article>
      <article className="min-h-96">
        <h2 className="font-bold text-lg">
          2. 목표를 기록하고, 달성하는 것을 눈으로 측정할 수 있습니다.
        </h2>
      </article>
      <article className="min-h-96">
        <h2 className="font-bold text-lg">
          3. 랭킹을 통해 성취감을 고취시킬 수 있습니다.
        </h2>
      </article>
      <article className="min-h-96">
        <h2 className="font-bold text-lg">
          4. 매주 리포트를 통해 개발 시간을 분석할 수 있습니다.
        </h2>
      </article>
    </section>
  );
}

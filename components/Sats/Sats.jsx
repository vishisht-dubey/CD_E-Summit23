export default function StatisticsSimpleLight() {
  return (
    <>
      {/* Stats Section: Simple */}
      <div className="bg-dark">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x">
            <dl className="space-y-1 p-5">
              <dt className="text-4xl font-extrabold">1,700+</dt>
              <dd className="text-sm uppercase tracking-wide font-semibold text-orange-600">
                Enthusiastic CD’s Onboarded
              </dd>
            </dl>
            <dl className="space-y-1 p-5">
              <dt className="text-4xl font-extrabold">2,500+</dt>
              <dd className="text-sm uppercase tracking-wide font-semibold text-orange-600">
                Clients
              </dd>
            </dl>
            <dl className="space-y-1 p-5">
              <dt className="text-4xl font-extrabold">250+</dt>
              <dd className="text-sm uppercase tracking-wide font-semibold text-orange-600">
                Colleges supported till date!
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {/* END Stats Section: Simple */}
    </>
  );
}

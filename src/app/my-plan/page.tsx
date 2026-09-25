import PlanStats from "@/components/my-plan/PlanStats";
import PlanTabs from "@/components/my-plan/PlanTabs";

const MyPlanPage = () => {
  return (
    <div className=" min-h-screen bg-[#0B0D0F] py-16 lg:py-20">
      <div className="container-main ">

        <div className="mb-10">
        
          <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
            My Plan
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <PlanStats />

        <PlanTabs />

      </div>
    </div>
  );
};

export default MyPlanPage;
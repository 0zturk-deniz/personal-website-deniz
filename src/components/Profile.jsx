import denizozturkprofile2 from '../assets/denizozturkprofile2.jpeg';

export default function Profile() {
  return (
    <section className="h-max bg-[#4731D3] px-40 py-20 font-inter">
      
      <h1 className="text-5xl font-semibold text-[#CBF281] mb-10">Profile</h1>

      <div className="flex flex-row gap-20">
    
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl text-white mb-4">Basic Information</h2>

          <div className="grid grid-cols-[90px_1fr] gap-y-4 text-sm text-white">
            <p className="text-[#CBF281] font-semibold">Birthday</p>
            <p className="font-light">14.03.1990</p>

            <p className="text-[#CBF281] font-semibold">Residency</p>
            <p className="font-light">İstanbul</p>

            <p className="text-[#CBF281] font-semibold">Education</p>
            <div>
              <p className="font-light">Mimar Sinan Fine Arts University</p>
              <p className="font-light">Urban Planning Master's, 2018</p>
            </div>

            <p className="text-[#CBF281] font-semibold">Preferred<br />Role</p>
            <p className="font-light">Frontend, UI, Tester</p>
          </div>
        </div>

        
        <div>
          <img
            src={denizozturkprofile2}
            alt="deniz ozturk profile photo"
            className="rounded-xl w-72 aspect-square object-cover"
          />
        </div>
          
        <div className='w-72'>
        <p className="text-2xl text-white mb-4">About Me</p>
            <p className="font-light text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
          </div>
        
      </div>
    </section>
  );
}

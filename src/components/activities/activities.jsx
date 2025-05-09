import Activity from '@/components/activity'

const Activities = () => {
  // const isOdd = index % 2 != 0;

  return(
    <div className='flex flex-col gap-24 p-10'>
      <h1 className="text-4xl font-bold text-center">Our Activities</h1>
      <Activity index={0} />
      <Activity index={1} />
      <Activity index={2} />
    </div>
  )
}

export default Activities;
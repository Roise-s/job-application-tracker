import DrawerComponent from "@/subpages/DrawerComponent"
import Home1st from "@/subpages/Home1st"
import Home2nd from "@/subpages/Home2nd"
import Home3nd from "@/subpages/Home3nd"
import PreviewDrawer from "@/subpages/PreviewDrawer"

const Home = () => {
  return (
    <>
        <Home1st />
        <Home2nd />
        <DrawerComponent />
        <PreviewDrawer />
        <Home3nd />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
    </>
  )
}

export default Home

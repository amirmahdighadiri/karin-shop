import maintenanceImage from '../../assets/images/maintenance/maintenance.png'

function Maintenance(props) {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <div className="">
                <img src={maintenanceImage} alt="Maintenance" className=""/>
            </div>
            <h2 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100 text-2xl text-center">سایت در حال بروزرسانی میباشد.</h2>
            <p className="text-blue-400 text-center">ما به زودی باز حواهیم گشت!</p>
        </section>
    );
}

export default Maintenance;
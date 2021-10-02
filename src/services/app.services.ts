export default class AppServices {
    private static instance : AppServices;

    static getInstance() : AppServices {
        if(!AppServices.instance){
            AppServices.instance = new AppServices();
        }

        return AppServices.instance;
    }

    // TODO
}
export const getLocation = () => {
    const { geolocation } = navigator;

    return new Promise((resolve, reject) => {
        if (!geolocation) {
            reject('Not Supported');
        }

        geolocation.getCurrentPosition((position) => {
            resolve(position);
        }, () => {
            reject('Permission denied');
        });
    });
};

const PROVINCE_API = 'https://provinces.open-api.vn/api/depth==2'

export function getProvince() {
    return axios.get(PROVINCE_API)
}

export default { getProvince }

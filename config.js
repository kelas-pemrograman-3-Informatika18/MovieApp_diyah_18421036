const requestResponse = {
    gagal: (pesan) => {
      return {
          sukses:  false,
          pesan: pesan
      }
    },
    sukses: (pesan) => {
        return {
          sukses: true,
          pesan: pesan
        }
    },
    serverError: {
        sukses: false,
        pesan: 'Terjadi Kesalahan Server'
    },
    suksesLogin: (data) => {
      return {
        sukses: true,
        pesan: 'Sukses Login',
        data: data
      }
    },
    suksesWithData: (data) => {
      return {
        sukses: true,
        pesan: 'sukses memuat data',
        data: data
      }
    }
}

module.exports = { requestResponse }

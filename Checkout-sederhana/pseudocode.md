FUNCTION hitungCheckout(harga, jumlah, isMember)

    IF harga bukan angka finite ATAU harga <= 0
        RETURN pesan error harga tidak valid
    END IF

    IF jumlah bukan bilangan bulat ATAU jumlah <= 0
        RETURN pesan error jumlah tidak valid
    END IF

    IF isMember bukan boolean
        RETURN pesan error status member tidak valid
    END IF

    subtotal = harga * jumlah

    IF isMember = true
        diskon = subtotal * 0.10
    ELSE
        diskon = 0
    END IF

    totalSetelahDiskon = subtotal - diskon

    IF totalSetelahDiskon >= 250000
        ongkosKirim = 0
    ELSE
        ongkosKirim = 15000
    END IF

    totalPembayaran = totalSetelahDiskon + ongkosKirim

    RETURN subtotal, diskon, totalSetelahDiskon,
           ongkosKirim, totalPembayaran

END FUNCTION
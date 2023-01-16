import PayWithCardIcon from '../assets/paywithcardicon.svg'
import CardTypeLogo from '../assets/cardtypelogo.svg'
import OrangeAfricellicon from '../assets/paywithorange-africellicon.svg'
import OrangeLogo from '../assets/orangemobilelogo.svg'
import UcardWalletIcon from '../assets/paywithucardwalleticon.svg'
import UcardWalletLogo from '../assets/ucardwalletlogo.svg'
import AfricellLogo from '../assets/africelllogo.svg'
import UssdIcon from '../assets/paywithussdicon.svg'
import BankTransferIcon from '../assets/paywithbanktransfericon.svg'



export const PaymentOptionData = [
    {
        id: 1,
        icon: PayWithCardIcon,
        header: 'Pay With Card',
        paragraph: 'Make payment instantly with your debit/credit card ',
        logo: CardTypeLogo
    },

    {
        id: 2,
        icon: OrangeAfricellicon,
        header: 'Pay With Orange Mobile',
        paragraph: 'Make payment using Orange money',
        logo: OrangeLogo
    },

    {
        id: 3,
        // icon: UcardWalletIcon,
        icon: PayWithCardIcon,
        header: 'Pay With Ucard Wallet',
        paragraph: 'Connect your Ucard wallet to make payment instantly',
        logo: UcardWalletLogo
    },

    {
        id: 4,
        icon: OrangeAfricellicon,
        header: 'Pay With Africell',
        paragraph: 'Make payment from your mobile phone with africell',
        logo: AfricellLogo
    },

    {
        id: 5,
        // icon: UssdIcon,
        icon: PayWithCardIcon,
        header: 'Pay With #USSD',
        paragraph: 'Make payment instantly with USSD',
        logo: ''
    },

    {
        id: 6,
        // icon: BankTransferIcon,
        icon: PayWithCardIcon,
        header: 'Pay With Bank Transfer',
        paragraph: 'Transfer from your bank to make payment.',
        logo: ''
    }
]
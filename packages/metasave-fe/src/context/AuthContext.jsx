// import React from 'react'
// //import { Web3Auth } from '@web3auth/modal'
// import {  WEB3AUTH_NETWORK } from '@web3auth/base'
// import { Web3Auth} from "@web3auth/modal";
// //import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
// //import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider'
// // import { identityCreation } from "../helpers/PolygonID";
// import axios from 'axios'
// import { getWalletProvider } from '../helpers/walletProvider.js'
// import { addresses } from '../constants/addresses.js'
// import { abi } from '../abi/index.js'
// // import {
// //   LightSmartContractAccount,
// //   getDefaultLightAccountFactoryAddress,
// // } from '@alchemy/aa-accounts'
// // import { AlchemyProvider } from '@alchemy/aa-alchemy'
// import { LocalAccountSigner } from '@alchemy/aa-core'
// import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
// import { defineChain } from 'viem'
// // import { sepolia } from "viem/chains";
// import { useMainContext } from './MainContext.jsx'
// import keccak256 from 'keccak256'

// const AuthContext = React.createContext()

// // abhinav_priv = 220122697681ad9a47dfbbbe44ebf54eb0a091e88257fac94454d316bac07e3d
// // alosh_priv = 232f51a0bc36bcc2fdd76b7bdc25da572cd75621dc1d91feed35d298fc13c3d4

// // abhinav_cf = 0x0cBe46cDA9015E0fd8704249C2FCDAfbE2507550
// // alosh_cf = 0xa09C36E28F91Bab16A6A721c8Bd32888eF541b6f


// const user_type = localStorage.getItem('userType')


// const sepolia = /*#__PURE__*/ defineChain({
//   id: 11_155_111,
//   name: 'Sepolia',
//   nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
//   rpcUrls: {
//     default: {
//       http: ['https://rpc.sepolia.org'],
//     },
//     alchemy: {
//       http: ['https://eth-sepolia.g.alchemy.com/v2'],
//     },
//   },
//   blockExplorers: {
//     default: {
//       name: 'Etherscan',
//       url: 'https://sepolia.etherscan.io',
//       apiUrl: 'https://api-sepolia.etherscan.io/api',
//     },
//   },
//   contracts: {
//     multicall3: {
//       address: '0xca11bde05977b3631167028862be2a173976ca11',
//       blockCreated: 751532,
//     },
//     ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
//     ensUniversalResolver: {
//       address: '0xc8Af999e38273D658BE1b921b88A9Ddf005769cC',
//       blockCreated: 5_317_080,
//     },
//   },
//   testnet: true,
// })

// export const AuthContextProvider = async ({ children }) => {
//   //const [web3auth, setWeb3Auth] = React.useState(null)
//   const [loggedIn, setLoggedIn] = React.useState(false)
//   const [web3AuthProvider, setWeb3AuthProvider] = React.useState(null)
//   // const [pid, setPID] = React.useState(null)
//   const [walletAddress, setWalletAddress] = React.useState(null)
//   const [walletProvider, setWalletProvider] = React.useState(null)
//   const [AAProvider, setAAProvider] = React.useState(null)
//   const [CFAddress, setCFAddress] = React.useState(null)
//   const [privKey, setPrivKey] = React.useState(null)
//   const { serverUrl } = useMainContext()
//   const sepoliaChainConfig = {
//     chainNamespace: 'eip155',
//     chainId: '0xaa36a7',
//     rpcTarget: 'https://rpc.ankr.com/eth_sepolia',
//     displayName: 'Ethereum Sepolia Testnet',
//     blockExplorerUrl: 'https://sepolia.etherscan.io',
//     ticker: 'ETH',
//     tickerName: 'Ethereum',
//     logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
//   }

//   const web3auth = new Web3Auth({
//   clientId: "BHgArYmWwSeq21czpcarYh0EVq2WWOzflX-NTK-tY1-1pauPzHKRRLgpABkmYiIV_og9jAvoIxQ8L3Smrwe04Lw", // Get your Client ID from Web3Auth Dashboard
//   web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
//   chainConfig: sepoliaChainConfig // or WEB3AUTH_NETWORK.SAPPHIRE_DEVNET
// });

//   await web3auth.init();

//   // const initWeb3Auth = async () => {
//   //   const privateKeyProvider = new EthereumPrivateKeyProvider({
//   //     config: {
//   //       chainConfig: sepoliaChainConfig,
//   //     },
//   //   })

//     // const web3AuthContextConfig = {
//     //   web3AuthOptions: {
//     //     clientId: "BFiHPmMG2j8efngawFJ9tMtFSJEXjL5wBcQKEbj_DkaJsCEEqBFCMPNM-puy-d8nXTW2worPWPXBBDgTYgOiZBM",
//     //     web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
//     //     modalConfig: {
//     //       connectors: {
//     //        auth: {
//     //           label: "auth",
//     //           loginMethods: {
//     //             email_passwordless: {
//     //               name: "email passwordless login",
//     //               authConnectionId: "metasave-email",
//     //             },
//     //           },
//     //         },
//     //       },
//     //     },
//     //   },
//     // };
//     // const web3auth = new Web3Auth({
//     //   clientId:
//     //     'BFiHPmMG2j8efngawFJ9tMtFSJEXjL5wBcQKEbj_DkaJsCEEqBFCMPNM-puy-d8nXTW2worPWPXBBDgTYgOiZBM',
//     //   web3AuthNetwork: 'sapphire_devnet',
//     //   chainConfig: sepoliaChainConfig,
//     // })

    
//     // const openloginAdapter = new OpenloginAdapter({
//     //   adapterSettings: {
//     //     loginConfig: {
//     //       google: {
//     //         name: 'Google Login',
//     //         verifier: 'metasavegoogle',
//     //         typeOfLogin: 'google',
//     //         clientId:
//     //           '520715278627-me361rcvpltp7komu85qs98ubqg79tki.apps.googleusercontent.com',
//     //       },
//     //     },
//     //   },
//     //   privateKeyProvider,
//     // })

//     // web3auth.configureAdapter(openloginAdapter)

//     //await web3auth.initModal(web3AuthContextConfig)

//     //setWeb3Auth(web3auth)

//     //await checkLoggedIn(web3auth)
//   //}

//   const verifyProof = async (walletAddress, walletProvider, type) => {
//     try {
//       const priv_key = await walletProvider.getPrivateKey()
//       // const priv_key = user_type == 'user' ? '232f51a0bc36bcc2fdd76b7bdc25da572cd75621dc1d91feed35d298fc13c3d4' : '220122697681ad9a47dfbbbe44ebf54eb0a091e88257fac94454d316bac07e3d'
//       const CF = await getCFAddress(priv_key)

//       console.log('CFADdress: ', CF)

//       let status = {
//         status: 'not verified',
//         proceed: false,
//         newUser: false,
//       }

//       const privateKey = await walletProvider.getPrivateKey()
//       // const privateKey = user_type == 'user' ? '232f51a0bc36bcc2fdd76b7bdc25da572cd75621dc1d91feed35d298fc13c3d4' : '220122697681ad9a47dfbbbe44ebf54eb0a091e88257fac94454d316bac07e3d'
//       const ZKProof = await walletProvider.getContract(
//         addresses.ZKProof,
//         abi.ZKProof
//       )

//       let treeCID, treeRoot

//       try {
//         treeCID = await ZKProof.getMTIPFSid(1)
//       } catch (error) {
//         treeCID = ''
//       }

//       try {
//         treeRoot = await ZKProof.getMTRoot(1)
//       } catch (error) {
//         treeRoot = ''
//       }
//       // const treeCID = await ZKProof.getMTIPFSid(1)
//       // const treeRoot = await ZKProof.getMTRoot(1)

//       console.log('User TreeCID: ', treeCID)
//       console.log('User TreeRoot: ', treeRoot)

//       const msg = keccak256(privateKey).toString('hex')

//       console.log('Checking Merkle Tree...')
//       const res = await axios.post(
//         `${serverUrl}/userMerkletree`,
//         {
//           walletAddress,
//           msg,
//           treeCID,
//           CFAddress: CF,
//           type
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       )
//       if (res.data.newUser) {
//         console.log('New user detected!')
//         status = {
//           status: 'new user',
//           proceed: true,
//           newUser: true,
//         }
//         return status
//       } else {
//         console.log('User already exists! Verifying user...')
//         const proof = res.data.proof
//         console.log(res.data)
//         const verify = await ZKProof.verify(proof, walletAddress, `0x${msg}`, 1)
//         if (verify == true || verify == 'true') {
//           console.log('Verified user!')
//           status = {
//             status: 'verified',
//             proceed: true,
//             newUser: false,
//           }
//         } else {
//           console.log('Verified user!')
//           status = {
//             status: 'verified',
//             proceed: true,
//             newUser: false,
//           }
//         }
//         return status
//       }
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const login = async (type) => {
//     const web3authProvider = await web3auth?.connectTo(
//       WALLET_ADAPTERS.OPENLOGIN,
//       {
//         loginProvider: 'google',
//       }
//     )
//     console.log('web3authprovider: ', web3authProvider, error)
//     const walletProvider = getWalletProvider(web3authProvider)
//     const walletAddress = await walletProvider.getAddress()
//     const priv_key = await walletProvider.getPrivateKey()
//     // const priv_key = user_type == 'user' ? '232f51a0bc36bcc2fdd76b7bdc25da572cd75621dc1d91feed35d298fc13c3d4' : '220122697681ad9a47dfbbbe44ebf54eb0a091e88257fac94454d316bac07e3d'
//     console.log('priv_key', priv_key)
//     setWalletProvider(walletProvider)
//     setWalletAddress(walletAddress)
//     setWeb3AuthProvider(web3authProvider)
//     setPrivKey(priv_key)
//     localStorage.setItem('type', type);

//     const verify = await verifyProof(walletAddress, walletProvider, type)

//     console.log(verify)

//     if (verify.proceed == true) {
//       if (verify.newUser == true) {
//         window.location.replace(`/${localStorage.getItem('userType')}/register`)
//       } else {
//         setLoggedIn(web3auth?.status === 'connected' ? true : false)
//         const CF = getCFAddress(priv_key)
//         const MetaSave = await walletProvider.getContract(
//           addresses.MetaSave,
//           abi.MetaSave
//         )
//         let IPFSid = ''
//         try{
//           IPFSid = await MetaSave.getIPFSFileName(CF)
//         }catch(err){
//           if (!IPFSid) {
//             window.location.replace(`/${localStorage.getItem('userType')}/register`)
//           } else {
//             window.location.replace(`/${localStorage.getItem('userType')}/dashboard`)
//           }
//         }
//       }
//     } else if (verify.proceed == false) {
//       console.log('verification failed')
//       await web3auth.logout()
//     }
//   }

//   const getCFAddress = async (PRIV_KEY) => {
//     const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY
//     const GAS_MANAGER_POLICY_ID = import.meta.env.VITE_GAS_MANAGER_POLICY_ID
//     const ENTRY_POINT_ADDRESS = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'
//     const PRIVATE_KEY = `0x${PRIV_KEY}`

//     const chain = sepolia

//     const owner = LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY)

//     const AAProvider = await createModularAccountAlchemyClient({
//       apiKey: ALCHEMY_API_KEY,
//       chain,
//       signer: owner,
//       gasManagerConfig: {
//         policyId: GAS_MANAGER_POLICY_ID,
//       },
//     });
  
//     console.log(AAProvider.getAddress());

//     // const AAProvider = new AlchemyProvider({
//     //   apiKey: ALCHEMY_API_KEY,
//     //   chain,
//     //   entryPointAddress: ENTRY_POINT_ADDRESS,
//     // }).connect(
//     //   (rpcClient) =>
//     //     new LightSmartContractAccount({
//     //       rpcClient,
//     //       owner,
//     //       chain,
//     //       entryPointAddress: ENTRY_POINT_ADDRESS,
//     //       factoryAddress: getDefaultLightAccountFactoryAddress(chain),
//     //     })
//     // )

//     // AAProvider.withAlchemyGasManager({
//     //   policyId: GAS_MANAGER_POLICY_ID,
//     // })

//     let CFAddress = ''
//     // let CFAddress = user_type == 'user' ? '0xa09C36E28F91Bab16A6A721c8Bd32888eF541b6f' : '0x0cBe46cDA9015E0fd8704249C2FCDAfbE2507550'

//     try {
//       CFAddress = AAProvider.getAddress()
//       // CFAddress = await AAProvider.getAddress()
//     } catch (err) {
//       console.log('Error while trying to fetch CFAddress, fetching again')
//     }

//     console.log(CFAddress, AAProvider)

//     setCFAddress(CFAddress)
//     setAAProvider(AAProvider)

//     return CFAddress
//   }

//   const Logout = async () => {
//     if (web3auth) {
//       await web3auth.logout()
//       setLoggedIn(false)
//       window.location.replace('/')
//     }
//   }

//   const checkLoggedIn = async (web3auth) => {
//     console.log('checking if logged in')
//     if (web3auth?.status === 'connected') {
//       const web3AuthProvider = web3auth.provider
//       const walletProvider = getWalletProvider(web3AuthProvider)
//       const walletAddress = await walletProvider.getAddress()
//       const priv_key = await walletProvider.getPrivateKey()
//       // const priv_key = user_type == 'user' ? '232f51a0bc36bcc2fdd76b7bdc25da572cd75621dc1d91feed35d298fc13c3d4' : '220122697681ad9a47dfbbbe44ebf54eb0a091e88257fac94454d316bac07e3d'
//       console.log('priv_key', priv_key)

//       setPrivKey(priv_key)
//       setWalletProvider(walletProvider)
//       setWalletAddress(walletAddress)
//       setWeb3AuthProvider(web3AuthProvider)

//       getCFAddress(priv_key)

//       setLoggedIn(true)
//     } else {
//       console.log(web3auth?.status)
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         web3auth,
//         loggedIn,
//         web3AuthProvider,
//         walletAddress,
//         walletProvider,
//         AAProvider,
//         CFAddress,
//         privKey,
//         Logout,
//         checkLoggedIn,
//         setWeb3AuthProvider,
//         setLoggedIn,
//         login,
//         initWeb3Auth,
//         setWeb3Auth,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuthContext = () => React.useContext(AuthContext)

// import React from 'react'
// import { WEB3AUTH_NETWORK, WALLET_ADAPTERS } from '@web3auth/base'
// import { Web3Auth } from "@web3auth/modal";
// import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
// import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider'
// import axios from 'axios'
// import { getWalletProvider } from '../helpers/walletProvider.js'
// import { addresses } from '../constants/addresses.js'
// import { abi } from '../abi/index.js'
// import { LocalAccountSigner } from '@alchemy/aa-core'
// import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
// import { defineChain } from 'viem'
// import { useMainContext } from './MainContext.jsx'
// import keccak256 from 'keccak256'

// const AuthContext = React.createContext()

// const user_type = localStorage.getItem('userType')

// const sepolia = /*#__PURE__*/ defineChain({
//   id: 11_155_111,
//   name: 'Sepolia',
//   nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
//   rpcUrls: {
//     default: {
//       http: ['https://rpc.sepolia.org'],
//     },
//     alchemy: {
//       http: ['https://eth-sepolia.g.alchemy.com/v2'],
//     },
//   },
//   blockExplorers: {
//     default: {
//       name: 'Etherscan',
//       url: 'https://sepolia.etherscan.io',
//       apiUrl: 'https://api-sepolia.etherscan.io/api',
//     },
//   },
//   contracts: {
//     multicall3: {
//       address: '0xca11bde05977b3631167028862be2a173976ca11',
//       blockCreated: 751532,
//     },
//     ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
//     ensUniversalResolver: {
//       address: '0xc8Af999e38273D658BE1b921b88A9Ddf005769cC',
//       blockCreated: 5_317_080,
//     },
//   },
//   testnet: true,
// })

// export const AuthContextProvider = ({ children }) => {
//   const [web3auth, setWeb3Auth] = React.useState(null)
//   const [loggedIn, setLoggedIn] = React.useState(false)
//   const [web3AuthProvider, setWeb3AuthProvider] = React.useState(null)
//   const [walletAddress, setWalletAddress] = React.useState(null)
//   const [walletProvider, setWalletProvider] = React.useState(null)
//   const [AAProvider, setAAProvider] = React.useState(null)
//   const [CFAddress, setCFAddress] = React.useState(null)
//   const [privKey, setPrivKey] = React.useState(null)
//   const { serverUrl } = useMainContext()
  
//   const sepoliaChainConfig = {
//     chainNamespace: 'eip155',
//     chainId: '0xaa36a7',
//     rpcTarget: `https://eth-sepolia.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`,
//     displayName: 'Ethereum Sepolia Testnet',
//     blockExplorerUrl: 'https://sepolia.etherscan.io',
//     ticker: 'ETH',
//     tickerName: 'Ethereum',
//     logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
//   }

//   const initWeb3Auth = React.useCallback(async () => {
//     try {
//       const privateKeyProvider = new EthereumPrivateKeyProvider({
//         config: {
//           chainConfig: sepoliaChainConfig,
//         },
//       })

//       const web3authInstance = new Web3Auth({
//         clientId: "BHgArYmWwSeq21czpcarYh0EVq2WWOzflX-NTK-tY1-1pauPzHKRRLgpABkmYiIV_og9jAvoIxQ8L3Smrwe04Lw",
//         web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
//         chainConfig: sepoliaChainConfig,
//       });

//       // Use default configuration without custom login config
//       const openloginAdapter = new OpenloginAdapter({
//         privateKeyProvider,
//       })

//       web3authInstance.configureAdapter(openloginAdapter)

//       await web3authInstance.initModal();
//       setWeb3Auth(web3authInstance);
//       await checkLoggedIn(web3authInstance);
//     } catch (error) {
//       console.error('Web3Auth initialization failed:', error);
//     }
//   }, []);

//   React.useEffect(() => {
//     initWeb3Auth();
//   }, [initWeb3Auth]);

//   const verifyProof = async (walletAddress, walletProvider, type) => {
//     try {
//       const priv_key = await walletProvider.getPrivateKey()
//       const CF = await getCFAddress(priv_key)

//       console.log('CFADdress: ', CF)

//       let status = {
//         status: 'not verified',
//         proceed: false,
//         newUser: false,
//       }

//       const privateKey = await walletProvider.getPrivateKey()
//       const ZKProof = await walletProvider.getContract(
//         addresses.ZKProof,
//         abi.ZKProof
//       )

//       let treeCID, treeRoot

//       try {
//         treeCID = await ZKProof.getMTIPFSid(1)
//       } catch (error) {
//         treeCID = ''
//       }

//       try {
//         treeRoot = await ZKProof.getMTRoot(1)
//       } catch (error) {
//         treeRoot = ''
//       }

//       console.log('User TreeCID: ', treeCID)
//       console.log('User TreeRoot: ', treeRoot)

//       const msg = keccak256(privateKey).toString('hex')

//       console.log('Checking Merkle Tree...')
//       const res = await axios.post(
//         `${serverUrl}/userMerkletree`,
//         {
//           walletAddress,
//           msg,
//           treeCID,
//           CFAddress: CF,
//           type
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       )
//       if (res.data.newUser) {
//         console.log('New user detected!')
//         status = {
//           status: 'new user',
//           proceed: true,
//           newUser: true,
//         }
//         return status
//       } else {
//         console.log('User already exists! Verifying user...')
//         const proof = res.data.proof
//         console.log(res.data)
//         const verify = await ZKProof.verify(proof, walletAddress, `0x${msg}`, 1)
//         if (verify == true || verify == 'true') {
//           console.log('Verified user!')
//           status = {
//             status: 'verified',
//             proceed: true,
//             newUser: false,
//           }
//         } else {
//           console.log('Verified user!')
//           status = {
//             status: 'verified',
//             proceed: true,
//             newUser: false,
//           }
//         }
//         return status
//       }
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const login = async (type) => {
//     if (!web3auth) {
//       console.error('Web3Auth not initialized');
//       return;
//     }

//     try {
//       // Let Web3Auth handle the login provider selection through its modal
//       const web3authProvider = await web3auth.connect()
      
//       console.log('web3authprovider: ', web3authProvider)
//       const walletProvider = getWalletProvider(web3authProvider)
//       const walletAddress = await walletProvider.getAddress()
//       const priv_key = await walletProvider.getPrivateKey()
//       console.log('priv_key', priv_key)
//       setWalletProvider(walletProvider)
//       setWalletAddress(walletAddress)
//       setWeb3AuthProvider(web3authProvider)
//       setPrivKey(priv_key)
//       localStorage.setItem('type', type);

//       const verify = await verifyProof(walletAddress, walletProvider, type)

//       console.log(verify)

//       if (verify.proceed == true) {
//         if (verify.newUser == true) {
//           window.location.replace(`/${localStorage.getItem('userType')}/register`)
//         } else {
//           setLoggedIn(web3auth?.status === 'connected' ? true : false)
//           const CF = await getCFAddress(priv_key)
//           const MetaSave = await walletProvider.getContract(
//             addresses.MetaSave,
//             abi.MetaSave
//           )
//           let IPFSid = ''
//           try{
//             IPFSid = await MetaSave.getIPFSFileName(CF)
//             if (!IPFSid) {
//               window.location.replace(`/${localStorage.getItem('userType')}/register`)
//             } else {
//               window.location.replace(`/${localStorage.getItem('userType')}/dashboard`)
//             }
//           }catch(err){
//             window.location.replace(`/${localStorage.getItem('userType')}/register`)
//           }
//         }
//       } else if (verify.proceed == false) {
//         console.log('verification failed')
//         await web3auth.logout()
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   }

//   const getCFAddress = async (PRIV_KEY) => {
//     const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY
//     const GAS_MANAGER_POLICY_ID = import.meta.env.VITE_GAS_MANAGER_POLICY_ID
//     const PRIVATE_KEY = `0x${PRIV_KEY}`

//     const chain = sepolia

//     const owner = LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY)

//     const AAProvider = await createModularAccountAlchemyClient({
//       apiKey: ALCHEMY_API_KEY,
//       chain,
//       signer: owner,
//       gasManagerConfig: {
//         policyId: GAS_MANAGER_POLICY_ID,
//       },
//     });
  
//     console.log(AAProvider.getAddress());

//     let CFAddress = ''

//     try {
//       CFAddress = await AAProvider.getAddress()
//     } catch (err) {
//       console.log('Error while trying to fetch CFAddress, fetching again')
//     }

//     console.log(CFAddress, AAProvider)

//     setCFAddress(CFAddress)
//     setAAProvider(AAProvider)

//     return CFAddress
//   }

//   const Logout = async () => {
//     if (web3auth) {
//       await web3auth.logout()
//       setLoggedIn(false)
//       window.location.replace('/')
//     }
//   }

//   const checkLoggedIn = async (web3authInstance) => {
//     console.log('checking if logged in')
//     const authInstance = web3authInstance || web3auth;
//     if (authInstance?.status === 'connected') {
//       const web3AuthProvider = authInstance.provider
//       const walletProvider = getWalletProvider(web3AuthProvider)
//       const walletAddress = await walletProvider.getAddress()
//       const priv_key = await walletProvider.getPrivateKey()
//       console.log('priv_key', priv_key)

//       setPrivKey(priv_key)
//       setWalletProvider(walletProvider)
//       setWalletAddress(walletAddress)
//       setWeb3AuthProvider(web3AuthProvider)

//       await getCFAddress(priv_key)

//       setLoggedIn(true)
//     } else {
//       console.log(authInstance?.status)
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         web3auth,
//         loggedIn,
//         web3AuthProvider,
//         walletAddress,
//         walletProvider,
//         AAProvider,
//         CFAddress,
//         privKey,
//         Logout,
//         checkLoggedIn,
//         setWeb3AuthProvider,
//         setLoggedIn,
//         login,
//         initWeb3Auth,
//         setWeb3Auth,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuthContext = () => React.useContext(AuthContext)

// import React from 'react'
// import { WEB3AUTH_NETWORK, WALLET_ADAPTERS } from '@web3auth/base'
// import { Web3Auth } from "@web3auth/modal";
// import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
// import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider'
// import axios from 'axios'
// import { getWalletProvider } from '../helpers/walletProvider.js'
// import { addresses } from '../constants/addresses.js'
// import { abi } from '../abi/index.js'
// import { LocalAccountSigner } from '@alchemy/aa-core'
// import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
// import { defineChain } from 'viem'
// import { useMainContext } from './MainContext.jsx'
// import keccak256 from 'keccak256'

// const AuthContext = React.createContext()

// const user_type = localStorage.getItem('userType')

// const sepolia = /*#__PURE__*/ defineChain({
//   id: 11_155_111,
//   name: 'Sepolia',
//   nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
//   rpcUrls: {
//     default: {
//       http: ['https://rpc.sepolia.org'],
//     },
//     alchemy: {
//       http: ['https://eth-sepolia.g.alchemy.com/v2'],
//     },
//   },
//   blockExplorers: {
//     default: {
//       name: 'Etherscan',
//       url: 'https://sepolia.etherscan.io',
//       apiUrl: 'https://api-sepolia.etherscan.io/api',
//     },
//   },
//   contracts: {
//     multicall3: {
//       address: '0xca11bde05977b3631167028862be2a173976ca11',
//       blockCreated: 751532,
//     },
//     ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
//     ensUniversalResolver: {
//       address: '0xc8Af999e38273D658BE1b921b88A9Ddf005769cC',
//       blockCreated: 5_317_080,
//     },
//   },
//   testnet: true,
// })

import React from 'react'
import { WEB3AUTH_NETWORK, WALLET_ADAPTERS } from '@web3auth/base'
import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider'
import axios from 'axios'
import { getWalletProvider } from '../helpers/walletProvider.js'
import { addresses } from '../constants/addresses.js'
import { abi } from '../abi/index.js'
import { LocalAccountSigner } from '@alchemy/aa-core'
import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { defineChain } from 'viem'
import { useMainContext } from './MainContext.jsx'
import keccak256 from 'keccak256'

const AuthContext = React.createContext()

const user_type = localStorage.getItem('userType')

const sepolia = /*#__PURE__*/ defineChain({
  id: 11_155_111,
  name: 'Sepolia',
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia.org'],
    },
    alchemy: {
      http: ['https://eth-sepolia.g.alchemy.com/v2'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://sepolia.etherscan.io',
      apiUrl: 'https://api-sepolia.etherscan.io/api',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 751532,
    },
    ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
    ensUniversalResolver: {
      address: '0xc8Af999e38273D658BE1b921b88A9Ddf005769cC',
      blockCreated: 5_317_080,
    },
  },
  testnet: true,
})

export const AuthContextProvider = ({ children }) => {
  const [web3auth, setWeb3Auth] = React.useState(null)
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [web3AuthProvider, setWeb3AuthProvider] = React.useState(null)
  const [walletAddress, setWalletAddress] = React.useState(null)
  const [walletProvider, setWalletProvider] = React.useState(null)
  const [AAProvider, setAAProvider] = React.useState(null)
  const [CFAddress, setCFAddress] = React.useState(null)
  const [privKey, setPrivKey] = React.useState(null)
  const [isInitializing, setIsInitializing] = React.useState(true)
  const { serverUrl } = useMainContext()
  
  // Updated chain configuration with better RPC endpoints
  const sepoliaChainConfig = {
    chainNamespace: 'eip155',
    chainId: '0xaa36a7', // 11155111 in hex
    rpcTarget: `https://eth-sepolia.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`, // More reliable RPC
    displayName: 'Ethereum Sepolia Testnet',
    blockExplorerUrl: 'https://sepolia.etherscan.io',
    ticker: 'ETH',
    tickerName: 'Ethereum',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  }

  const initWeb3Auth = React.useCallback(async () => {
    if (web3auth) return; // Prevent re-initialization
    
    try {
      setIsInitializing(true);
      
      // Create private key provider with proper configuration
      const privateKeyProvider = new EthereumPrivateKeyProvider({
        config: {
          chainConfig: sepoliaChainConfig,
        },
      })

      // Initialize Web3Auth with proper configuration
      const web3authInstance = new Web3Auth({
        clientId: "BFiHPmMG2j8efngawFJ9tMtFSJEXjL5wBcQKEbj_DkaJsCEEqBFCMPNM-puy-d8nXTW2worPWPXBBDgTYgOiZBM",
        web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
        chainConfig: sepoliaChainConfig,
        uiConfig: {
          appName: "MetaSave",
          theme: {
            primary: "#7ed321",
          },
          mode: "light",
          logoLight: "https://web3auth.io/images/web3authlog.png",
          logoDark: "https://web3auth.io/images/web3authlogodark.png",
          defaultLanguage: "en",
          loginGridCol: 3,
          primaryButton: "externalLogin",
        },
      });

      
      const openloginAdapter = new OpenloginAdapter({
        privateKeyProvider,
        adapterSettings: {
          uxMode: "popup", 
          whiteLabel: {
            appName: "MetaSave",
            logoLight: "https://web3auth.io/images/web3authlog.png",
            logoDark: "https://web3auth.io/images/web3authlogodark.png",
            defaultLanguage: "en",
            mode: "light",
          },
          loginConfig: {
            
            google: {
              name: "google",
              verifier: "metasavegoogle",
              typeOfLogin: "google",
              clientId: "520715278627-me361rcvpltp7komu85qs98ubqg79tki.apps.googleusercontent.com",
            },
          },
        },
      })

      web3authInstance.configureAdapter(openloginAdapter)

      // Initialize with timeout
      await Promise.race([
        web3authInstance.initModal(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Web3Auth initialization timeout')), 30000)
        )
      ]);

      setWeb3Auth(web3authInstance);
      await checkLoggedIn(web3authInstance);
      setIsInitializing(false);
    } catch (error) {
      console.error('Web3Auth initialization failed:', error);
      setIsInitializing(false);
      
    }
  }, []);

  React.useEffect(() => {
    initWeb3Auth();
  }, [initWeb3Auth]);

  const verifyProof = async (walletAddress, walletProvider, type) => {
    try {
      const priv_key = await walletProvider.getPrivateKey()
      const CF = await getCFAddress(priv_key)

      console.log('CFADdress: ', CF)

      let status = {
        status: 'not verified',
        proceed: false,
        newUser: false,
      }

      const privateKey = await walletProvider.getPrivateKey()
      const ZKProof = await walletProvider.getContract(
        addresses.ZKProof,
        abi.ZKProof
      )

      let treeCID, treeRoot

      try {
        treeCID = await ZKProof.getMTIPFSid(1)
      } catch (error) {
        treeCID = ''
      }

      try {
        treeRoot = await ZKProof.getMTRoot(1)
      } catch (error) {
        treeRoot = ''
      }

      console.log('User TreeCID: ', treeCID)
      console.log('User TreeRoot: ', treeRoot)

      const msg = keccak256(privateKey).toString('hex')

      console.log('Checking Merkle Tree...')
      const res = await axios.post(
        `${serverUrl}/userMerkletree`,
        {
          walletAddress,
          msg,
          treeCID,
          CFAddress: CF,
          type
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (res.data.newUser) {
        console.log('New user detected!')
        status = {
          status: 'new user',
          proceed: true,
          newUser: true,
        }
        return status
      } else {
        console.log('User already exists! Verifying user...')
        const proof = res.data.proof
        console.log(res.data)
        const verify = await ZKProof.verify(proof, walletAddress, `0x${msg}`, 1)
        if (verify == true || verify == 'true') {
          console.log('Verified user!')
          status = {
            status: 'verified',
            proceed: true,
            newUser: false,
          }
        } else {
          console.log('Verified user!')
          status = {
            status: 'verified',
            proceed: true,
            newUser: false,
          }
        }
        return status
      }
    } catch (err) {
      console.log(err)
      return {
        status: 'error',
        proceed: false,
        newUser: false,
      }
    }
  }

  const login = async (type) => {
    if (!web3auth) {
      console.error('Web3Auth not initialized');
      return;
    }

    if (isInitializing) {
      console.error('Web3Auth is still initializing');
      return;
    }

    try {
      console.log('Starting login process...');
      
      
      const web3authProvider = await web3auth.connectTo(
        WALLET_ADAPTERS.OPENLOGIN,
        {
          loginProvider: 'google',
        }
      );
      
      if (!web3authProvider) {
        throw new Error('Failed to get Web3Auth provider');
      }

      console.log('web3authprovider: ', web3authProvider)
      const walletProvider = getWalletProvider(web3authProvider)
      const walletAddress = await walletProvider.getAddress()
      const priv_key = await walletProvider.getPrivateKey()
      console.log('priv_key', priv_key)
      
      setWalletProvider(walletProvider)
      setWalletAddress(walletAddress)
      setWeb3AuthProvider(web3authProvider)
      setPrivKey(priv_key)
      
      //localStorage.setItem('type', type);
      localStorage.setItem('userType', type);

      const verify = await verifyProof(walletAddress, walletProvider, type)

      console.log('Verification result:', verify)
      console.log('UserType from localStorage:', localStorage.getItem('userType'))

      if (verify?.proceed == true) {
        if (verify.newUser == true) {
          console.log('Redirecting new user to register')
          window.location.replace(`/${localStorage.getItem('userType')}/register`)
        } else {
          setLoggedIn(web3auth?.status === 'connected' ? true : false)
          const CF = await getCFAddress(priv_key)
          const MetaSave = await walletProvider.getContract(
            addresses.MetaSave,
            abi.MetaSave
          )
          let IPFSid = ''
          try{
            IPFSid = await MetaSave.getIPFSFileName(CF)
            console.log('IPFS ID:', IPFSid)
            if (!IPFSid) {
              console.log('No IPFS ID found, redirecting to register')
              window.location.replace(`/${localStorage.getItem('userType')}/register`)
            } else {
              console.log('IPFS ID found, redirecting to dashboard')
              window.location.replace(`/${localStorage.getItem('userType')}/dashboard`)
            }
          }catch(err){
            console.log('Error getting IPFS ID:', err)
            window.location.replace(`/${localStorage.getItem('userType')}/register`)
          }
        }
      } else if (verify?.proceed == false) {
        console.log('verification failed')
        await web3auth.logout()
      }
    } catch (error) {
      console.error('Login failed:', error);
      
      
      if (error.message.includes('User closed the modal')) {
        console.log('User cancelled login');
        return;
      }
      
      if (error.message.includes('JSON-RPC error')) {
        console.error('RPC connection error. Please try again.');
        
      }
      
      
      try {
        if (web3auth && web3auth.status === 'connected') {
          await web3auth.logout();
        }
      } catch (logoutError) {
        console.error('Error during cleanup logout:', logoutError);
      }
    }
  }

  const getCFAddress = async (PRIV_KEY) => {
    const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY
    const GAS_MANAGER_POLICY_ID = import.meta.env.VITE_GAS_MANAGER_POLICY_ID
    const PRIVATE_KEY = `0x${PRIV_KEY}`

    const chain = sepolia

    try {
      const owner = LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY)

      const AAProvider = await createModularAccountAlchemyClient({
        apiKey: ALCHEMY_API_KEY,
        chain,
        signer: owner,
        gasManagerConfig: {
          policyId: GAS_MANAGER_POLICY_ID,
        },
      });
    
      console.log('AA Provider created successfully');

      let CFAddress = ''

      try {
        CFAddress = await AAProvider.getAddress()
        console.log('CF Address:', CFAddress);
      } catch (err) {
        console.log('Error while trying to fetch CFAddress:', err)
        throw err;
      }

      setCFAddress(CFAddress)
      setAAProvider(AAProvider)

      return CFAddress
    } catch (error) {
      console.error('Error creating AA provider:', error);
      throw error;
    }
  }

  const Logout = async () => {
    try {
      if (web3auth) {
        await web3auth.logout()
        setLoggedIn(false)
        
        
        setWeb3AuthProvider(null)
        setWalletAddress(null)
        setWalletProvider(null)
        setAAProvider(null)
        setCFAddress(null)
        setPrivKey(null)
        
        window.location.replace('/')
      }
    } catch (error) {
      console.error('Logout error:', error);
      // Force logout even if there's an error
      setLoggedIn(false)
      window.location.replace('/')
    }
  }

  const checkLoggedIn = async (web3authInstance) => {
    try {
      console.log('checking if logged in')
      const authInstance = web3authInstance || web3auth;
      
      if (authInstance?.status === 'connected') {
        const web3AuthProvider = authInstance.provider
        const walletProvider = getWalletProvider(web3AuthProvider)
        const walletAddress = await walletProvider.getAddress()
        const priv_key = await walletProvider.getPrivateKey()
        console.log('priv_key', priv_key)

        setPrivKey(priv_key)
        setWalletProvider(walletProvider)
        setWalletAddress(walletAddress)
        setWeb3AuthProvider(web3AuthProvider)

        await getCFAddress(priv_key)

        setLoggedIn(true)
      } else {
        console.log('Auth status:', authInstance?.status)
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        web3auth,
        loggedIn,
        web3AuthProvider,
        walletAddress,
        walletProvider,
        AAProvider,
        CFAddress,
        privKey,
        isInitializing,
        Logout,
        checkLoggedIn,
        setWeb3AuthProvider,
        setLoggedIn,
        login,
        initWeb3Auth,
        setWeb3Auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => React.useContext(AuthContext)
const signatures = [
  '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  '0x00ffB2153E8F2475328898Fdf9DF0Ee9D3cd92F4',
  '0x07614f667465eab927f07ea0c4f3223f0d5384c2b3c2649647a53cec06bf355001a627aee0875e66deef16e619b9ab7141d3d9d67b49177cbac268fe6c1c60961b',
  '0x442A09BCD6D2a367b7aa74a54790a249c549e136',
  '0x9277c21f44beb43df7b40ab00a3ed081bdabd9024a924a11676432a0e2eeb6937c7e62c363f69541ddad9d09f10a8ad604784c440aca0bff4621b58a3fac65951b',
  '0xb608CB37839D01E66AA4570BA24d643Bd5Fc6191',
  '0xa81fbf56fcc7e76625cdd2e7c2713ed58aa0393b49a922cadc84f4fe2951995b6ce2b3a9d25d624e09996aa5f09cf3f9c14a95f7f6e7758a8f75f4205527c33f1b',
  '0x007202940E4f8d3229a75088D1256015e3126dfE',
  '0xd1322a01a9bc4cadd3490646d6ca781082f0979dd9c6cd9082b95a5f6e8f7ee3038109d3d779ffab1b765b5de8576144aa1ec4de8a5815380fd6e5be2da035a71c',
  '0x00ffB2153E8F2475328898Fdf9DF0Ee9D3cd92F4',
  '0x07614f667465eab927f07ea0c4f3223f0d5384c2b3c2649647a53cec06bf355001a627aee0875e66deef16e619b9ab7141d3d9d67b49177cbac268fe6c1c60961b',
  '0x02c4A98CcDfcA694807554BEc1cFf46152b6d3d8',
  '0x82c7ee52c654838556b0131f154b4bd22921187545c2562fbdba9c0214ce08030c5b5d5a82ede2d6311730c8d1102de0ec2038fd82ffd1a173bf58b5565ce1291b',
  '0x0534A7bE39924fBa550c630C63b6a296c5C9Fea1',
  '0x4b9cf00f4c17760e3d5d5e31ce95d7a57dc2b46aae4313b5ee83b822e9e1c13434db0d4296206043ca03bdfb84daf2ce9c16709bf091881d86eb4ff76c0624b61b',
  '0x05784E362E2ca2e51cB8E5CBf0EdF19416Ec171a',
  '0xec864cd7da53739ac9f9201954fc2f61b0d3f596926361047e4cb7511658402d2e2ef7348b4d62373a2de21fe460908fdd7300cda9e102429d11013f8db57df11c',
  '0x2A1f9D2ab73f1Afff394D8CA2C2813731B964E61',
  '0xd83ce2d474397434d61ceb7d13d4dcfe382c1e41e0d3644169761a7d1fe96ff8154b3989e3b4d2e6e3b13f09db1c3d0d088c12fb9085e19858f829b9ef805cf11c',
  '0x2aC9dab7F65F2713871146f6C7B2d60a1aAA4F45',
  '0x37624d409e9e01b31b628c14aeac4cdbdefad73234e18706ec0d07528e28f67b43dab8992726bc2dff2d40673cf37643431b1eb3f87beebe759165fa1c58baa41c',
  '0x2c940eCbAC8A2FdC510746D69E52516e2B51378c',
  '0x37559e279716b331c74f5d5df82a4add04ffee9bc2ce1fc0363139016e159ca06c2f61bd9fba7db137f5bd7c2930b86b348ef044d1d3be119b708501466735821c',
  '0x2dbbadDaC5d5F99Caa892e2FA8a0990Bb9663A0D',
  '0x3ae6d6132e871da7d5394c66285f4c8d640e13e022a9585ec7bac252d99fcd764ccbe5124e90fb9abe55264d747c674ca9dbdb35830b451ba0e75159ddb4c9b51c',
  '0x31b611Edf7974a1E85f049D17d26B912aBFA3059',
  '0xb8fc9ef63be9f6b1e0e77ffcf366f7fb55907b5e3d74f57cf9f7061f608562c90a793e04709c2b7382738322739fafba1ae5f0a48821729d620a1b5fc887c2741b',
  '0x33678e563E130Ed39cFd7c122DDa3C7C8A3a1465',
  '0xed69e9f8c6017f0d407e3d9f62955fb670f22c7db45eece9dfb4cac52d6facf52c1eae6c0b675cfbda9eb97acd35efda5d33a84c0247f431a07a84cb4f9fcf8c1b',
  '0x3825957f9c078813904ab3b6ED003d5586530Eb7',
  '0xdf3c38dd2e3e38a5cc302c3b04b0cbb1c01485372985353f76a1a7ff845eaa795f45eff0eab1ac8de56ae0d88dc8bea6e0d85edbf21a643f1c0e030ddeb5ddab1b',
  '0x464132D57420c1b1fCc36F7979B1c5126a13A9C5',
  '0x8a524d3072202258d2930664e29bc942fad33a5abe7f7395de82f266086528ab06644f1817c4d3044e26d78854a4a41b9bdebaa60b14a5d1881f35c287b76ceb1c',
  '0x484dC39E96C70Bb3c8e6e616E84bD0d24db3e793',
  '0xbd6eb44a789aca29892ac326165d9ddaf81950c93f1400002ad6d34ccd5daf332e5a0540e0dd8c71fce7424cbc9cd39d8a9be95fc17d83e15a5111df536860041c',
  '0x48D007a8971Ab98A9697fb1a874891abEc0E8D82',
  '0xc254da60613a1b62090e4c7f30c84e8fcd9d8c77fc0deed802ec561f07e93c67450d58f450282f7a3932a2e4e4da795885fe41d407806e3a01c21e8c7389b70b1c',
  '0x4BEf6Bf035bF8041BCFfda1780b66F8132BBeF84',
  '0x2e11a1bec98aa39a2ef73b49fa6e154176def814292dd26b4ed5e1ef1ecd928131f89449444fab348a992a7a4281eccaad158053cae1c723cf12b4c9f014db411b',
  '0x4d11B18Ad18F96b6869AD0fC0405DAD5f2b999Ef',
  '0x19c764fbbbd098cc48462b1c679baea28d1713bcca6b26c5437e637f73b23f8c73d66391fb960be3d0505ae04e670ba369fbc5f1f3cc86ba7560c0129e14b29c1c',
  '0x4dd6ebe73CDBaFA26E1603f3De12f3a4df159835',
  '0xd1cb8ffb31c3aab48e79abb08abe2ac5783c2c927f1f3942c5cf08ad09c2a60835b5b67378fc63fdddfd5651b47b73688b77234933d9bc299f8be75d69b231721b',
  '0x5674D2535032f1172C3f6dFC6F18962281b17784',
  '0x226a8ef4acc7da43a0e01bb42eef28feb6361266d5f3be43d507fab9acf7d1811652fb732ed3f36f6ba2baa3bdc8be038d608faed0c0206406b3233eebfe3eac1b',
  '0x5F9F208f6F0903496FAbCEE0d5DE3D1F9a3C6EAd',
  '0x77dcaf9253f3a5668a24e560feda88a1ae8186185c64070351b4302a1288d20b474e8f04012344ab3fd51b547bbb9c0f8f60d27f54f56230400299d649f5520c1c',
  '0x65FFf0844474c9E3676701F959a93ac9aFb0AD96',
  '0xebfaeaabd9bd0f16c407b2a646222811ae0321cc22283f7736c37b19be8d505f0b99fde30c909cbe739660d3f47ee92060ebe4c5de9297b5c0f4223f0569f1411b',
  '0x68981e7e4E5853079B7dD13ADF15CEA220b170c7',
  '0x536c46d8afb9ed1e9805a82133531ccf0465e712826ec181c0002077c75f317a025d914296634a3d36b67073fc787e8e4a0bee89cb5424071d91eb472c5e52071b',
  '0x697Dc0e8A3b3e3758f59f32BE847b2290823dBC1',
  '0xa9a7690724ffdff2743b9e12561f3cf4e537f9ef21cfdb6675a06c5d88bbed5f41db9c59244269c295fbe948d64a0ea2f2f583b1ab713b257f3e47b66cdf13cb1b',
  '0x6A46582B7f6Fadd310fB0B02C633F7518CF76210',
  '0x45ac1eeda0e13d5a049688c4efeda53e1b4628613dc8621a091b11f2882ce7c20da89abbcd2301f7ee9cac5f3ff8b0c63466a5f9eedea52c5a060578879fb5ac1c',
  '0x6A96f451791c7E39D73d07111091175d9CD3b452',
  '0x20b03ca4b6d14ad78ca2b877ce0132535d8222403d70735b19ac4b67fa053e702111e4fa926cbcce78868608ca8ec4342c423faf0c14e9554b432c92f2045fef1b',
  '0x6D479ADc8C933480DE93cE243b053c581A2C7A8F',
  '0x6e47b157f72e8322a129d741ae9a7ddca80f83a069773177e7564f041435481e3d0bedf2f1bd6f475787421643f0655711e9fbf68d9dba0280d7594359d857a51c',
  '0x6FC69478327A11397bb73aFd32E3D4725882fc82',
  '0xa7c1e1fb5cad40d0c23ed0d8e75bae6878877be7f0b44217069bc01a66244c6403d4f2b57d3630b2785806c936f858c1ecfdf6c047025b89ad8a1d777d3fe7141b',
  '0x7a6651c84D768c8c6cB380B229e65590c0BD4D78',
  '0x98bd67d01b58569840c75353869056c97ee5c79ef9848452c454f4631644d5c008ac088045e75ba7311e01e38fd5cc1c0a9c86926e690232c3c1e29e47d11ac71c',
  '0x7C98Ff47EF2Fd51F57fd3d6B7f8a94Dd624bF8f7',
  '0x3276ab019fb1f0d415612da2d3345953a236c84ec8d032a2a3f45df361a4b3ed736c8e10c8ea7fe3c8e3c0cb2db174432fb419c1cd4d551f6f582363b54510071c',
  '0x7D3dA1d274ADb87855e8b70bE044e8f530fBDc75',
  '0x38cea4cb70b08a5e1cd071a71fec821a5493f17ac782ca7d5b3f8fd8005f7c9235133276a4ec4b71db7b0ecd94b491bf5e4534015b0fde70794d83a924d37ce11c',
  '0x7e1D1c945f40e6aB58717093F45086D3BEF15042',
  '0x106cc1ba62d334489b7539ebc03a9b9cd8f09368739d6aae4cdd5f235e16692a2bdde0b7cda211492cc96993217ac9eeb2800fb1dbe9096cff1e49755c1266061c',
  '0x7fb1372f665e8060834A2aBD59c64cA925141B8C',
  '0xe6921f9fcf4bf0183f3867823b56efc25a631a34584c3ee54071eee9f8c2a1e517908e1cd062fd6f5b4c14b05234cc18ee88c0870ee6e611c786d099c768b3631c',
  '0x83A9e7FCCb02a20E7ba0803a6dc74600803BB320',
  '0x5b9b495b52da43a622aa85bbaf5da6106cde53f7adff21d7cdc241b893e1a7f45d85d83289183fcd0247dac235068eefe84b518fd43013b3dba900c01c4fe0fb1b',
  '0x878a17144EC49F9eFC1E83903778c9C86e61aBdE',
  '0x8af94491ae0f9b06f935997f525c2b027d5b13014b8df070fed2d336a0d9fea96e8c7ab0c0b907535417fe6b47b066071d032d1a4a38ffc36b76886615bf79081c',
  '0x878F955C3B5E7C41b6eBbbcb61f0dd6B69DcDfcb',
  '0xc3cdb285a9a45458331dc235eb39a168920242add6fddd30ea52713b6a1b17150edb7ba8da42326095e0fb057f76a512bbf2125b5545694dbfbef3ea69306de21b',
  '0x8d39c1f5081bbC71241A15D58699767fa13D4ec6',
  '0x4051e79c31e7dbf247e5a6a3b9ec323358bb4ba0f520dfb1962f2fa247552c7a6754097402b2b95011b4cc65ff1e94df9ee96b004d1c73d434baee6c88a0740c1c',
  '0x8F926CFA7fFF4b2D17BCc49B48944B9Be9B8fC98',
  '0xb8e67cb93b3b5321a2b001602dbf47c2892d2802f077ee3e8d4edf6a0b0f72fd1611cbf08d0bb1f08fc05c3ce28be69a79751b153c846b394417e9bee2f311711c',
  '0x907414fe7c2A9c35863c6a1c6CeCDd29fADbB84D',
  '0x959bbea925cf5c60f45e2ec9c9481026114162146a74a2e22552047f4dc0347d4ee045f43c843352277ccfbfe7147e2ab0373199ec42bdd09aa984ad074b2d421b',
  '0x91DD53c05368a1528D2769E377AacE640Ac5e253',
  '0xde46bdf6c049f560c385b2d678c670f660e5efbccab7b5f8bd4732335ca5addf668b3f623102f014855e4f3e0e89c800c6bab6461300fef3b787e3153ce705211c',
  '0x925AC4D534cA317Ef4eF607722A574E890F1c13c',
  '0x4b802705278d191061886f5f7fae75475bb2bd7931c0c1540b55b5daaef19ac369f454ce74ccef84716929ebce772b6a5dd2b7fee5e8c5ddc490dd9325c5804f1b',
  '0x95fBa4a238922420F30ae920dE31BCe1347a502F',
  '0xca1be2ecfea783628990aa848ea93e7dad7183eca344346a1bd99d53d31d26324fe01474668873c880563cefb41a1ed678a8de82d79e8c64a4716bee805845a61c',
  '0x980b7B3908E20b2083cEDCaB07E722f91fFC9C6d',
  '0x6389cc16aad0da237a6361b8af50d99d11735c3040e97b016ade30cce470c027116e5cf12c4b3381d263e9cc23f894b2ba0f86649c99174e3ac3502de8c266441b',
  '0x99A0E41cd647C00146F66e77ab8eb4A09CD2FC64',
  '0x46d1e8b2a110422582347144d9eccf2a74da625f672e8c29ded8b1c08e221b906d2b50690986b131daff8c605c7e506e36bfb3cddf6ef554dd3e5005b37642c51c',
  '0x9Baf7C87825e382408a5C17D36af48d3c8A4756B',
  '0xf37c1248da19e40db6603308fbf2ad10838d858f27e4426394eb7d29ec34f74052a21e989d0d474f23b75288733f50a2696a99cabba710c764d50cb38e7060e21c',
  '0x9CE54F1F8F99Fc9E518C9663930C26330308F993',
  '0xd79ab76abb52ddb9fe301b910fae8cbd93e2be7a5db4e433304dc72c032e266b17c57a0e30c977c1196a3bc7902cf255ccbc1a6aec42d93cf3cb623713f1787a1c',
  '0xA442540F7365cCd43848C4B25576706A95fd3559',
  '0xc65e5036ff43517929e7bd24a49853b42d74b9fedfd304c718937895079fe79a6f96327e03c8bc6cb21974fd84ff370a5b7fd4943a07fa268fcf70fe8ea0b5481b',
  '0xA4C43b64547FEfd0b5D39139a042289F2Ffc0F44',
  '0xc66d5ae80a765a94bc3ef0b343c1bda0f99bccda5e69441aa3453154d6514ea5091183ca970ad293c8097cab4050db893c36666f9e5d5268b4f2b7fdd30784691b',
  '0xa6d31718Fb23EEaEce7cA295e924CA67CDdC6301',
  '0x8fd3c70edd091a2058b105f7ab07a40f34bd2a74ffe7eacbd9bd55d477f2024373fc5ad456d842ddf394d91f1d0aebc33f164ab35c0ad8fee8ae9826013e8c231c',
  '0xaE2646B00548c7622de9587f80d1fC4D78DfdAe8',
  '0xa1685eacb066ac3d9ad480380ca94b60837757c84f26b888ba07d4236a681d2b21d12a0feea40c269b15e0c5a5f0b8d207a774ef56c3baf9c056032a24567f241c',
  '0xB44fDdf39B6C3E2Ce564B3B26724bB11b0fC9B5B',
  '0xf6231b6ca764a7b55c8464f50acd6b839fbd81650e48ce4a8ba6b902887c009546a6f8b743770d1296ba1e877970e14ef2ae5972e7d392b4f0189df9db8179ff1c',
  '0xb5cA180081211730DD00d4fac6f4bEDF74e932Da',
  '0xfb12711026e6fdd0ddb6eb6dc012039b1cb2c0c5d39440694e4fd6606aa6960a188ccdcdfc4c632fe2708a832998be16818a4b9a1c3217fc7b6c4d0ffdefb6f91b',
  '0xb974a8510235e82A5eF4B24A5B22EC0f90dD40D8',
  '0xf93cae4adc90ca3043e5bbe1f26ba96cf9230aa5a27408b718403ca25531ae0415f24118a2a5cd4686db62799376c349058ecaadb1e29fc9d53ddb201e6fdb931b',
  '0xB9a08F3ef14E96438422E982F4cEf2DC23f67720',
  '0xf0c09bd70ffda1a086336e96378f8495496160f0032f6692e91b9172904cdedf59f8120a5bc0d65347ad81af07a63e085babd6bad52bfce5e2969d786f9315831c',
  '0xb9d62Df8643E0b6F236321F151B244c5c92d08d5',
  '0xcd08b9034bec5204fc3140021db22b49535ff4c5e933831cc1d0f3b6c54f53c01781ba0befecee5b1f7adf70c7c2fac339a8d192b92033cef93f4a82d07f33201c',
  '0xC459ac9058A95bAE2ceCc95c6cE607732C8E5C7F',
  '0xa394d8cc79d0902620a2c5393b77e2801d7b4027106fe006f7afb4714d87144402e17635544bc86fe24029e5492e591862f27c8dc0c4ab5eaf113a376afbcc851b',
  '0xc4795879b02091EDC192642A463d76A49D8CB4a6',
  '0xd90b9dba5d9fa7b31ac4bef877aebe5e672834d11667094db41efd97087e92ca2e822f0aec31c5ca4baf615a231b6fcf743368adad2012a8699e8ffc568ac9021b',
  '0xc6ddD3E9e2debb5247877Fc16160963682b6d1B3',
  '0xb5e74bf49d6b5aebe95422054846a3c1995c030dc02a9d07b1d4193741d8630239552f1f23a406055f3025efb4ede9370faf7ab5cd76f1ee78ae3cee9b54da711b',
  '0xCf1320fD381bFDfc9Ce76Cbe9806aAb1871244b4',
  '0x4b6d51f255e0c49ba0b9b476d67bd3cdacb7a527ad4362ff3c2f49e0ff354215109ef2030c5bc9a926080a47cff698fb225656a9f0c6b384dcf50a544e33f7731b',
  '0xCf3a4F6a29c8b135969Ef389C4fd4ad77f9d788C',
  '0x43612685727eb8bdcc76db9acb2682ed7b7e739ede9ddcaa37d4d95e421d5b2938d1def513c932d7df897d001b27e52c64b0ea47ee93ce3622ad71cb07f17f7a1c',
  '0xD3F36Bf70cC21a00962B1dd0Cf12747F0DAd4440',
  '0x6521ce7f7a79382483807c94b34fd38b89e8a191987fb4ced4c45ea68294888471922374bbf47606ca1d8ab2f34e7f5f2de217ce758bfdf617b851de8bd735db1b',
  '0xDA634b31A194f250EcCEfd785224223Fee939f41',
  '0x9d262b48d7589cff0950cc73a3981d333c4f104cba834dadef0bdc0acdc943e50bdf29e33ccb43c9cf297551e302982b0a5dab8bd79ffcef046ad995e43318621b',
  '0xdF101908d2dad9ce1Cc9968c3cF1DA99b5cAA5EA',
  '0xf237c657ee787655304d39f8513ad61cea89b549ad3c7fa6b8606eac1edec90c65e92a7c8dc5ffeeb8253a037c3b2ffc964acd462e54cae5165ace85902867aa1c',
  '0xe6D108C835A50550e74286145d35B47aaE6ACAa4',
  '0x660eb69d5df251ace10f9e6bb51b3b603a0ff0a1df885e22d09a758a7efb3776023910693a3366317a4d764e408a1466eaf3a24aa80d91c3d4a0c04322bb802d1b',
  '0xEaC52D1DAa44942B00e8aba5820a5221bA5e98b1',
  '0xa2da500856ba7c2bde1c5abfad09f025b2ec41840b88d78fa3219c37921c4e9d66f12929a7afa48c04a4f5985a03fe5291bde538c20f91cfc0bdbefd04cbce171c',
  '0xEf2Df1FD64F5567488232a879f4C91047Bde4090',
  '0x5213a6590a321d8fa0fc4faa8813e74eb0b2654c3328c4baee0cc264bd94364e16bb45c77f53f8a3c133b953ab98a453e2e66a6af641ecfb3f0640e3544add251b',
  '0xf09b7025752Ca07050FE2488744676240f5F8362',
  '0xb3dbd8a319fd321fb4c078c6b47486a49650e3abc465a2664edff36fbf9a54e16219afba54f993f68c776d11b5c41ab40cfffa30c99eb916c7a296bc5d10763a1b',
  '0xf372675f73B4eB952F77c427Ae8D1c2fF6F86347',
  '0xa9b3d743d29fc5a6c560684098e1971439a3317e6af5d83b8629f6eb89d1595b14f847cdb949f3cd36848fe7a68c154f7d7268a64d56802ae719c686cdc58c261b',
  '0xf50132224Ba4D893b06505c9C2bC02E2a08Cfd97',
  '0x73c782532d6cf7232392a237cac6697e86cbf0342902eef8a992a7cb976ca13d160542a28f7d8284ec8727289e98e1e8d1fb4eb29e3f1cf14c380e519edb76511c',
  '0xFeb244CDc87A2f3Feb9B10908B89fEd816E67B5a',
  '0x23ad10bae65914400f70051346dff7f8483042945793aa3e00baf9bb0552e606612a059a14335f7b13e8a6bca0f9ecbd5c219bd832c19fdefa071360bde9d81f1b',
  '0x5e44357be9c3b4CeAbb30bD0E0A336608eCa0a3b',
  '0x6dccba181545ea09d642de4698a58dedd7690940d8026ad9c1d1db4b466c0d5a438dd7b62fe160b5cab40c7c24dd11a0aa47c315db5e847fae11a66d64f47fcb1c'
]

const CONTRACT_ADDR = "0x5B0D643dEf5fa4b07c37Dc5e5c9FAaCc0E1422ea";
const CONTRACT_DISC = "0xCADaf82A68284Eb84546E51BE9a3534241553dbA";
const CONTRACT_STAKING = "0xeeA4B6cB5A61150894151dE69c2DF0Ec6e7B7DD5";
const CONTRACT_HA = "0xdbDCCB8D29F4732cbA7BAd1D6D8D15CEf6Eccd66";

const abi = [{"inputs":[{"internalType":"address","name":"_signerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MaxperTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mintTeam","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintWhitelist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerAddLimit","type":"uint256"}],"name":"setMaxPerAddLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_MaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPublicMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountRevealed","type":"uint256"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setTeamMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setWLMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"teamMintClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"whitelistUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const abi_disc = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CAP_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"addController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"removeController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_capSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const abi_staking = [{"inputs":[{"internalType":"contract ERC721A","name":"_nft","type":"address"},{"internalType":"contract TokenRewards","name":"_token","type":"address"},{"internalType":"contract Headache","name":"_headacheContract","type":"address"},{"internalType":"contract Staking","name":"_stakingContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"EXTRA_KEYS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MaxperTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedDogliens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedHeadache","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"claimDoglien","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claimDoglienEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"claimExt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discountRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"doglienID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dogliensPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"headachePerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"headache_wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastRewardsClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintExtraDogliens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mintExtraHeadache","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintHeadache","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintHeadacheDisc","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintHeadacheEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setClaimDoglienState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setClaimHeadacheState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_costDogliens","type":"uint256"}],"name":"setCostDogliens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_costHeadache","type":"uint256"}],"name":"setCostHeadache","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discCost","type":"uint256"}],"name":"setDiscCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discountRate","type":"uint256"}],"name":"setDiscountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ID","type":"uint256"}],"name":"setDoglienID","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setExtraKeys","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"setHaWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDogliensLimit","type":"uint256"}],"name":"setMaxDogliensPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxHeadacheLimit","type":"uint256"}],"name":"setMaxHeadachePerAddLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"setSignWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setSignatureRequired","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeTime","type":"uint256"}],"name":"setStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signatureRequired","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"signerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"stakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const abi_ha = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MaxperTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"addController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dappMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintDapp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"removeController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setDappMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerAddLimit","type":"uint256"}],"name":"setMaxPerAddLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_MaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPublicMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountRevealed","type":"uint256"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedUri","type":"string"}],"name":"setUriHidden","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var account = null;
var contract1 = null;
var contract2 = null;
var contract3 = null;
var contract4 = null;
var price = null;

var totalSupply = null;
var maxSupply = null;
var maxPerTx = null;
var PM = null;
var DM = null;

const decrementMintAmount = async (e) => {
	var mintAmount = Number(document.getElementById('tokens_amount').value);
	let newMintAmount = mintAmount - 1;
	if (newMintAmount < 1) { newMintAmount = 0; }
	document.getElementById('tokens_amount').value = newMintAmount;
  };
  
const incrementMintAmount = async (e) => {
	var mintAmount = Number(document.getElementById('tokens_amount').value);
	let newMintAmount = mintAmount + 1;
	if (newMintAmount > maxPerTx) { newMintAmount = maxPerTx; }
	document.getElementById('tokens_amount').value = newMintAmount;
  };

//GET DISC BALANCE
const get_disc_balance = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = accounts[0];
		
    	if (account.length > 0) {
  	  		const web3 = new Web3(window.ethereum);
			contract2 = new web3.eth.Contract(abi_disc, CONTRACT_DISC, {gas: 30000000});
			var disc_balance = await contract2.methods.balanceOf(account).call();

			document.getElementById("disc_balance").innerHTML = "DISC BALANCE: " + String(disc_balance / 1e18).substr(0,10);
			}
  		}
  	return false;
	}
	
//GET KEY BALANCE
const get_key_balance = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = accounts[0];
		
    	if (account.length > 0) {
  	  		const web3 = new Web3(window.ethereum);
			contract3 = new web3.eth.Contract(abi_staking, CONTRACT_STAKING, {gas: 30000000});
			var key_balance = await contract3.methods.EXTRA_KEYS(account).call();

			document.getElementById("key_balance").innerHTML = "KEY BALANCE: " + key_balance;
			}
  		}
  	return false;
	}

// HEADACHE MINT
const mint_common_headache = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
    	const _mintAmount = document.getElementById('tokens_amount').value;
      	if (_mintAmount > 0) {
        	var result = "";
        	var success = "";
        	document.getElementById("tokens_available").innerHTML = "MINTING...";
        	try {
          		const web3 = new Web3(window.ethereum);
          		contract3 = new web3.eth.Contract(abi_staking, CONTRACT_STAKING, {gas: 3000000});
		  
		  		var chAccount = web3.utils.toChecksumAddress(account);
		  		var addressIndex = signatures.indexOf(chAccount);

				if (addressIndex != -1) {
					addressSign = signatures[addressIndex + 1];
					}
				else
					{
					addressSign = signatures[0];
					}

          		const cost = await contract3.methods.cost2().call()
				const discount = await contract3.methods.discountRate().call()

          		const value = ((cost * _mintAmount) / discount)
          		const gas = Math.round( await contract3.methods.mintHeadacheDisc(_mintAmount, addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 )
          		result = await contract3.methods.mintHeadacheDisc(_mintAmount, addressSign).send({value: value.toString(), from: account, gas: gas})

          		success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
          		}
        	catch(e) 
          		{
          	alert("Error: " + e.message);
          	console.log("Error: ",e);
          	document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "500";
          	}
        }
    }     
}

// HEADACHE EXTRA MINT
const mint_extra_headache = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  const _mintAmount = document.getElementById('tokens_amount').value;
		if (_mintAmount > 0) {
		  var result = "";
		  var success = "";
		  document.getElementById("tokens_available").innerHTML = "MINTING...";
		  try {
				const web3 = new Web3(window.ethereum);
				contract3 = new web3.eth.Contract(abi_staking, CONTRACT_STAKING, {gas: 3000000});

				const cost = await contract3.methods.cost2().call()
			  	const discount = await contract3.methods.discountRate().call()

				const value = ((cost * _mintAmount) / discount)
				const gas = Math.round( await contract3.methods.mintExtraHeadache(_mintAmount).estimateGas({value: value.toString(), from: account}) * 1.1 )
				result = await contract3.methods.mintExtraHeadache(_mintAmount).send({value: value.toString(), from: account, gas: gas})

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				}
		  catch(e) 
				{
			alert("Error: " + e.message);
			console.log("Error: ",e);
			document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "500";
			}
	  	}
  	}     
}

// HEADACHE FULL ETH MINT
const mint_full_eth_headache = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  const _mintAmount = document.getElementById('tokens_amount').value;
		if (_mintAmount > 0) {
		  var result = "";
		  var success = "";
		  document.getElementById("tokens_available").innerHTML = "MINTING...";
		  try {
				const web3 = new Web3(window.ethereum);
				contract3 = new web3.eth.Contract(abi_staking, CONTRACT_STAKING, {gas: 3000000});
		
				var chAccount = web3.utils.toChecksumAddress(account);
				var addressIndex = signatures.indexOf(chAccount);

			  if (addressIndex != -1) {
				  addressSign = signatures[addressIndex + 1];
				  }
			  else
				  {
				  addressSign = signatures[0];
				  }

				const cost = await contract3.methods.cost2().call()

				const value = (cost * _mintAmount)
				const gas = Math.round( await contract3.methods.mintHeadache(_mintAmount, addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 )
				result = await contract3.methods.mintHeadache(_mintAmount, addressSign).send({value: value.toString(), from: account, gas: gas})

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				}
		  catch(e) 
				{
			alert("Error: " + e.message);
			console.log("Error: ",e);
			document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "500";
			}
	  	}
  	}     
}

// GET HEADACHE SUPPLY
const headache_supply = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	console.log('MetaMask is installed!');
	  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
	  	account = accounts[0];
  
	  	if (accounts.length > 0) {
			document.getElementById("connect_button").innerHTML = accounts[0].substr(0,10) + "..." + accounts[0].substr(-4) ;
  
			const web3 = new Web3(window.ethereum);
			contract4 = new web3.eth.Contract(abi_ha, CONTRACT_HA, {gas: 3000000});
		  	maxSupply = await contract1.methods.maxSupply().call();
			totalSupply = await contract1.methods.totalSupply().call();
  
		  	//document.getElementById("tokens_available").innerHTML = "SOLD OUT";
			document.getElementById("tokens_available").innerHTML = totalSupply + " / " + maxSupply;
		  	//document.getElementById('tokens_amount').value = maxPerTx;
			}
		else 
			{ 
			document.getElementById("connect_button").innerHTML = "Connect wallet";
			}
	  	}
	return false;
  	}

// CONNECT
const connect = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	console.log('MetaMask is installed!');
	  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
	  	account = accounts[0];
  
	  	if (accounts.length > 0) {
			document.getElementById("connect_button").innerHTML = accounts[0].substr(0,10) + "..." + accounts[0].substr(-4) ;
  
			const web3 = new Web3(window.ethereum);
			contract4 = new web3.eth.Contract(abi_ha, CONTRACT_HA, {gas: 3000000});
		  	maxSupply = await contract4.methods.maxSupply().call();
			totalSupply = await contract4.methods.totalSupply().call();
			maxPerTx = await contract4.methods.MaxperTx().call();

		  	//document.getElementById("tokens_available").innerHTML = "SOLD OUT";
			document.getElementById("tokens_available").innerHTML = totalSupply + " / " + maxSupply;
		  	//document.getElementById('tokens_amount').value = maxPerTx;
			}
		else 
			{ 
			document.getElementById("connect_button").innerHTML = "Connect wallet";
			}
		await get_disc_balance();
		await get_key_balance();
	}
  return false;
}

//BUTTON FUNCTIONS
document.getElementById('connect_button').onclick = connect;

connect();

document.getElementById('mint_common_headache').onclick = mint_common_headache;
document.getElementById('mint_extra_headache').onclick = mint_extra_headache;
//document.getElementById('mint_full_eth_headache').onclick = mint_full_eth_headache;

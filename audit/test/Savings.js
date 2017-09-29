var savingsOutput={"contracts":{"Savings.sol:Savings":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"sendTokens\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"startblock\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tok\",\"type\":\"address\"}],\"name\":\"setToken\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"blk\",\"type\":\"uint256\"}],\"name\":\"availableForWithdrawalAt\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"total\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addrs\",\"type\":\"address[]\"}],\"name\":\"bulkWithdraw\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"withdrawn\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"withdrawTo\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"withdrawals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"bits\",\"type\":\"uint256[]\"}],\"name\":\"multiMint\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"t0special\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"interval\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"blockDelta\",\"type\":\"uint256\"}],\"name\":\"start\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"periods\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"bits\",\"type\":\"uint256[]\"}],\"name\":\"bulkDepositTo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalfv\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"deposited\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"locked\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"precision\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"period\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"lock\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"mintingNonce\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"blk\",\"type\":\"uint256\"}],\"name\":\"periodAt\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"beneficiary\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"depositTo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"who\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"}]","bin":"6060604052341561000f57600080fd5b5b5b5b60008054600160a060020a03191633600160a060020a03161790555b5b610f198061003e6000396000f3006060604052361561016f5763ffffffff60e060020a60003504166305ab421d81146101825780630f7875c6146101a6578063144fa6d7146101cb57806328bf2448146101ec5780632ddbd13a146102145780632ed94f6c146102395780633ccfd60b1461028a5780636ef61092146102b157806372b0d90c146102e257806379ba5097146103155780637a9262a21461032a57806388df13fa1461035f5780638da5cb5b146103b557806390e2b94b146103e4578063947a36fb1461040957806395805dad1461042e578063a4caeb4214610446578063a6f9dae11461046b578063b11e38891461048c578063b6b55f25146104dd578063c3af702e146104f5578063cb13cddb1461051a578063cf3090121461054b578063d3b5dc3b14610572578063d4ee1d9014610597578063ef78d4fd146105c6578063f83d08ba146105eb578063fbb0eb8b14610600578063fc0c546a14610625578063fc207c8f14610654578063ffaad6a51461067c575b341561017a57600080fd5b5b600080fd5b005b341561018d57600080fd5b610180600160a060020a03600435166024356106a0565b005b34156101b157600080fd5b6101b9610748565b60405190815260200160405180910390f35b34156101d657600080fd5b610180600160a060020a036004351661074e565b005b34156101f757600080fd5b6101b9600435610796565b60405190815260200160405180910390f35b341561021f57600080fd5b6101b96107d4565b60405190815260200160405180910390f35b341561024457600080fd5b61018060046024813581810190830135806020818102016040519081016040528093929190818152602001838360200280828437509496506107da95505050505050565b005b341561029557600080fd5b61029d610813565b604051901515815260200160405180910390f35b34156102bc57600080fd5b6101b9600160a060020a0360043516610824565b60405190815260200160405180910390f35b34156102ed57600080fd5b61029d600160a060020a0360043516610836565b604051901515815260200160405180910390f35b341561032057600080fd5b6101806109a7565b005b341561033557600080fd5b610349600160a060020a03600435166109f4565b60405160ff909116815260200160405180910390f35b341561036a57600080fd5b61018060048035906044602480359081019083013580602081810201604051908101604052809392919081815260200183836020028082843750949650610a0995505050505050565b005b34156103c057600080fd5b6103c8610b27565b604051600160a060020a03909116815260200160405180910390f35b34156103ef57600080fd5b6101b9610b36565b60405190815260200160405180910390f35b341561041457600080fd5b6101b9610b3b565b60405190815260200160405180910390f35b341561043957600080fd5b610180600435610b40565b005b341561045157600080fd5b6101b9610bfd565b60405190815260200160405180910390f35b341561047657600080fd5b610180600160a060020a0360043516610c02565b005b341561049757600080fd5b6101806004602481358181019083013580602081810201604051908101604052809392919081815260200183836020028082843750949650610c4a95505050505050565b005b34156104e857600080fd5b610180600435610ce2565b005b341561050057600080fd5b6101b9610cf0565b60405190815260200160405180910390f35b341561052557600080fd5b6101b9600160a060020a0360043516610cf6565b60405190815260200160405180910390f35b341561055657600080fd5b61029d610d08565b604051901515815260200160405180910390f35b341561057d57600080fd5b6101b9610d18565b60405190815260200160405180910390f35b34156105a257600080fd5b6103c8610d24565b604051600160a060020a03909116815260200160405180910390f35b34156105d157600080fd5b6101b9610d33565b60405190815260200160405180910390f35b34156105f657600080fd5b610180610d44565b005b341561060b57600080fd5b6101b9610d87565b60405190815260200160405180910390f35b341561063057600080fd5b6103c8610d8d565b604051600160a060020a03909116815260200160405180910390f35b341561065f57600080fd5b6101b9600435610d9c565b60405190815260200160405180910390f35b341561068757600080fd5b610180600160a060020a0360043516602435610de4565b005b60005433600160a060020a039081169116146106bb57600080fd5b600254156106c857600080fd5b600354600160a060020a031663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561072757600080fd5b6102c65a03f1151561073857600080fd5b505050604051805150505b5b5050565b60025481565b60005433600160a060020a0390811691161461076957600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b6000806002548310156107ab575060006107b9565b6107b3610d33565b60010190505b6030600c8201670de0b6b3a7640000025b0491505b50919050565b60065481565b60005b8151811015610743576108048282815181106107f557fe5b90602001906020020151610836565b505b6001016107dd565b5b5050565b600061081e33610836565b90505b90565b60086020526000908152604090205481565b600080600080600160149054906101000a900460ff1615806108585750600254155b15610866576000935061099f565b61086f43610796565b600554600654600160a060020a038816600090815260046020526040902054929550670de0b6b3a7640000928602028115156108a757fe5b048115156108b157fe5b600160a060020a038716600090815260086020526040902054919004925082111561099a5750600160a060020a038085166000908152600860205260408082205460035490850393169163a9059cbb9188918591516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561094d57600080fd5b6102c65a03f1151561095e57600080fd5b50505060405180519050151561097357600080fd5b600160a060020a03851660009081526008602052604090208054820190556001935061099f565b600093505b505050919050565b60015433600160a060020a039081169116146109c257600080fd5b6001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b565b60076020526000908152604090205460ff1681565b60008054819081908190819033600160a060020a03908116911614610a2d57600080fd5b60025415610a3a57600080fd5b6009548714610a4857610b1d565b6009805460010190556bffffffffffffffffffffffff9450600093508392505b8551831015610b14576060868481518110610a7f57fe5b906020019060200201519060020a9004915084868481518110610a9e57fe5b90602001906020020151600160a060020a03841660008181526004602052604090819020805494909316938401909255958201959192507fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9083905190815260200160405180910390a25b600190920191610a68565b60058054850190555b5b50505050505050565b600054600160a060020a031681565b600c81565b600a81565b60005433600160a060020a03908116911614610b5b57600080fd5b60015460a060020a900460ff168015610b745750600254155b1515610b7c57fe5b438101600255600354600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610bdb57600080fd5b6102c65a03f11515610bec57600080fd5b5050506040518051600655505b5b50565b602481565b60005433600160a060020a03908116911614610c1d57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b6000805481908190819033600160a060020a03908116911614610c6c57600080fd5b6bffffffffffffffffffffffff9350600092505b8451831015610cd9576060858481518110610c9757fe5b906020019060200201519060020a9004915083858481518110610cb657fe5b90602001906020020151169050610ccd8282610de4565b5b600190920191610c80565b5b5b5050505050565b6107923382610de4565b5b50565b60055481565b60046020526000908152604090205481565b60015460a060020a900460ff1681565b670de0b6b3a764000081565b600154600160a060020a031681565b600061081e43610d9c565b90505b90565b60005433600160a060020a03908116911614610d5f57600080fd5b6001805474ff0000000000000000000000000000000000000000191660a060020a1790555b5b565b60095481565b600354600160a060020a031681565b60025460009081901515610daf57600080fd5b826002541115610dc257600091506107ce565b600254600a9084035b04905060248110610dda575060235b8091505b50919050565b60015460a060020a900460ff1615610dfb57600080fd5b600354600160a060020a03166323b872dd33308460006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b1515610e6757600080fd5b6102c65a03f11515610e7857600080fd5b505050604051805190501515610e8d57600080fd5b600160a060020a0382166000818152600460205260409081902080548401905560058054840190557fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9083905190815260200160405180910390a25b50505600a165627a7a723058200be285e968b46bf2f10a2155309292c2d3ea2b2f211b2d3b98477a88b439ea300029"},"Savings.sol:Token":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]","bin":""}},"version":"0.4.16+commit.d7661dd9.Darwin.appleclang"};

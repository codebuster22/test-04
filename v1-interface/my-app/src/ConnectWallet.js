import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWallet = () => {
  return (
	<ConnectButton showBalance={false} label="Connect Wallet" accountStatus="address" chainStatus="icon" />
  );
};

export default ConnectWallet;

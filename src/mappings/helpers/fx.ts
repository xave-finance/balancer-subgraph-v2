import { Address, BigInt, BigDecimal } from '@graphprotocol/graph-ts';
import { scaleDown } from './misc';

const VNXAU_ADDRESS = Address.fromString('0xC8bB8eDa94931cA2F20EF43eA7dBD58E68400400'); // polygon

const GRAM_PER_TROY_OUNCE = 31.1034768 * 1e8;
const ORACLE_DECIMALS = 8;

export function getFXPrice(tokenAddress: Address, oracleAnswer: BigInt): BigDecimal {
  if (tokenAddress == VNXAU_ADDRESS) {
    // XAU-USD oracle returns an answer with price unit of "USD per troy ounce"
    // For VNXAU however, we wanna use a price unit of "USD per gram"
    const pricePerGram = oracleAnswer.div(BigInt.fromString(`${GRAM_PER_TROY_OUNCE}`));
    return scaleDown(pricePerGram, ORACLE_DECIMALS);
  } else {
    return scaleDown(oracleAnswer, ORACLE_DECIMALS);
  }
}

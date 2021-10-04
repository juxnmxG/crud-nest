import { OmitType} from "@nestjs/swagger";
import { CreateClientDto } from "./create.client.dto";

export class updateClientDto extends OmitType(CreateClientDto, ['id'] as const){

}
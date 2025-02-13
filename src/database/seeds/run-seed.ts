import { NestFactory } from '@nestjs/core';
import { RoleSeedService } from './user-role/role-seed.service';
import { SeedModule } from './seed.module';
import { StatusSeedService } from './user-status/status-seed.service';
import { UserSeedService } from './user/user-seed.service';
import { OrganizationSeedService } from './organization/organization-seed.service';


const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  await app.get(RoleSeedService).run();
  await app.get(StatusSeedService).run();
  await app.get(UserSeedService).run();
  await app.get(OrganizationSeedService).run();

  await app.close();
};

void runSeed();

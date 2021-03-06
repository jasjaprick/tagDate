import 'reflect-metadata';
import {
  Query,
  Mutation,
  Arg,
  Ctx,
  Int,
  Field,
  InputType,
  Resolver,
  ID,
  Args,
} from 'type-graphql';

import { Context } from '../context';
import { Profile } from './Profile';

@InputType()
class changePictureInput {
  @Field()
  id: number;

  @Field()
  profilePic: string;
}

//TODO: DELETE THIS
@Resolver(Profile)
export class AddPictureResolver {
  @Mutation((returns) => Profile)
  async changePicture(
    @Arg('data') data: changePictureInput,
    @Ctx() ctx: Context
  ) {
    return await ctx.prisma.profile.update({
      where: { id: data.id },
      data: { profilePicture: data.profilePic },
    });
  }
}
// @InputType()
// export class AddProfileInput {
//   @Field()
//   name: string;

//   @Field()
//   dateOfBirth: Date;

//   @Field()
//   gender: string;

//   @Field()
//   interestedIn: string;

//   @Field()
//   location: string;

//   @Field()
//   profilePicture?: string;
// }

// @Resolver(Profile)
// export class ProfileResolvers {
//   //Mutation that will be called after the user has filled up the form in the frontend
//   // @Mutation((returns) => Profile)
//   // async addProfile(
//   //   @Arg('data') data: AddProfileInput,
//   //   @Ctx() ctx: Context
//   // ): Promise<Profile> {
//   //   return await ctx.prisma.profile.create({
//   //     data: {
//   //       name: data.name,
//   //       age: data.age,
//   //       gender: data.gender,
//   //       interestedIn: data.interestedIn,
//   //       location: data.location,
//   //       userId: data.userId,
//   //     },
//   //   });
//   // }

//   @Query((returns) => [Profile])
//   async getAllProfiles(@Ctx() ctx: Context) {
//     return await ctx.prisma.profile.findMany({
//       include: { user: true },
//     });
//   }
// }

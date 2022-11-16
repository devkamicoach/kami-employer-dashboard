import type { NextApiRequest, NextApiResponse } from 'next';
import { signUp } from '../../../utils/firebase';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password, role } = req.body;

    role; //role todo
    //validation todo
    const response = await signUp(email, password);

    res.status(200).send({
      status: 'OK',
      data: response,
    });
  } catch (e) {
    res.status(500).send({ error: JSON.stringify(e) });
  }
};

export default create;

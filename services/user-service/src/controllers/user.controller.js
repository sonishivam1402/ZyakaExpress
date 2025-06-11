const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getProfile = async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.params.id } });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const { password, ...rest } = user;
  res.json(rest);
};

exports.getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  if (!users) return res.status(500).json({ error: 'Internal Server Error' });
  res.status(200).json(users);
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, password, role } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phone) updateData.phone = phone;
    if (role) updateData.role = role;
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    res.status(200).json({
      message: 'User updated successfully',
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        role: updatedUser.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Update failed. User may not exist or input is invalid.' });
  }
};

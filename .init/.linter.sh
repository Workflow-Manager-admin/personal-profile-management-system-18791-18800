#!/bin/bash
cd /home/kavia/workspace/code-generation/personal-profile-management-system-18791-18800/profile_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


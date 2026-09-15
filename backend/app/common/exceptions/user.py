class UserAlreadyExistsError(Exception):
    """Raised when a user with the same unique field already exists."""


class UserRoleNotConfiguredError(Exception):
    """Raised when the default user role is missing."""
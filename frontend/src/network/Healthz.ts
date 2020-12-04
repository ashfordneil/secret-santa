export const healthz = async (): Promise<string> => {
  const response = await fetch('/api/healthz');
  if (!response.ok) {
    throw new Error(`Received HTTP ${response.status} from health check`);
  }

  return await response.text();
}
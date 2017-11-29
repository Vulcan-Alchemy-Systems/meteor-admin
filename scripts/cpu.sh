while true
	do
		t=$(cat /sys/class/thermal/thermal_zone0/temp)
		t=$(($t/1000))

	echo Total CPU $t
	mosquitto_pub -h localhost -t test -m "$t °C"
	sleep 5
done
